<template>
	<a-spin :spinning="loading">
		<a-row type="flex" :gutter="[32, 32]">
			<a-col v-for="item in ((truncate && $mq == 'sm') ? articles.slice(0,2) : articles)" :key="item.href" :xs="24" :sm="12" :md="8">
				<nuxt-link :to="'/unet/' + (item.policy ? 'policy/' + item.href : item.href)">
					<a-card hoverable :bordered="false" style="height: 100%">
						<img slot="cover" :src="item.download"/>
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
		props: ['limit', 'truncate'],
		data() {
			return {
				articles: [],
				loading: true,
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
					href: doc.id,
					download: data.download,
					policy: data.policy,
				});
			});
			this.loading = false;
		},
		methods: {
			async loadMore () {
				this.loading = true;
				const pointer = await this.$fire.firestore.collection('unet').doc(this.articles[this.articles.length - 1].href).get();
				const snapshot = await this.$fire.firestore.collection('unet').orderBy('date', 'desc').startAfter(pointer).limit(this.limit).get();
				snapshot.forEach(doc => {
					const data = doc.data();
					this.articles.push({
						title: data.title,
						author: data.author,
						href: doc.id,
						download: data.download,
						policy: data.policy,
					});
				});
				this.loading = false;
			}
		},
	}
</script>