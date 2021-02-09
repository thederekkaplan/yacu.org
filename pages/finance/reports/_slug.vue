<template>
	<a-layout-content>
		<h1>{{ this.title }}</h1>
		<object :data="url" width="100%" height="800px">
			<h3><a :href="url"><a-icon type="file-pdf"/> {{ this.title }}</a></h3>
		</object>
	</a-layout-content>
</template>

<script>
	export default {
		head() {
			return {
				title: this.$fetchState.error ? 'Not Found | Young Americans Coalition for Unity' : this.title + ' | Young Americans Coalition for Unity',
			}
		},
		data() {
			return {
				url: '',
				title: '',
			}
		},
		async fetch () {
			const doc = await this.$fire.firestore.collection('reports').doc(this.$nuxt.$route.params.slug).get();
			if (!doc.exists) {
				if (process.server) {
					this.$nuxt.context.res.statusCode = 404
				}
				this.$nuxt.error({ statusCode: 404, message: 'Page not found' });
			}
			const data = doc.data();
			this.url = data.url;
			this.title = data.title;
		}
	}
</script>
