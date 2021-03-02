<template>
	<a-layout-content>
		<h1>About the YACU</h1>
		<p>The Young Americans Coalition for Unity (YACU) is a 501(c)(3) nonprofit organization dedicated to engaging youth in politics and promoting unity and bipartisanship. As the US's only youth-led nonpartisan & bipartisan organization focused on this unique combined mission of youth and unity, the YACU seeks to give everyone -- no matter their party, ideology, or background -- a chance to share their political beliefs, get involved, and find common ground. We're hosting special events, creating a nationwide network of local chapters, and fostering bipartisan discussions daily.</p>
		<p>At the YACU, you can volunteer, lead, make new friends, and pursue opportunities only our coalition can provide. Whatever you believe, wherever you are, and why ever you're here: the YACU welcomes you.</p>
		<br><br>
		<a-row class="strip" style="background-color: rgb(29, 50, 87); height: 450px;">
			<a-col :md="12" :sm="24">
				<div style="padding: 32px 64px;">
					<h2>Our Mission</h2>
					<p>The Young Americans Coalition for Unity is a nonprofit organization dedicated to engaging youth in politics and promoting unity and bipartisanship. We work to empower both high school and college students to engage in bipartisan discussion and become politically involved in their local community and national politics.</p>
				</div>
			</a-col>
			<a-col v-if="$mq != 'sm'" span="12" style="overflow: hidden;">
				<img style="display: block;" src="/capitol.jpg">
			</a-col>
		</a-row>
		<br><br>
		<h2>Our Board</h2>
		<p>The Leadership Board of the YACU is comprised of leaders of major teams at the YACU. Board members are comprised of directors, officers, and representatives elected to their position by other board members or all the members of the YACU. The Board works to lead the organization as a whole, making decisions that drive the future of the YACU.</p>
		<br>
		<a-list :loading="$fetchState.pending" :data-source="board" style="text-align: left;">
			<a-list-item slot="renderItem" slot-scope="item, index">
				<a-list-item-meta :title="item.name+' ('+item.position+')'" :description="item.description">
					<a-avatar :size="128" slot="avatar" :src="item.download" />
				</a-list-item-meta>
			</a-list-item>
		</a-list>
		<br>
		<p style="max-width: 700px; margin: auto;">The YACU would also like to thank the following people for their work in the early days of the organization and the time they devoted for a better, bipartisan future:</p>
		<br>
		<ul style="list-style: none; padding-left: 0;">
			<li><strong>Iris Lin</strong>, <em>co-founder and former Organizing Director</em></li>
			<li><strong>Aidan Chinn</strong>, <em>co-founder and former Digital Director</em></li>
			<li><strong>Jazmin Albertie</strong>, <em>co-founder and former Organizing Director</em></li>
			<li><strong>Aiden Rood</strong>, <em>co-founder and former Communications Director</em></li>
			<li><strong>Charlie Liu</strong>, <em>former Technology Director</em></li>
			<li><strong>Andrew LaBerge</strong>, <em>former Communications Director</em></li>
			<li><strong>Alexis Maese</strong>, <em>former Digital Director</em></li>
		</ul>
	</a-layout-content>
</template>

<script>
	export default {
		head: {
			title: 'About | Young Americans Coalition for Unity'
		},
		data() {
			return {
				board: [],
			}
		},
		async fetch() {
			this.board = []
			const snapshot = await this.$fire.firestore.collection('board').orderBy('joined').get()
			snapshot.forEach(doc => {
				const data = doc.data()
				this.board.push({
					name: data.name,
					position: data.position,
					description: data.description,
					download: data.download,
				});
			})
		},
		fetchOnServer: true,
	}
</script>
