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
            <a href="https://www.paypal.com/donate/?hosted_button_id=K6925Z4PXUB6A">Donate</a>
          </a-menu-item>
        </a-menu>
        <a-button type="primary" id="join">
          <nuxt-link to="/join">Join Us</nuxt-link>
        </a-button>
      </div>
    </div>
    <Nuxt />
  </a-layout>
</template>

<style>
body {
  font-size: 16px;
  background-color: rgb(29, 67, 110);
}

#menu-wrapper {
  background: rgba(0,0,0,0.62)
}

#menu {
  margin: auto;
}

#join {
  height: 48px;
  width: 120px;
  float: right;
  border-radius: 0;
}

.ant-menu-horizontal {
  display: inline-block;
  width: calc(100% - 120px);
  background: none;
  border-bottom-color: rgba(0,0,0,0);
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
}
</style>
