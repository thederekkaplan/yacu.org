<template>
	<div :style="{ width: '100%', textAlign: 'center', padding: '4px', backgroundColor: color }" v-html="text"></div>
</template>

<script>
	export default {
		props: ['text','color'],
	}
</script>