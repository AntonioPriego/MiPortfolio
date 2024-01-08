<template>
    <div v-if="visible">
      <div class="overlay" @click="handleClickOutside"></div>
      <div class="dialog" :style="{ 'background-color': color }" ref="dialog">
        <div @click="$emit('close')" class="dialog-close"><i class="fa fa-lg fa-fw fa-angle-down"></i></div>
        <h1 class="dialog-title">{{ title }}</h1>
        <div class="dialog-content">
          <div v-html="htmlContent"></div>
        </div>
      </div>
    </div>
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
  data() {
    return {
      localVisible: this.visible,
    };
  },
  methods: {
    openDialog() {
      this.localVisible = true;
    },
    closeDialog() {
      this.localVisible = false;
    },
    handleClickOutside(event: MouseEvent) {
      const dialog = this.$refs.dialog as HTMLElement;

      if (dialog && !dialog.contains(event.target as Node)) {
        this.closeDialog();
        this.$emit('close');
      }
    },
    getImage: function(url: string) {
      console.log("fetching image " + url);
    }
  }
});
</script>

<style scoped>
.overlay {  
  background: linear-gradient(-2deg, #b314b027 25%, rgb(34, 40, 49) 85%);
  z-index: 11;
  position:fixed;
  top:0px;
  left:0px;
  right:0px;
  bottom: 0px;
}

.dialog {
  position:absolute;
  top: 80px;
  left: 0px;
  right: 0px;
  z-index: 11;
  margin: 20px;
  padding-bottom: 10px;
  border-radius: 0.4%;
  box-shadow: #313122 10px 10px 50px;
  border-collapse: collapse;
}

iframe {  
  width: 100%;
}

h1.dialog-title {
    text-align: center;
    margin: 0px;
    padding: 22px;
}

.dialog-content {
  background-color: #2f2239;
  color: #d9dbe2;
}

.dialog-close {
  position: absolute;
  top: 15px;
  right: 15px;
  cursor:pointer;
  font-size: 1.2em;
  scale: 120%;
}

.dialog-close:hover {
  color: rgb(255, 253, 246);
  scale: 140%;
}


@media only screen and (min-width: 620px){
  .dialog {
    margin: 0 auto;
    margin-bottom: 40px;
    max-width: 1400px;
  }

  h1.dialog-title {
    font-size: 1.6em;    
    box-shadow: inset 0 0 5px #222831;
    border-collapse: collapse;
  }

  .dialog-content {
    padding: 40px;
  }
}


</style>
