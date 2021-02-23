<template>
	<a-layout-content>
		<img src="unet.webp" style="max-height: 100px; max-width: 100%;" />
		<p>The YACU Unity Network is a group of student authors, editors, and content producers who seek to inform others through the publication of articles, podcasts, and policy papers! The opinions expressed in any Unity Network content solely belong to the respective author(s) and do not represent the views of the YACU.</p>
		<br>
		<unity-network limit="12" ref="unet"/>
		<br><br>
		<a-button type="primary" size="large" @click="$refs.unet.loadMore()">Load More</a-button>
	</a-layout-content>
</template>

<script>
	export default {
		head: {
			title: 'Unity Network | Young Americans Coalition for Unity',
			meta: [
				{ hid: 'description', name: 'description', content: 'The YACU Unity Network is a group of student authors, editors, and content producers who seek to inform others through the publication of articles, podcasts, and policy papers!' }
			]
		},
	}
</script>