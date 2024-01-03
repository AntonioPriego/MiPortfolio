<template>
  <div class="header">
    <div class="nav-bar">
      <router-link to="/">About me</router-link>
      <router-link to="/game-projects">GameDev</router-link>          
      <router-link to="/other-projects">Other projects</router-link>
      <router-link to="/resume">Resume</router-link>
      <router-link to="/contact">Contact</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Header",
  //   props: {
  //     msg: String,
  //   },
});
</script>

<style scoped lang="less">

@import '../css/variables.less';

.header {
  grid-area: header_section;
  position: fixed;
  top: 0;
  left: 0;
  width: 97%;
  background: linear-gradient(-160deg,rgba(188, 20, 255, 0.647),rgba(34, 40, 49, 0.625) 60%), 
              linear-gradient(-172deg,rgba(251, 0, 79, 0.88),  rgba(34, 40, 49, 0.625) 35%); 

  box-shadow: inset 0px 0px 10.5px 0.25px #222831;  
  transform: skew(-15deg);
  position: sticky;
  border-radius: 0 0 12px 12px;
}

.nav-bar {
  text-align: right;
  padding: 10px;
  line-height: 3em;
  transform: skew(7deg);
}

a {
  text-transform: uppercase;
  margin-left: 15px;
  margin-right: 15px;
  padding-bottom: 8px;
  white-space: nowrap;
  display: inline-block;
}

.router-link-exact-active {
  border: 0px solid @textColor;
  border-bottom-style: outset;
  border-bottom-width: 1px;  
  text-shadow:
    -0.65px -0.65px 12px #30363e,
    0.65px -0.65px 12px #30363e,
    -0.65px 0.65px 12px #30363e,
    0.65px 0.65px 12px #30363e; 
}
.router-link {
  border: 0px solid @textColor;
  border-bottom-style: outset;
  border-bottom-width: 1px;
}

@media only screen and (max-width: 620px){
  .nav-bar {
    line-height: 5em;
    font-size: 60%;
  }

  a {
    margin-left: 9px;
    margin-right: 9px;
    padding-bottom: 0px;
  }
}

@media only screen and (max-width: 620px) {

  .nav-bar {
  }
}

</style>
