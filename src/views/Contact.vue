<template>
  <div>
    
    <h1>Let's get in touch</h1>

    <div style="margin-bottom:40px;">I'm looking for a gamedev job!<br/>Feel free to contact me about any opportunity.</div>

    <ul>
      <li>
        <i class="fa fa-user-circle-o fa-lg fa-fw"></i>
        <a href="https://antoniopriego.github.io/portfolio/" target="_blank">antoniopriego.github.io/portfolio</a>
      </li>
      <li>
        <i class="fa fa-envelope-o fa-lg fa-fw"></i>
        <a href="mailto:antoniopriego98@outlook.com" target="_blank">antoniopriego98@outlook.com</a>
      </li>
      <li>
        <i class="fa fa-linkedin fa-lg fa-fw" style="vertical-align: -5%;"></i>
        <a href="https://www.linkedin.com/in/antonio-priego-raya" target="_blank">linkedin.com/in/antonio-priego-raya</a>
      </li>
      <li>
        <i class="fa fa-github fa-lg fa-fw"></i>
        <a href="https://github.com/AntonioPriego" target="_blank">github.com/AntonioPriego</a>
      </li>
      <li>
        <i class="fa fa-gamepad fa-lg fa-fw"></i>
        <a href="https://tonypr7.itch.io/" target="_blank">tonypr7.itch.io</a> <small style="font-size: 60%;"> Empty at the moment :( </small>
      </li>
    </ul>

  </div>
</template>

<style scoped>
ul {
  list-style: none;
  padding-inline-start: 0px;
}

li {
  line-height: 2.8em;
  font-size: 0.9em;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; /* Opcional: agrega puntos suspensivos si el texto es demasiado largo */
  width: auto;
}

i {
  margin-right: 20px;
}

@media only screen and (min-width: 620px){
  ul {
    padding-inline-start: 40px;
  }

  li {
    line-height: 2.4em;
    font-size: 1.4em;
  }
}
</style>
