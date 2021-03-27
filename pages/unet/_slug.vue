<template>
	<a-layout-content>
		<h2>{{ title }}</h2>
		<h3 v-if="author"><i>
			{{ 'By' }} <a :href="'/unet/author/' + author"> {{ author.replace(/_/g, ' ') }} </a>
		</i></h3>
		<br>
		<a-spin :spinning="$fetchState.pending">
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
			}
		},
		async validate ({ app, params }) {
			const doc = await app.$fire.firestore.collection('unet').doc(params.slug).get()
			if (!doc.exists || doc.data().policy) { return false; }
			return true;
		},
		async fetch () {
			const doc = await this.$fire.firestore.collection('unet').doc(this.$nuxt.$route.params.slug).get();
			const data = doc.data();
			this.title = data.title;
			this.author = data.author
			
			const url = `https://firebasestorage.googleapis.com/v0/b/yacu-website.appspot.com/o/unet%2F${ this.$nuxt.$route.params.slug }.md?alt=media`;
			const response = await fetch(url);
			const md = new Markdown({ toc: false, sanitize: false });
			this.markdown = (await md.toMarkup(await response.text())).html;
		}
	}
</script>