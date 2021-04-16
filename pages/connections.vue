<template>
	<a-layout-content>
		<h1>Our Connections</h1>

		<a-divider id="pye">Partners in Youth Engagement</a-divider>
		<p>Our Partners in Youth Engagement (PYEs) are youth-focused organizations that can be partisan or nonpartisan. We often collaborate with PYEs to share programming between other young people and to help engage a wider span of young people in politics.</p><br>
		<a-spin :spinning="spin1" style="width: 100%; max-width: 750px; height: 600px; margin: auto;">
			<iframe src="https://airtable.com/embed/shrXzKwgOEJnFTVy8?backgroundColor=blue&amp;viewControls=on" width="100%" height="600" frameborder="0" @load="spin1=false" />
		</a-spin><br>

		<a-divider id="pub">Partners in Unity and Bipartisanship</a-divider>
		<p>Our Partners in Unity and Bipartisanship (PUBs) are organizations that are focused on bringing bipartisanship into politics today. We often work with PUBs to help educate members on important policy issues from both sides of the aisle as well as provide opportunities to expand civil political discussion.</p><br>
		<a-spin :spinning="spin2" style="width: 100%; max-width: 750px; height: 600px; margin: auto;">
			<iframe src="https://airtable.com/embed/shrqDjnyQ0rqP5Sqd?backgroundColor=blue&amp;viewControls=on" width="100%" height="600" frameborder="0" @load="spin2=false" />
		</a-spin><br>

		<a-divider id="politicians">Politicians</a-divider>
		<p>As a nonpartisan 501(c)(3) organization, the YACU does not endorse, promote, nor support any of the politicians or candidates listed on our database. During a campaign season, we have listings of volunteer and/or internship opportunities for high school and college students. We also have these candidates present at campaign spotlights during our YACU-Cons. After the election, we have listings of internship opportunities at congressional offices and other offices of elected officials.</p><br>
		<a-row :gutter="16">
			<a-col :md="12" :sm="24">
				<h4>Current Elected Officials</h4>
				<a-spin :spinning="spin3" style="width: 100%; height: 600px;;">
					<iframe src="https://airtable.com/embed/shrxEzRCLvFQDUFjg?backgroundColor=blue&amp;viewControls=on" width="100%" height="600" frameborder="0" @load="spin3=false" />
				</a-spin>
			</a-col>
			<a-col :md="12" :sm="24">
				<h4>Campaigns</h4>
				<a-spin :spinning="spin4" style="width: 100%; height: 600px;;">
					<iframe src="https://airtable.com/embed/shrq5FpJeQqDM9aZq?backgroundColor=blue&amp;viewControls=on" width="100%" height="600" frameborder="0" @load="spin4=false" />
				</a-spin>
			</a-col>
		</a-row><br>

		<a-divider id="academia">Academia</a-divider>
		<p>The YACU is proud to connect with professors from renowned universities to offer our members research/internship opportunities. There are a variety of different research interests in political and public policy fields to be explored. You may connect with any of the professors listed, but preference is given to members of the political education subdivision of the political team.</p><br>
		<a-spin :spinning="spin5" style="width: 100%; max-width: 750px; height: 600px; margin: auto;">
			<iframe src="https://airtable.com/embed/shrbSHbCPSZbKxtbw?backgroundColor=blue&amp;viewControls=on" width="100%" height="600" frameborder="0" @load="spin5=false" />
		</a-spin><br>
	</a-layout-content>
</template>

<script>
	export default {
		head: {
			title: 'Our Connections | Young Americans Coalition for Unity'
		},
		data() {
			return {
				spin1: true,
				spin2: true,
				spin3: true,
				spin4: true,
				spin5: true,
				activeKey: ['1', '2', '3', '4'],
			}
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