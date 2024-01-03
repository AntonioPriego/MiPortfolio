<template>
  <div id="app">
    
    <link rel="stylesheet" href="@/assets/projects/projects.css" type="text/css">

    <Header />
    <div class="main">
      <transition name="fade" mode="out-in">
        <router-view/>
      </transition>
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Helpers from './helpers';

export default Vue.extend({
  name: 'App',
  components: {
    Header, Footer
  }
});

// Preload heavy images or gifs that are used in other pages
Helpers.preloadImages([
  "img/projects/project-1-icon.png",
  "img/projects/project-2-icon.png",
  "img/projects/project-3-icon.png"
]);

</script>

<style lang="less">

@import './css/projects.less';
@import './css/variables.less';

html {
  margin: 0px;
  background-color: @bodyBgColor;
}

body {
  margin: 0px;
  background-color: @bodyBgColor;
  background: linear-gradient(0deg,rgb(57, 62, 70),rgb(34, 40, 49) 85%); 
}

#app {
  //background-color: @contentBgColor; 
  color: @textColor;

  font-family: 'Karla', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  font-size: 1.1em;
  line-height: 1.6em;
  text-align: justify;
}

h1, h2, h3, h4, h5 {
  text-align: left;
}

.header {
  z-index: 50;

  a {
    color: @skillRateCircleColor;
    text-decoration: none;
  }
  a:hover, .router-link-exact-active {    
    color: @skillRateCircleColor;
    transform: translateY(-1px);
  }
}

a, .router-link {
  color: @alttextColor;
  text-decoration: none;
}

a:hover, .router-link-exact-active {
  color: @alttexthoverColor;
}

h1 {
  font-size: 2.5em;
  font-weight: 100;
  margin-top: -10px;
  margin-bottom: 40px;
  margin-left: -2px; // hack to make it "seem" more aligned with smaller text content
  line-height: 1.1em;
}

.main {
    padding: 12px;
  }

@media only screen and (min-width: 620px){

  #app {
    text-align: left;
    line-height: 1.8em;
  }

  h1 {
    margin-top: 0.67em;
    margin-bottom: 80px;
    line-height: 0.7em;
  }

  .main {
    padding: 0px 40px 40px 180px;
  }

  .main, .header, .footer {
    max-width: 1400px;
    margin: 0 auto;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.2s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}

</style>
