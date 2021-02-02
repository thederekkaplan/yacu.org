<template>
	<a-spin :spinning="$fetchState.pending">
		<a-row type="flex" :gutter="[32, 32]">
			<a-col v-for="item in articles" :key="item.href" span="8">
				<nuxt-link :to="'/unet/' + item.href">
					<a-card hoverable :bordered="false" style="height: 100%">
						<img slot="cover" :src="item.src"/>
						<h3>{{ item.title }}</h3>
						<a-card-meta :description="'By ' + item.author" />
					</a-card>
				</nuxt-link>
			</a-col>
		</a-row>
	</a-spin>
</template>

<script>
	export default {
		props: ['limit'],
		data() {
			return {
				articles: [],
			}
		},
		async fetch () {
			this.articles = [];
			const snapshot = await this.$fire.firestore.collection('unet').orderBy('date', 'desc').limit(this.limit).get();
			snapshot.forEach(doc => {
				const data = doc.data();
				this.articles.push({
					title: data.title,
					author: data.author,
					href: data.url,
					srcName: data.image,
				});
			});
			if (process.browser) {
				this.loadPictures();
			}
		},
		methods: {
			async loadPictures () {
				const addSrc = async item => {
					if(item.srcName) {
						const url = await this.$fire.storage.ref('unet').child(item.srcName).getDownloadURL();
						return { ...item, src: url };
					} else {
						return { ...item, src: '' };
					}
				}

				this.articles = await Promise.all(this.articles.map(addSrc));
			},
		},
		mounted () {
			if (!this.$fetchState.pending) {
				this.loadPictures();
			}
		},
	}
</script>