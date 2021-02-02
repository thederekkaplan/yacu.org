<template>
	<a-layout-content>
		<img src="unet.webp" style="max-height: 100px; max-width: 100%;" />
		<p>The YACU Unity Network is a group of student authors, editors, and content producers who seek to inform others through the publication of articles, podcasts, and policy papers! The opinions expressed in any Unity Network content solely belong to the respective author(s) and do not represent the views of the YACU.</p>
		<br>
		<a-row type="flex" :gutter="[32, 32]">
			<a-col v-for="item in articles" :key="item.href" span="8">
				<a :href="'/unet/' + item.href">
	    			<a-card hoverable :bordered="false" style="height: 100%">
	    				<!--<img slot="cover" :src="item.src"/>-->
	    				<h3>{{ item.title }}</h3>
						<a-card-meta :description="'By ' + item.author" />
					</a-card>
				</a>
			</a-col>
		</a-row>
	</a-layout-content>
</template>

<script>
export default {
  data() {
    return {
      articles: [],
    }
  },
  async fetch () {
  	this.articles = [];
  	const snapshot = await this.$fire.firestore.collection('unet').orderBy('date', 'desc').limit(12).get();
  	snapshot.forEach(doc => {
  		const data = doc.data();
  		this.articles.push({
  			title: data.title,
  			author: data.author,
  			href: data.url,
  		});
  	})
  }
}
</script>