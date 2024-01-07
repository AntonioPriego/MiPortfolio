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
  "img/projects/ActionRoguelike.png",
  "img/projects/UE_LevelSet.gif",
  "https://raw.githubusercontent.com/AntonioPriego/UGR_InformaticaGrafica/main/Capturas/2_2.png",
  "img/projects/FallGuysWannaBe.gif",
  "img/projects/DungeonPuzzle.gif",
  "https://raw.githubusercontent.com/AntonioPriego/SmartPen/main/Memory/capturas/SmartPenMP.png",
  "img/projects/civitas.png",
  "img/projects/sobel.jpg",
  "img/projects/TiradApp/Preview.png"
]);

</script>

<style lang="less">

@import './css/variables.less';

html {	
  margin: 0px;
  background: linear-gradient(-2deg, #b314b1 25%, rgb(34, 40, 49) 85%);
	background-size: 400% 400%;
	animation: gradient 4.5s ease infinite;
}

body {
  margin: 0px;
}

@keyframes gradient {
	0% {
		background-position: 0% 13%;
	}
	50% {
		background-position: 90% 17%;
	}
	100% {
		background-position: 0% 13%;
	}
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

.blurredAvatar {
  opacity: 0.8;
  filter: alpha(opacity=40);
  filter: blur(8.5px);
}
    
.blurredAvatar:hover {
  opacity: 1.0;
  filter: alpha(opacity=100);
  filter: blur(0px);
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
    padding: 0px 40px 40px 40px;
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

.dialog-content {

// Add custom styles for your projects descriptions here

.paragraph {
    margin: 20px 0px;
}

.center {
    text-align: center;
}

iframe.youtube {
    width: 100%;
    min-height: 300px;
}

.phone-screenshot {
    width: 100%;
}

.pc-screenshot {
    width: 100%;
}

.notice {
    border:1px solid rgb(0, 85, 0);
    background-color: rgb(144, 196, 144);
    color: rgb(1, 99, 1);
    padding: 10px;
}

a {
    color:#696969;
    opacity: 1;
    text-decoration: underline;
}

a:hover {
    opacity: 0.6;
}

@media only screen and (min-width: 620px){
    iframe.youtube {
        max-width: 728px;
        height: 409px;
    }

    .phone-screenshot {
        margin: 15px;
        width : 300px;
    }

    .pc-screenshot {
        margin: 15px;
        width : 400px;
    }
}
}

</style>
