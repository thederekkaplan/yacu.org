<template>
	<a-layout-content>
		<a-space :size="30">
			<a-avatar v-if="image" :size="128" slot="avatar" :src="image" />
			<a-avatar v-else :size="128" slot="avatar" icon="user" />
			<h2 style="margin: 0; display: inline-block; vertical-align: middle;">{{ name }}</h2>
		</a-space>
		<br><br><br>
		<p>{{ description }}</p>
		<br>
		<a-divider>Articles</a-divider>
		<unity-network limit="6" :author="this.name.replace(/ /g, '_')" ref="unet" style="margin: 0 25px;"/>
		<br><br>
		<a-button type="primary" size="large" @click="$refs.unet.loadMore()">Load More</a-button>
	</a-layout-content>
</template>

<script>
	export default {
		head() {
			return {
				title: this.$fetchState.error ? 'Not Found | Young Americans Coalition for Unity' : this.name + ' | Unity Network',
				meta: [
					{ hid: 'description', name: 'description', content: 'The YACU Unity Network is a group of student authors, editors, and content producers who seek to inform others through the publication of articles, podcasts, and policy papers!' },
					{ hid: 'author', name: 'author', content: this.name }
				]
			}
		},
		data() {
			return {
				name: '',
				image: '',
				description: '',
			}
		},
		async validate ({ app, params, redirect }) {
			/* const doc = await app.$fire.firestore.collection('unet').doc(params.slug).get()
			if (!doc.exists || doc.data().policy) { return false; } */
			if (params.slug.includes(' ')) {
				redirect('/unet/author/' + params.slug.replace(/ /g, '_'))
				return true;
			} else {
				const doc = await app.$fire.firestore.collection('authors').doc(params.slug).get()
				if (!doc.exists) { return false; }
				return true
			}
		},
		async fetch () {
			const doc = await this.$fire.firestore.collection('authors').doc(this.$nuxt.$route.params.slug).get();
			const data = doc.data();
			this.image = data.image;
			this.description = data.description
			this.name = this.$nuxt.$route.params.slug.replace(/_/g, ' ');
		}
	}
</script>

<style scoped>
p {
	max-width: 700px;
	margin: auto;
}

.ant-divider-inner-text {
	font-size: 36px;
}

.ant-divider-horizontal.ant-divider-with-text-center::after, .ant-divider-horizontal.ant-divider-with-text-center::before {
	border-color: rgba(255,255,255,0.75);
}
</style>