<template>
  <transition name="fade">
    <div v-if="visible">
      <div class="overlay">
      </div>
      <div class="dialog" :style="{ 'background-color': color }">
        <div @click="$emit('close')" class="dialog-close"><i class="fa fa-lg fa-fw fa-angle-down"></i></div>
        <h1 class="dialog-title">{{ title }}</h1>
        <div class="dialog-content">
          <div v-html="htmlContent"></div>
          <div class="dialog-bottom">
          <a @click="$emit('close')" class="dialog-close-button">Close</a>
        </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "ProjectDetailsOverlay",
  props: {
    visible: Boolean,
    color: String,
    title: String,
    htmlContent: String,
  },
  methods: {
    getImage: function(url: string) {
      console.log("fetching image " + url);
    }
  }
});
</script>

<style scoped>
.overlay {
  background-color: rgba(0,0,0,0.5);
  z-index: 11;
  position:fixed;
  top:0px;
  left:0px;
  right:0px;
  bottom: 0px;
}

.dialog {
  position:absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  z-index: 11;
  margin: 20px;
  padding-bottom: 10px;
  color:white;
  border-radius: 0.7%;
  box-shadow: #222831 0 0 20px;
  border-collapse: collapse;
}

iframe {
  width: 100%;
}

h1.dialog-title {
    text-align: center;
    font-size: 1.3em;
    margin: 0px;
    padding: 22px;
}

.dialog-content {
  padding: 20px;
}

.dialog-content {
  background-color: #222831;
  color: #c5c9d5;
}
.dialog-close {
  position: absolute;
  top: 17px;
  right: 15px;
  cursor:pointer;
  font-size: 1.2em;
  font-weight: 100;
  box-shadow: 4px 4px 8px #393e4632;
  border-radius: 50%;
}
.dialog-close:hover {
  opacity: 60%;
  box-shadow: inset 2px 2px 5px #393e4632;
  border-radius: 50%;
}

.dialog-bottom {
  text-align: center;
}

a.dialog-close-button {
  cursor:pointer;
  font-size: 1.25em;
  display: inline-block;
  margin: 0 auto;
  color: #99abc7;
}

@media only screen and (min-width: 620px){
  .dialog {
    margin: 0 auto;
    margin-top: 80px;
    margin-bottom: 40px;
    max-width: 1400px;
  }

  h1.dialog-title {
    font-size: 1.6em;    
    box-shadow: inset 0 0 20px #222831;
    border-collapse: collapse;
  }

  .dialog-content {
    padding: 40px;
  }
}


</style>
