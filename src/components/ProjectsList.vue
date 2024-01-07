<template>
    <div>
      <div class="projects-list">
        <template v-for="project in projects">
          <div
            :key="project.id"
              @click="showDetails(project)"
              class="project-item"
              :class="{ 'wide': project.isWide, 'high': project.isHigh }">
            <div class="project-item-image" :style="{ '--zoomHeight': project.zoomHeight, '--zoomWidth': project.zoomWidth, '--xShift': project.xShift, '--yShift': project.yShift, 'background-image': 'url(' + project.iconUrl + ')', '--accent-color-idle': project.accentColorHover }"></div>
            

            <div v-if="project.isUnreal || project.isUnrealBp || project.isCpp || project.isBlender || project.isGodot || project.isOpenGL || project.isArduino || project.isQT || project.isBluetooth || project.isTensorFlow || project.isPython || project.isJava || project.isRuby || project.isCuda || project.isMPI || project.isFlutter"
            class="tags"
            :class="{ 'extensive': project.isWide, 'tall': project.isHigh }"
            :style="{ '--accent-color-alpha': project.accentColorAlpha, '--accent-color-idle': project.accentColor }">
              <span v-if="project.isUnreal"     class="techTag" :style="{ '--background-color-idle': project.accentColor, '--tag-url': 'url(https://antoniopriego.github.io/portfolio/img/unreal-tag.png)'        }"></span>
              <span v-if="project.isUnrealBp"   class="techTag" :style="{ '--background-color-idle': project.accentColor, '--tag-url': 'url(https://antoniopriego.github.io/portfolio/img/unreal-and-bp-tag.gif)' }"></span>
              <span v-if="project.isOpenGL"     class="techTag" :style="{ '--background-color-idle': project.accentColor, '--tag-url': 'url(https://antoniopriego.github.io/portfolio/img/opengl-tag.png)'         }"></span>
              <span v-if="project.isCpp"        class="techTag" :style="{ '--background-color-idle': project.accentColor, '--tag-url': 'url(https://antoniopriego.github.io/portfolio/img/cpp-tag.png)'            }"></span>
              <span v-if="project.isBlender"    class="techTag" :style="{ '--background-color-idle': project.accentColor, '--tag-url': 'url(https://antoniopriego.github.io/portfolio/img/blender-tag.png)'        }"></span>
              <span v-if="project.isGodot"      class="techTag" :style="{ '--background-color-idle': project.accentColor, '--tag-url': 'url(https://antoniopriego.github.io/portfolio/img/godot-tag.png)'          }"></span>
              <span v-if="project.isArduino"    class="techTag" :style="{ '--background-color-idle': project.accentColor, '--tag-url': 'url(https://antoniopriego.github.io/portfolio/img/arduino-tag.png)'        }"></span>
              <span v-if="project.isQT"         class="techTag" :style="{ '--background-color-idle': project.accentColor, '--tag-url': 'url(https://antoniopriego.github.io/portfolio/img/qt-tag.png)'             }"></span>
              <span v-if="project.isBluetooth"  class="techTag" :style="{ '--background-color-idle': project.accentColor, '--tag-url': 'url(https://antoniopriego.github.io/portfolio/img/bluetooth-tag.png)'      }"></span>
              <span v-if="project.isTensorFlow" class="techTag" :style="{ '--background-color-idle': project.accentColor, '--tag-url': 'url(https://antoniopriego.github.io/portfolio/img/tensorflow-tag.png)'     }"></span>
              <span v-if="project.isPython"     class="techTag" :style="{ '--background-color-idle': project.accentColor, '--tag-url': 'url(https://antoniopriego.github.io/portfolio/img/python-tag.png)'         }"></span>
              <span v-if="project.isJava"       class="techTag" :style="{ '--background-color-idle': project.accentColor, '--tag-url': 'url(https://antoniopriego.github.io/portfolio/img/java-tag.png)'           }"></span>
              <span v-if="project.isRuby"       class="techTag" :style="{ '--background-color-idle': project.accentColor, '--tag-url': 'url(https://antoniopriego.github.io/portfolio/img/ruby-tag.png)'           }"></span>
              <span v-if="project.isFlutter"    class="techTag" :style="{ '--background-color-idle': project.accentColor, '--tag-url': 'url(https://antoniopriego.github.io/portfolio/img/flutter-tag.png)'        }"></span>
            </div>
            
            <div class="title-bar2" :style="{ '--background-color': `${project.accentColor}`, '--box-shadow': `-25px 0 0 0 ${project.accentColorHover}` }"></div>
            <div class="title-bar" :style="{  'background-color': project.accentColor, '--accent-color-hover': project.accentColorHover } " >
              <span class="title-text">
                {{ project.name }}
              </span>
              <span class="techs" :class="{ 'smallIcons': project.smallIcons }" >
                <span v-if="project.isUnreal || project.isUnrealBp"  class="techIcon" :style="{ '--background-color-idle': project.accentColor, '--background-color-focus': project.accentColorHover, '--icon-url': 'url(https://antoniopriego.github.io/portfolio/img/ue-icon-dark.png)' }"></span>
                <span v-if="project.isOpenGL"     class="techIcon" :style="{ '--background-color-idle': project.accentColor, '--background-color-focus': project.accentColorHover, '--icon-url': 'url(https://antoniopriego.github.io/portfolio/img/opengl-icon-dark.png)'                }"></span>
                <span v-if="project.isCpp"        class="techIcon" :style="{ '--background-color-idle': project.accentColor, '--background-color-focus': project.accentColorHover, '--icon-url': 'url(https://antoniopriego.github.io/portfolio/img/cpp-icon-dark.png)'                   }"></span>
                <span v-if="project.isBlender"    class="techIcon" :style="{ '--background-color-idle': project.accentColor, '--background-color-focus': project.accentColorHover, '--icon-url': 'url(https://antoniopriego.github.io/portfolio/img/blender-icon-dark.png)'               }"></span>
                <span v-if="project.isGodot"      class="techIcon" :style="{ '--background-color-idle': project.accentColor, '--background-color-focus': project.accentColorHover, '--icon-url': 'url(https://antoniopriego.github.io/portfolio/img/godot-icon-dark.png)'                 }"></span>
                <span v-if="project.isArduino"    class="techIcon" :style="{ '--background-color-idle': project.accentColor, '--background-color-focus': project.accentColorHover, '--icon-url': 'url(https://antoniopriego.github.io/portfolio/img/arduino-icon-dark.png)'               }"></span>
                <span v-if="project.isQT"         class="techIcon" :style="{ '--background-color-idle': project.accentColor, '--background-color-focus': project.accentColorHover, '--icon-url': 'url(https://antoniopriego.github.io/portfolio/img/qt-icon-dark.png)'                    }"></span>
                <span v-if="project.isBluetooth"  class="techIcon" :style="{ '--background-color-idle': project.accentColor, '--background-color-focus': project.accentColorHover, '--icon-url': 'url(https://antoniopriego.github.io/portfolio/img/bluetooth-icon-dark.png)'             }"></span>
                <span v-if="project.isTensorFlow" class="techIcon" :style="{ '--background-color-idle': project.accentColor, '--background-color-focus': project.accentColorHover, '--icon-url': 'url(https://antoniopriego.github.io/portfolio/img/tensorflow-icon-dark.png)'            }"></span>
                <span v-if="project.isPython"     class="techIcon" :style="{ '--background-color-idle': project.accentColor, '--background-color-focus': project.accentColorHover, '--icon-url': 'url(https://antoniopriego.github.io/portfolio/img/python-icon-dark.png)'                }"></span>
                <span v-if="project.isJava"       class="techIcon" :style="{ '--background-color-idle': project.accentColor, '--background-color-focus': project.accentColorHover, '--icon-url': 'url(https://antoniopriego.github.io/portfolio/img/java-icon-dark.png)'                  }"></span>
                <span v-if="project.isRuby"       class="techIcon" :style="{ '--background-color-idle': project.accentColor, '--background-color-focus': project.accentColorHover, '--icon-url': 'url(https://antoniopriego.github.io/portfolio/img/ruby-icon-dark.png)'                  }"></span>
                <span v-if="project.isCuda"       class="techIcon" :style="{ '--background-color-idle': project.accentColor, '--background-color-focus': project.accentColorHover, '--icon-url': 'url(https://antoniopriego.github.io/portfolio/img/cuda-icon-dark.png)'                  }"></span>
                <span v-if="project.isMPI"        class="techIcon" :style="{ '--background-color-idle': project.accentColor, '--background-color-focus': project.accentColorHover, '--icon-url': 'url(https://antoniopriego.github.io/portfolio/img/mpi-icon-dark.png)'                   }"></span>
                <span v-if="project.isFlutter"    class="techIcon" :style="{ '--background-color-idle': project.accentColor, '--background-color-focus': project.accentColorHover, '--icon-url': 'url(https://antoniopriego.github.io/portfolio/img/flutter-icon-dark.png)'               }"></span>
              </span>
            </div>
          </div>
        </template>
      </div>

      <ProjectDetailsOverlay
        v-on:close="showPopup = false"
        :visible="showPopup"
        :title="popupTitle"
        :htmlContent="popupContent"
        :color="popupColor"
      />
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProjectDetailsOverlay from "@/components/ProjectDetailsOverlay.vue";
import ProjectData from "@/data/ProjectData.ts";

