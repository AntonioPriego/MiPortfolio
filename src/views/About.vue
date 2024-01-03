<template>
  <div style="margin-bottom: 80px;">
    
    <div class="row">
      <div class="column1">
        <h1>Hello!</h1><h2>It's</h2><br>
        <h1 class="animate-charcter">Antonio Priego</h1>

        <div class="paragraph">
        <div>
          As a computer lover, I enjoy almost anything is done using a screen.
          But the most is coding, I feel like an artist giving shape the things that exist only in <pre class="spacer" id="change-text"></pre> head.
        </div>

        <div style="margin-top: 20px;">I've worked on <router-link to="/game-projects">stuff</router-link>, on <router-link to="/other-projects">other stuff</router-link>, and took part in <router-link to="/resume">a few things</router-link> as well.</div>

        <div style="margin-top: 40px;">I'm <strong>currently looking to make the jump into the video game industry</strong>. You can reach me at <a href="mailto:antoniopriego98@outlook.com">antoniopriego98@outlook.com</a> or <router-link to="/contact">through here</router-link>.</div>
        </div>

        <div style="clear:both"></div>

        <div>
          <!--<img sizes="" src="img/ue-icon.png" alt="Unreal Engine" /> -->
        </div>

      </div>

      <div class="column2 photo">
        <img src="img/avatarGradient2.png" alt="It's me" />
        <div class="whatami">Computer Engineer</div>    
        <div class="currentPos">Currently : <strong>Mid Salesforce Developer</strong></div>    
      </div>
    </div>

        
  </div>
  
</template>



<script lang="ts">
  // eslint-disable-next-line
  import Vue from "vue";

  const texts = ["her", "his"];
  let index = 0;
  setInterval(() => { 
    index %=  2;
    document.getElementById("change-text")!.innerText = texts[index];
    index++;
  }, 1000);
</script>


<style scoped>
#show_button{
  visibility:hidden;
}
.paragraph {
  max-width: 700px;
  margin-bottom: 20px;
}

img {
  opacity: 0.8;
  filter: alpha(opacity=40);
  filter: blur(8.5px);
}
    
img:hover {
  opacity: 1.0;
  filter: alpha(opacity=100);
  filter: blur(0px);
}

.photo {
  margin-top: 10px;
  text-align: center;
}

.column1 {
  float: left;
  width: 62.5%;
  padding: 10px;
}

.column2 {
  float: left;
  width: 22.5%;
  padding: 10px;
}

.row:after {
  content: "";
  display: table;
  clear: both;
}


h1 {
  display: inline;
  margin-top: 0;
}
h2 {
  display: inline;
  padding-left : 20px;
  padding-right : 10px;
}


.whatami {  
  font-size: 22.8px;  
  text-decoration-line: overline;
  text-decoration-color: #FFD369;
}

.currentPos {  
  font-size: 15px;  
  letter-spacing: -1.5px;
}

.spacer {
  width:200px;
  overflow:auto;
  display: inline;
  margin: 0;
}

.animate-charcter
{
  text-transform: uppercase;
  background-image: linear-gradient(
    -225deg,
    #FFD369 0%,
    #00ADB5 25%,
    #33B5A6 50%,
    #99C487 75%,
    #FFD369 100%
  );
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textclip 7s linear infinite;
  display: inline-block;
}

@keyframes textclip {
  to {
    background-position: 200% center;
  }
}

@media only screen and (min-width: 620px){
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 10px;
    padding-left: 80px;
  }
}

@media only screen and (max-width: 954px) {
  h1 {
    font-size: 2em;
  }

  .column1 {
    float: center;
    width: 95%;
    padding: 10px;
  }

  .column2 {
    float: center;
    width: 95%;
  }

  .whatami {
    float: center;
    font-size: 17.8px;  
    text-decoration-line: overline;
    text-decoration-color: #FFD369;
  }

  .currentPos {  
    float: center;
    font-size: 12.5px;  
    letter-spacing: -1.5px;
  }
}

</style>