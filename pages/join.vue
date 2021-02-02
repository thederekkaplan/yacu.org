<template>
  <a-layout-content>
  	<h1>Ways to Get Involved</h1>
  	<a-divider id="discord">Join Our Discord!</a-divider>
  	<p>From debating fellow YACU members to bonding over the struggles of school or even just playing Minecraft together, we have got you covered here! With nearly 1,000 members, you will never be bored here.</p>
  	<br>
  	<iframe src="https://discordapp.com/widget?id=581634474366730241&amp;theme=dark" width="400px" height="400px" frameborder="0"></iframe>
  	<a-divider id="volunteer">Join a Volunteer Team!</a-divider>
  	<p>We have several youth-led teams, ranging anywhere from graphic design to policy analysis, that you can join. No matter what your talents are, there is a place for you on a YACU volunteer team.</p>
  	<br>
  	<a href="https://linktr.ee/volunteer_yacu"><a-button type="primary" size="large">Apply Now!</a-button></a>
  	<a-divider id="event">Attend an Event!</a-divider>
    <a-spin :spinning="spinEvents">
      <iframe width="750px" height="600px" src="https://www.mobilize.us/embed/yacu/feed/" frameborder="0" @load="spinEvents=false" />
    </a-spin>
  	<a-divider id="connection">Learn About Our Connections!</a-divider>
  	<p>The Young Americans Coalition for Unity is proud to be connected with a variety of politicians, organizations, and academics to offer our members opportunities in many different fields. Our connections with these three groups are facilitated by the outreach subdivision of the political team. If you would like to be connected with a politician, organization, or academic that is not listed on our database, please use <a href="https://airtable.com/embed/shrGO0v2W2B6SCRrK">this form</a> to request that our team contact them. These databases are updated regularly.</p>
  	<br>
    <a-collapse accordion style="background-color: #1d3257; text-align: left; max-width: 750px; margin: auto;">
    	<a-collapse-panel key="1" header="Partners in Youth Engagement">
    		<p style="font-size: 14px;">Our Partners in Youth Engagement (PYEs) are youth-focused organizations that can be partisan or nonpartisan. We often collaborate with PYEs to share programming between other young people and to help engage a wider span of young people in politics.</p><br>
        <a-spin :spinning="spin1">
    		  <iframe class="airtable-embed" src="https://airtable.com/embed/shrXzKwgOEJnFTVy8?backgroundColor=blue&amp;viewControls=on" onmousewheel="" style="background: transparent; border: 1px solid #ccc;" width="100%" height="500" frameborder="0" @load="spin1=false" />
        </a-spin>
    	</a-collapse-panel>
    	<a-collapse-panel key="2" header="Partners in Unity and Bipartisanship">
    		<p style="font-size: 14px;">Our Partners in Unity and Bipartisanship (PUBs) are organizations that are focused on bringing bipartisanship into politics today. We often work with PUBs to help educate members on important policy issues from both sides of the aisle as well as provide opportunities to expand civil political discussion.</p><br>
        <a-spin :spinning="spin2">
    		  <iframe class="airtable-embed" src="https://airtable.com/embed/shrqDjnyQ0rqP5Sqd?backgroundColor=blue&amp;viewControls=on" onmousewheel="" style="background: transparent; border: 1px solid #ccc;" width="100%" height="500" frameborder="0" @load="spin2=false" />
        </a-spin>
    	</a-collapse-panel>
    	<a-collapse-panel key="3" header="Politicians">
    		<p style="font-size: 14px;">As a nonpartisan 501(c)(3) organization, the YACU does not endorse, promote, nor support any of the politicians or candidates listed on our database. During a campaign season, we have listings of volunteer and/or internship opportunities for high school and college students. We also have these candidates present at campaign spotlights during our YACU-Cons. After the election, we have listings of internship opportunities at congressional offices and other offices of elected officials.</p><br>
        <a-spin :spinning="spin3">
    		  <iframe class="airtable-embed" src="https://airtable.com/embed/shrxEzRCLvFQDUFjg?backgroundColor=blue&amp;viewControls=on" onmousewheel="" style="background: transparent; border: 1px solid #ccc;" width="100%" height="500" frameborder="0" @load="spin3=false" />
        </a-spin>
    	</a-collapse-panel>
    	<a-collapse-panel key="4" header="Academia">
    		<p style="font-size: 14px;">The YACU is proud to connect with professors from renowned universities to offer our members research/internship opportunities. There are a variety of different research interests in political and public policy fields to be explored. You may connect with any of the professors listed, but preference is given to members of the political education subdivision of the political team.</p><br>
        <a-spin :spinning="spin4">
    		  <iframe class="airtable-embed" src="https://airtable.com/embed/shrbSHbCPSZbKxtbw?backgroundColor=blue&amp;viewControls=on" onmousewheel="" style="background: transparent; border: 1px solid #ccc;" width="100%" height="500" frameborder="0" @load="spin4=false" />
        </a-spin>
    	</a-collapse-panel>
    </a-collapse>
  </a-layout-content>
</template>

<script>
export default {
  data() {
    return {
      spin1: true,
      spin2: true,
      spin3: true,
      spin4: true,
      spinEvents: true,
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