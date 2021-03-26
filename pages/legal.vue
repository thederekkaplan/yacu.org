<template>
	<a-layout-content>
		<h1>Legal Information</h1>
		<p>To learn more about the YACU and its structure, please view our <a href="https://bylaws.yacu.org">bylaws</a> and our internal <a href="https://docs.google.com/document/d/e/2PACX-1vTbNe3mYBkZz2bn3Z_FEiNSSQlHd2cT0Eev034-ReknNNKKlQsSI7FXx4bBd-jU4xGuEhWZnTqP7lsj/pub">Code of Conduct</a>. For further questions regarding the content on this page, please email <a href="mailto:legal@yacu.org">legal@yacu.org</a>.</p>
		<object data="/Terms%20of%20Use.pdf" width="100%" height="600px">
			<h3><a href="/Terms%20of%20Use.pdf"><a-icon type="file-pdf"/> Terms of Use</a></h3>
		</object>
		<object data="/Privacy%20Policy.pdf" width="100%" height="600px">
			<h3><a href="/Privacy%20Policy.pdf"><a-icon type="file-pdf"/> Privacy Policy</a></h3>
		</object>
		<h2>Conflict of Interest Disclosures</h2>
		<a-spin :spinning="spin">
			<iframe src="https://airtable.com/embed/shrfVdpsGYYwYe94N?backgroundColor=purple&amp;viewControls=on" width="100%" height="1000px" frameborder="0" @load="spin=false" />
		</a-spin>
	</a-layout-content>
</template>

<script>
	export default {
		head: {
			title: 'Legal Info | Young Americans Coalition for Unity'
		},
		data() {
			return {
				spin: true,
			}
		}
	}
</script>
