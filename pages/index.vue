<template>
  <a-layout-content>
    <img src="/catchphrase.png" height="400px" width="500px" :style="{ objectFit: 'cover' }"/>
    <h1 :style="{ maxWidth: '700px', margin: 'auto' }"><b>Empowering Youth to Make a Difference</b></h1>
    <br><br>
    <a-row class="strip" style="height: 200px">
      <a-col span="8" :style="{ backgroundColor: 'rgb(0, 150, 206)' }">
        <a-statistic title="Members" :value="members" valueStyle="fontWeight: bold;" />
      </a-col>
      <a-col span="8" :style="{ backgroundColor: 'rgb(105, 72, 152)' }">
        <a-statistic title="Chapters" :value="chapters" valueStyle="fontWeight: bold;" />
      </a-col>
      <a-col span="8" :style="{ backgroundColor: 'rgb(246, 73, 59)' }">
        <a-statistic title="States" :value="states" valueStyle="fontWeight: bold;" />
      </a-col>
    </a-row>
    <br><br>
    <h2>By Our Members</h2>
    <br>
    <unity-network limit="3" />
    <br>
    <nuxt-link to="/unet"><a-button type="primary" size="large">Read More</a-button></nuxt-link>
    <br><br>
    <div class="strip" style="background-color: rgb(29, 50, 87); padding: 24px; ">
      <a-carousel style="max-width: 980px; margin: auto;" arrows>
        <div slot="prevArrow" slot-scope="props" style="left: 10px; z-index: 1;">
          <a-icon type="left-circle" />
        </div>
        <div style="max-width: 700px;">
          <p style="font-size: 32px;"><i>"Young people have the opportunity to make a difference in the world; we need to come together and unite to a create a better future for America."</i></p>
          <p>— Andrew Juan, Co-Founder and Political Director</p>
          <br>
        </div>
        <div style="max-width: 700px;">
          <p style="font-size: 32px;"><i>"Modern politics is a food fight... Our platform allows people to find their own opinions, meet likeminded people, and discuss opposing views."</i></p>
          <p>— Michael Li, Organizing Director</p>
          <br>
        </div>
        <div slot="nextArrow" slot-scope="props" style="right: 10px;">
          <a-icon type="right-circle" />
        </div>
      </a-carousel>
    </div>
    <br>
    <h1>Upcoming Events</h1>
    <iframe width="900px" height="600px" src="https://calendar.google.com/calendar/embed?src=36adc5ki2pme8od50e362760qs%40group.calendar.google.com&ctz=America%2FNew_York"/>
    <br><br><br>
    <a-row class="strip" style="background-color: rgb(29, 50, 87);height: 400px">
      <a-col span="10">
        <div>
          <h2>Get Involved</h2>
          <h3>Uniting Our Future.<br><u>Now.</u></h3><br>
          <nuxt-link to="/join"><a-button type="primary" size="large">Join Us!</a-button></nuxt-link>
        </div>
      </a-col>
      <a-col span="14" style="overflow: hidden;">
        <img style="display: block; object-position: 0 -96px;" src="/capitol.jpg">
      </a-col>
    </a-row>
  </a-layout-content>
</template>

<script>
export default {
  data() {
    return {
      members: 0,
      chapters: 0,
      states: 0,
      list: [
        {
          title: "Lorem Ipsum",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit.",
          href: "about"
        },
        {
          title: "Lorem Ipsum",
          src: "/catchphrase.png",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit."
        },
        {
          title: "Lorem Ipsum"
        },
      ]
    }
  },
  async fetch () {
    const doc = await this.$fire.firestore.collection('statistics').doc('default').get();
    const data = doc.data();
    this.members = data.members;
    this.chapters = data.chapters;
    this.states = data.states;
  }
}
</script>