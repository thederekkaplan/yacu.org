<template>
	<div style="width: 100%; text-align: center; padding: 4px; background-color: rgb(105, 72, 152);" v-html="text"></div>
</template>

<script>
	export default {
		props: ['text'],
	}
</script>