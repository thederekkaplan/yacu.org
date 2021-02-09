<template>
	<a-layout-content>
		<h1>{{ title }}</h1>
		<h3><i>{{ author ? 'By ' + author : '' }}</i></h3>
		<br>
		<a-spin :spinning="loading">
			<div style="text-align: left; max-width: 700px; margin: auto; font-size: 18px;" v-html="markdown"></div>
		</a-spin>
	</a-layout-content>
</template>

<script>
	import Markdown from '@nuxt/markdown';

	export default {
		head() {
			return {
				title: this.$fetchState.error ? 'Not Found | Young Americans Coalition for Unity' : this.title + ' | Unity Network',
				meta: [
					{ hid: 'description', name: 'description', content: 'The YACU Unity Network is a group of student authors, editors, and content producers who seek to inform others through the publication of articles, podcasts, and policy papers!' },
					{ hid: 'author', name: 'author', content: this.author }
				]
			}
		},
		data() {
			return {
				title: '',
				author: '',
				markdown: '',
				loading: true,
			}
		},
		async fetch () {
			const doc = await this.$fire.firestore.collection('unet').doc(this.$nuxt.$route.params.slug).get();
			if (!doc.exists) {
				if (process.server) {
					this.$nuxt.context.res.statusCode = 404
				}
				this.$nuxt.error({ statusCode: 404, message: 'Page not found' });
				this.loading = false;
			}
			const data = doc.data();
			this.title = data.title;
			this.author = data.author;
			if (process.browser) {
				this.loadMarkdown();
			}
		},
		methods: {
			async loadMarkdown () {
				const url = await this.$fire.storage.ref('unet').child(this.$nuxt.$route.params.slug + ".md").getDownloadURL();
				const response = await fetch(url);
				const md = new Markdown({ toc: false, sanitize: false });
				this.markdown = (await md.toMarkup(await response.text())).html;
				this.loading = false;
			}
		},
		mounted () {
			if (!this.$fetchState.pending) {
				this.loadMarkdown();
			}
		}
	}
</script>