export default Vue.extend({
  name: "ProjectsList",
  components: {
    ProjectDetailsOverlay,
  },
  props: {
    projects: Array
  },
  data: function () {
    return {
      showPopup: false,
      popupTitle: "",
      popupColor: "",
      popupContent: ""
    };
  },
  methods: {
    showDetails: function (item: ProjectData) {
      this.popupTitle = item.name;
      this.popupColor = item.accentColor;
      this.popupContent = item.htmlDescription;
      this.showPopup = true;
      window.scrollTo(0,0);
    },
  },
});
</script>

<style scoped>

.project-item {
  position: relative;
  height: 300px;
  margin-bottom: 20px;
  width: 100%;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  border-radius: 4px 4px 25px 25px;
  box-shadow: 1px 1px 1px 1px #222222;
  transition: box-shadow 0.15s;
}
.project-item::before {
  z-index: 10;
  width: 250px;
  height: 100px;
  content: "";
  background: url(https://antoniopriego.github.io/portfolio/img/clickme.png) no-repeat;
  background-size:contain;
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

.project-item:hover::before,
.project-item-image:hover + .project-item::before {
  opacity: 0.8;
  transition: opacity 0.8s ease-in-out;
}

.project-item-image {
  background-size: cover;
  background-position: center;
  transform: translateX(var(--xShift)) translateY(var(--yShift));
  height: var(--zoomHeight);
  width:  var(--zoomWidth);
  transition: all 0.2s;
}


.project-item-image:hover {
  -webkit-transform: scale(1.1);
  -ms-transform: scale(1.1);
  filter: brightness(100%);
  transform: scale(1.05) translateX(var(--xShift)) translateY(var(--yShift));
}

.project-item:hover .project-item-image {
  filter: blur(1px) brightness(60%);
}

.project-item:hover {
  opacity: 100%;
  box-shadow: 4px 4px 4px 4px #222222;
} 

.title-bar {
  display:inline-flex;
  position: absolute;
  bottom: -10px;
  width: 100%;
  height: 60px;
  transition: background-color 0.3s;
}

.project-item:hover .title-bar {
  background-color: var(--accent-color-hover) !important;
  box-shadow: 40px -15px 35px rgba(0, 0, 0, 0.8);
}
.project-item:hover .title-bar2:before {
  box-shadow: var(--box-shadow);
}

.title-bar:before {
  content: "";
  position:absolute;
  top:-480px;
  width:100%;
  border-bottom-left-radius: 5%;  
  border-bottom-right-radius: 5%;
  background-color: transparent;
}

.title-bar2:before {
  content: "";
  position: absolute;  
  bottom: 50px;
  height: 25px;
  width: 50px;
  border-bottom-left-radius: 25px;
  box-shadow: -25px 0 0 0 var(--background-color);
  transition: box-shadow 0.3s;
}

.title-text {
  color: #eeeeee;
  text-shadow:
    var(--accent-color-hover) -1px 0,
    var(--accent-color-hover) 0 -1px,
    rgba(0, 0, 0, 0.365) 1.5px 0,
    rgba(0, 0, 0, 0.365) 0 1.5px,
    var(--accent-color-hover) -1px -1px,
    rgba(0, 0, 0, 0.365) 1.5px 1.5px;
  z-index: 10;
  font-size: 90%;
  transition: text-shadow 0.3s;
  transition: font-size 0.65s;  
  position: absolute;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
  
  white-space: nowrap;
}

.techs {
  margin-left: auto;
  display: flex;
  flex-direction: row;
}

.techIcon {
  position:relative;
  width:60px;
  height:60px;
  border-radius:50%;
  background-image: var(--icon-url), linear-gradient(var(--background-color-idle) 0 51.5%, rgba(255, 255, 255, 0) 51.5% 100%);
  background-size: cover;
  /* right:10px; */ 
  top:-31px; 
  transition: right 0.2s, top 0.2s, width 0.3s, height 0.3s;
}

.smallIcons .techIcon {
  width:42px;
  height:42px;
  top:-21.8px;
}

.project-item:hover .techIcon {
  right:10px;
  top:0px;  
  width:48px;
  height:45px;
  background-image: var(--icon-url);
  filter: invert(0.9);
  opacity: 0.65;
}

.project-item:hover .smallIcons .techIcon {
  width:36px;
  height:36px;
  top:6px;  
}

.tags {
  position:absolute;
  top: 130px;
  left: 195px;
  height: fit-content;
  width: 100px;
  margin: 15px;
  padding: 5px 0px 10px 10px;
  border-radius: 4px 4px 4px 4px;
  visibility: collapse;
  transition: background-color 0.45s, box-shadow 0.45s, visibility 0.8s;
}

.techTag {
  position: relative;
  display: grid;
  margin: 5px 0px 0px 5px;
  height: 25.4px;
  width: 80px;
  background-image: var(--tag-url);
  background-size: cover;
  opacity: 0;
  visibility: collapse;
  transition: opacity 0.45s, visibility 0.8s;
}

.project-item:hover .tags {
  background-color: var(--accent-color-alpha);
  box-shadow: inset 4px 4px 5px rgba(255, 255, 255, 0.05), 3px 3px 3px 3px rgba(0, 0, 0, 0.523);
  visibility: visible;
}

.project-item:hover .techTag {
  opacity: 1;
  visibility: visible;
}

.tall {  
  top: 430px;
}

.extensive {
  left: 550px;
}

.project-item:hover .title-text {
  color: #DDDDDD;
  text-shadow:
    rgba(0, 0, 0, 0) 1.5px 0,  
    rgba(0, 0, 0, 0) 1.5px 0,  
    rgba(0, 0, 0, 0.55) 1.5px 0,
    rgba(0, 0, 0, 0.55) 0 1.5px,
    rgba(0, 0, 0, 0) 1.5px 0,  
    rgba(0, 0, 0, 0.55) 1.5px 1.5px;
  font-size: 125%;
}

@media only screen and (min-width: 620px) {
  .projects-list {
    max-width: 1400px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    grid-auto-rows: minmax(290px, auto);
  }

  .project-item {
    margin: 0px;
    height: 100%;
    width: 100%;
  }

  .wide {
    grid-column-end: span 2;    
    font-size: 120%;
  }
  .high {
    grid-row-end: span 2;
  }
}

@media only screen and (max-width: 620px) {
  .title-text {
    font-size: 80%;
  }
  
  .project-item:hover .title-text {
    font-size: 80%;
    padding: -80px;
  }
  
  .tags {
    left: 230px;
  }

  .tall {  
    top: 120px;
  }

  .extensive {
    left: 230px;
  }
}

</style>