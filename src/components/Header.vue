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
  background: linear-gradient(-160deg,#bc14ff5e,rgba(34, 40, 49, 0.25) 60%),
              linear-gradient(-152deg,#ff00bb8f,rgba(34, 40, 49, 0.1) 13%),
              linear-gradient(-172deg,#ff317984,  rgba(34, 40, 49, 0.1) 52%); 
  transform: skew(-20deg);
  position: sticky;
  border-radius: 0 0 10px 12px;
}

.nav-bar {
  text-align: right;
  padding: 3px 10px 10px 10px;
  line-height: 2.6em;
  transform: skew(7.5deg);
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
    line-height: 4.6em;
    font-size: 60%;
  }

  a {
    margin-left: 9px;
    margin-right: 9px;
    padding-bottom: 0px;
  }
}

</style>
