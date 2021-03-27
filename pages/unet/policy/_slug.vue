<template>
	<a-layout-content>
		<h2>{{ title }}</h2>
		<h3 v-if="author">
			<i>{{'By '}}<a :href="'/unet/author/' + author">{{author.replace(/_/g, ' ')}}</a></i>
		</h3>
		<br>
		<a-spin :spinning="$fetchState.pending">
			<object :data="url" width="100%" height="600px">
				<h3><a :href="url"><a-icon type="file-pdf"/> Download Policy Paper</a></h3>
			</object>
		</a-spin>
	</a-layout-content>
</template>

<script>
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
				url: '',
			}
		},
		async validate ({ app, params }) {
			const doc = await app.$fire.firestore.collection('unet').doc(params.slug).get()
			if (!doc.exists || !doc.data().policy) { return false; }
			return true;
		},
		async fetch () {
			const doc = await this.$fire.firestore.collection('unet').doc(this.$nuxt.$route.params.slug).get();
			const data = doc.data();
			this.title = data.title;
			this.author = data.author;
			
			this.url = `https://firebasestorage.googleapis.com/v0/b/yacu-website.appspot.com/o/policy%2F${ this.$nuxt.$route.params.slug }.pdf?alt=media`;
		},
		fetchOnServer: true,
	}
</script>