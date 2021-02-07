<template>
	<a-layout-content>
		<h1>YACU Governance</h1>
		<p>To learn more about the YACU and its structure, please view our <a href="https://bylaws.yacu.org">bylaws</a> and our internal <a href="https://docs.google.com/document/d/e/2PACX-1vQHKoxfKOBv5nYuJWQGkH5y0nMWMdL-_1gN9QOOfTwS3yd3BWi4ZoZwJ5It3ZQqjR8U2SxfWXU8yKGs/pub">Code of Conduct</a>. This page provides a public record of past national leadership board meetings.</p>
		<h2>Session 4 Meetings</h2>
		<a-spin :spinning="$fetchState.pending">
			<a-row type="flex" :gutter="[16, 16]">
				<a-col v-for="item in four" :key="item.num" :xs="24" :sm="12" :md="8" style="text-align: left;">
					<h3>Session 4, Meeting {{ item.num }}</h3>
					{{ item.date }} <br>
					<a :href="item.agenda">Meeting Agenda</a> <br>
					Meeting Recordings:
					<ul>
						<a v-for="(link, index) in item.recordings" :key="link" :href="link"><li>Part {{ index + 1 }}</li></a>
					</ul>
					<br>
				</a-col>
			</a-row>
		</a-spin>
		<h2>Session 3 Meetings</h2>
		<a-spin :spinning="$fetchState.pending">
			<a-row type="flex" :gutter="[16, 16]">
				<a-col v-for="item in three" :key="item.num" :xs="24" :sm="12" :md="8" style="text-align: left;">
					<h3>Session 3, Meeting {{ item.num }}</h3>
					{{ item.date }} <br>
					<a :href="item.agenda">Meeting Agenda</a> <br>
					Meeting Recordings:
					<ul>
						<a v-for="(link, index) in item.recordings" :key="link" :href="link"><li>Part {{ index + 1 }}</li></a>
					</ul>
					<br>
				</a-col>
			</a-row>
		</a-spin>
	</a-layout-content>
</template>

<script>
export default {
	head: {
		title: 'Governance | Young Americans Coalition for Unity'
	},
	data() {
		return {
			four: [],
			three: [],
		}
	},
	async fetch() {
		this.three = [];
		const snapshot3 = await this.$fire.firestore.collection('session3').orderBy('num', 'desc').get();
		snapshot3.forEach(doc => {
			const data = doc.data();
			this.three.push({
				num: data.num,
				agenda: data.agenda,
				recordings: data.recordings,
				date: data.date.toDate().toLocaleString('default', { month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric', minute: '2-digit', hour12: true, timeZoneName: 'short', timeZone: "America/New_York" }),
			});
		});

		this.four = [];
		const snapshot4 = await this.$fire.firestore.collection('session4').orderBy('num', 'desc').get();
		snapshot4.forEach(doc => {
			const data = doc.data();
			this.four.push({
				num: data.num,
				agenda: data.agenda,
				recordings: data.recordings,
				date: data.date.toDate().toLocaleString('default', { month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric', minute: '2-digit', hour12: true, timeZoneName: 'short', timeZone: "America/New_York" }),
			});
		});
	}
}
</script>