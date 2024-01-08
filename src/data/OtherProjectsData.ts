import ProjectData from '@/data/ProjectData.ts'

export default [
  new ProjectData("TFG", "SmartPen", "https://raw.githubusercontent.com/AntonioPriego/SmartPen/main/Memory/capturas/SmartPenMP.png",
  `
  <div class="paragraph">My Final Degree Project <small style="font-size: 60%; color: #ffed89;"><i class="fa fa-trophy" aria-hidden="true"></i> Honours</small> "Device for handwriting detection using Deep Learning in an embedded system".</a> <br /><br />

    
  <iframe id="videoPlayer" class="youtube" src="https://www.youtube.com/embed/xLcMaVAP_qw" frameborder="0" allowfullscreen></iframe> <br />
  
  <div class="paragraph">
    <div class="notice">
        Source code is available on <a style="text-decoration: none;" href="https://github.com/AntonioPriego/ActionRoguelike_TLC" target="_blank"><i class="fa fa-github" aria-hidden="true"></i> GitHub</a>.
    </div>
  </div>

  <div class="paragraph right">
    Letter detection by using Deep Learning integrated in an embedded system (Arduino Nano Sense 33). <br />
    

    <img style="width: 150px;" class="phone-screenshot" src="https://raw.githubusercontent.com/AntonioPriego/SmartPen/main/Memory/capturas/SmartPenMP.png"/>

    <br />

    The project consists of:
    <ul style="margin-top: 0px;">
      <li>Firmware for the microcontroller.</li>
      <li>
        User interface to show the functionalities of the SmartPen.
        <br />
        <div class="paragraph center">
          <img class="custom-screenshot" src="https://raw.githubusercontent.com/AntonioPriego/SmartPen/main/Memory/capturas/startup.png"/>
          <img class="custom-screenshot" src="https://raw.githubusercontent.com/AntonioPriego/SmartPen/main/Memory/capturas/letterbyletter.png"/>
        </div>
      </li>
      <li>Notebook for the design, training and testing of the neural network.</li>
      <li>
        Software to collect the samples for the neural network dataset.
        <br />
        <div class="paragraph center"> 
          <img class="custom-screenshot2" src="https://raw.githubusercontent.com/AntonioPriego/SmartPen/main/Memory/capturas/DataCollector.png"/>
        </div>
      </li>
      <li>
        3D models for the encapsulation of the SmartPen.
        <div class="paragraph center">
          <img style="height: 200px; width: auto;" class="phone-screenshot" src="https://raw.githubusercontent.com/AntonioPriego/SmartPen/main/Memory/capturas/cilindroBajo.png" />
          <img style="height: 200px; width: auto;" class="phone-screenshot" src="https://raw.githubusercontent.com/AntonioPriego/SmartPen/main/Memory/capturas/cilindroAlto.png" />
          <img style="height: 200px; width: auto;" class="phone-screenshot" src="https://raw.githubusercontent.com/AntonioPriego/SmartPen/main/Memory/capturas/slotBater%C3%ADa.png" />
          <img style="height: 200px; width: auto;" class="phone-screenshot" src="https://raw.githubusercontent.com/AntonioPriego/SmartPen/main/Memory/capturas/punta.png" />
        </div>
      </li>
    </ul>
  </div>
  `,
    /*isDetailed=*/true, /*smallIcons*/true, /*zoomHeight=*/"85%", /*zoomWidth=*/"55%", /*xShift=*/"80px", /*yShift=*/"0px", /*high=*/true, /*wide=*/false, "rgb(170, 85, 255)",
    /*isUnreal=*/false, /*isUnrealBp=*/false, /*isOpenGL*/false, /*isCpp=*/true, /*isBlender=*/true, /*isGodot=*/false,
    /*isArduino=*/true, /*isQT=*/true, /*isBluetooth=*/true, /*isTensorFlow=*/true, /*isJava=*/false, /*isRuby=*/false, /*isCuda=*/false, /*isMPI=*/false, /*isFlutter=*/false),
  new ProjectData("Civitas", "Text Monopoly", "img/projects/civitas.png",
  `
  <div class="paragraph">
      <strong>Civitas</strong> is a CLI Monopoly made on both Java and Ruby.
  </div>

  <div class="paragraph">
    <div class="notice">
        Source code is available on <a style="text-decoration: none;" href="https://github.com/AntonioPriego/UGR_PDOO_Civitas" target="_blank"><i class="fa fa-github" aria-hidden="true"></i> GitHub</a>.
    </div>
  </div>
  `,
    /*isDetailed=*/true, /*smallIcons*/false, /*zoomHeight=*/"100%", /*zoomWidth=*/"100%", /*xShift=*/"0px", /*yShift=*/"0px", /*high=*/false, /*wide=*/false, "rgb(155, 17, 30)",
    /*isUnreal=*/false, /*isUnrealBp=*/false, /*isOpenGL*/false, /*isCpp=*/false, /*isBlender=*/false, /*isGodot=*/false,
    /*isArduino=*/false, /*isQT=*/false, /*isBluetooth=*/false, /*isTensorFlow=*/false, /*isPython=*/false, /*isJava=*/true, /*isRuby=*/true, /*isCuda=*/false, /*isMPI=*/false, /*isFlutter=*/false), 
  new ProjectData("Sobel", "Sobel filter", "img/projects/sobel.jpg",
  `
  <div class="paragraph">
    Sobel filter developed on sequential C, Parallel C++ (with MPI) and GPU processing (with Nvidia CUDA). <br />
    In order to analyse and study the results and efficiency of implementation.
  </div>

  <div class="paragraph">
    <div class="notice">
        Source code is available on <a style="text-decoration: none;" href="https://github.com/AntonioPriego/FiltroSobel" target="_blank"><i class="fa fa-github" aria-hidden="true"></i> GitHub</a>.
    </div>
  </div>
  `,
    /*isDetailed=*/true, /*smallIcons*/false, /*zoomHeight=*/"100%", /*zoomWidth=*/"90%", /*xShift=*/"15px", /*yShift=*/"0px", /*high=*/false, /*wide=*/false, "rgb(118, 185, 0)",
    /*isUnreal=*/false, /*isUnrealBp=*/false, /*isOpenGL*/false, /*isCpp=*/false, /*isBlender=*/false, /*isGodot=*/false,
    /*isArduino=*/false, /*isQT=*/false, /*isBluetooth=*/false, /*isTensorFlow=*/false, /*isPython=*/false, /*isJava=*/false, /*isRuby=*/false, /*isCuda=*/true, /*isMPI=*/true, /*isFlutter=*/false),
  new ProjectData("TiradApp", "Flutter app", "img/projects/TiradApp/Preview.png", ` `,
    /*isDetailed=*/false, /*smallIcons*/false, /*zoomHeight=*/"102%", /*zoomWidth=*/"100%", /*xShift=*/"0px", /*yShift=*/"0px", /*high=*/false, /*wide=*/true, "rgb(100, 203, 248)",
    /*isUnreal=*/false, /*isUnrealBp=*/false, /*isOpenGL*/false, /*isCpp=*/false, /*isBlender=*/false, /*isGodot=*/false,
    /*isArduino=*/false, /*isQT=*/false, /*isBluetooth=*/false, /*isTensorFlow=*/false, /*isPython=*/false, /*isJava=*/false, /*isRuby=*/false, /*isCuda=*/false, /*isMPI=*/false, /*isFlutter=*/true),
];