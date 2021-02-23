<template>
	<a-layout-content>
		<br>
		<h3>Sorry, we couldn't find that page.</h3>
		<p>Error 404</p>
		<br>
		<nuxt-link to="/"><a-button type="primary" size="large">Home</a-button></nuxt-link>
	</a-layout-content>
</template>

<script>
	export default {
		head() {
			return {
				title: 'Not Found | Young Americans Coalition for Unity'
			}
		}
	}
</script>