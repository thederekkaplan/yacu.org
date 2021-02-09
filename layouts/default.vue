<template>
  <a-layout>
    <div id="menu-wrapper">
      <div id="menu">
        <a-menu :selected-keys="[$nuxt.$route.name]" mode="horizontal">
          <a-menu-item key="index">
            <nuxt-link to="/">Home</nuxt-link>
          </a-menu-item>
          <a-menu-item key="about">
            <nuxt-link to="/about">About</nuxt-link>
          </a-menu-item>
          <a-menu-item key="unet">
            <nuxt-link to="/unet">Unity Network</nuxt-link>
          </a-menu-item>
          <a-menu-item key="Shop">
            <a href="https://shop.yacu.org">Shop</a>
          </a-menu-item>
          <a-menu-item key="Donate">
            <a href="https://donate.yacu.org">Donate</a>
          </a-menu-item>
        </a-menu>
        <a-button type="primary" id="join">
          <nuxt-link to="/join">Join Us</nuxt-link>
        </a-button>
      </div>
    </div>
    <Nuxt keep-alive />
    <a-divider />
    <a-layout-footer style="background:rgb(29, 67, 110); padding-bottom: 0;">
      <a-row>
        <a-col :md="12" :sm="24">
          <br>
          <h3>Young Americans Coalition for Unity, Inc.</h3><br>
          <p>We are a non-profit organization dedicated to engaging youth in politics and promoting bipartisanship and unity.</p>
          <p><b>Contact:</b> <a href="mailto:info@yacu.org">info@yacu.org</a>
            <br><b>Twitter:</b> <a href="https://twitter.com/YACUHQ">@YACUHQ</a>
            <br>
            <br>Young Americans Coalition for Unity, Inc.
            <br>1060 Broadway #1065
            <br>Albany NY 12204</p>
        </a-col>
        <a-col :md="12" :sm="24">
          <iframe style="border: 0; width: 100%; max-width: 350px; height: 650px;" src="https://www-yacu-org.filesusr.com/html/58c7c9_ec3abb40b59fc9793c6d48a1995ec963.html"></iframe>
        </a-col>
      </a-row>
      <div class="strip" style="background-color:rgb(29, 50, 87); text-align: center; font-size: 14px; padding: 1em;">© 2020 Young Americans Coalition for Unity, Inc. | <nuxt-link to="/legal">Legal Information</nuxt-link> | <nuxt-link to="/governance">Governance</nuxt-link></div>
    </a-layout-footer>
  </a-layout>
</template>

<style>
#menu-wrapper {
  background: rgba(0,0,0,0.62)
}

#menu {
  margin: auto;
}

#join {
  height: 72px;
  width: 120px;
  float: right;
  border-radius: 0;
  font-size: 1.2rem;
}

.ant-menu-horizontal {
  display: inline-block;
  width: calc(100% - 120px);
  background: none;
  border-bottom-color: rgba(0,0,0,0);
  font-size: 18px;
  line-height: 70px;
}

.strip {
  width: 100vw; 
  margin-left: calc(50% - 50vw);
}

.strip > .ant-col {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.ant-carousel .slick-slide {
  overflow: hidden;
}
.ant-carousel .slick-arrow {
  width: 25px;
  height: 25px;
  font-size: 25px;
  color: #fff;
  background-color: rgba(31, 45, 61, 0.11);
  opacity: 0.5;
}
.ant-carousel .slick-arrow:before {
  display: none;
}
.ant-carousel .slick-arrow:hover {
  color: #fff;
  opacity: 0.8;
}
.ant-carousel .slick-dots li button {
  background: #fff;
}
.ant-carousel .slick-dots li.slick-active button {
  background: #fff;
}

@media only screen and (max-width: 980px) {
  #menu {
    width: 100%;
  }
}

@media only screen and (min-width: 980px) {
  #menu {
    width: 980px;
  }
}

.ant-layout {
  background: none;
}

main {
  max-width: 980px;
  margin: auto;
  padding: 32px;
  width: 100%;
  text-align: center;
}

h1 {
  font-size: 60px;
}

h2 {
  font-size: 48px;
}

h3 {
  font-size: 24px;
}
</style>
