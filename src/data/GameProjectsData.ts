import ProjectData from '@/data/ProjectData.ts';


export default [
    new ProjectData("TomLoomanCourse", "Action Roguelike", "img/projects/ActionRoguelike.png", `
    <div class="paragraph">
        <strong>Action Roguelike</strong> is the result of developing further the project I did during Tom Looman's course.
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src=" " frameborder="0" allowfullscreen></iframe>
    </div>

    <div class="paragraph">
        Main features :
        <ul>
        <li>Some stuff</li>
        <li>Some great stuff</li>
        <li>More awesome stuff</li>
        <li>And then some</li>
        </ul>
    </div>

    <div class="paragraph">
    <div class="notice">
        Windows build available on <a href="https://some.where/nice" target="_blank">itch.io</a>.
        Source code is available on <a href="https://github.com/yourself" target="_blank">GitHub</a>.
    </div>
    </div>

    <div class="paragraph center">
    <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Singing Addict Screenshot" />
    </div>
    `,/*smallIcons*/false, /*zoomHeight=*/"100%", /*zoomWidth=*/"100%", /*xShift=*/"0px", /*yShift=*/"0px", /*high=*/true, /*wide=*/true, "rgb(255, 19, 60)", /*isUnreal=*/false, /*isUnrealBp=*/true, /*isOpenGL*/false, /*isCpp=*/true, /*isBlender=*/false, /*isGodot=*/false),
    new ProjectData("CarlosCoronadoCourse", "Level Set developed on Blueprints", "img/projects/UE_LevelSet.gif", 
    `
    <div class="paragraph"> I collected in a menu with options, some of the levels I did during the course 'Programming Blueprints in Unreal Engine from 0 to pro' by Carlos Coronado.</a>
    </div>
    <div class="paragraph left">
        <iframe id="videoPlayer" class="youtube" src="https://www.youtube.com/embed/3uIrEifCvJQ" frameborder="0" allowfullscreen></iframe>
    </div>

    <div class="paragraph right">
        Main features :
        <ul id="timestamps">
            <li><a href="#" data-time="0">0:00 First thing</a></li>
            <li><a href="#" data-time="133">2:13 second feature</a></li>
            <li><a href="#" data-time="193">3:13 Third feature</a></li>
            <!-- Add more timestamps with their corresponding times in seconds -->
        </ul>  
    </div>

    <div class="paragraph center">
        <img class="phone-screenshot" src="https://fakeimg.pl/300x534/" alt="Optimistic Chubby Screenshot" />
        <img class="phone-screenshot" src="https://fakeimg.pl/300x534/" alt="Optimistic Chubby Screenshot" />
    </div>
    `,/*smallIcons*/false, /*zoomHeight=*/"100%", /*zoomWidth=*/"100%", /*xShift=*/"0px", /*yShift=*/"0px", /*high=*/false, /*wide=*/true, "rgb(102, 153, 255)", /*isUnreal=*/false, /*isUnrealBp=*/true, /*isOpenGL*/false, /*isCpp=*/false, /*isBlender=*/false, /*isGodot=*/false),
    
    new ProjectData("IG", "OpenGL scene: Coffee Shop", "https://raw.githubusercontent.com/AntonioPriego/UGR_InformaticaGrafica/main/Capturas/2_2.png", 
    `
    <div class="paragraph"> I collected in a menu with options, some of the levels I did during the course 'Programming Blueprints in Unreal Engine from 0 to pro' by Carlos Coronado.</a>
    </div>
    <img style="display: block; margin-left: auto; margin-right: auto; width: 35%;" class="phone-screenshot" src="https://raw.githubusercontent.com/AntonioPriego/UGR_InformaticaGrafica/main/Capturas/4.gif"/>

    <div class="paragraph right">
        Main features :
        <ul id="timestamps">
            <li><a href="#" data-time="0">0:00 First thing</a></li>
            <li><a href="#" data-time="133">2:13 second feature</a></li>
            <li><a href="#" data-time="193">3:13 Third feature</a></li>
            <!-- Add more timestamps with their corresponding times in seconds -->
        </ul>  
    </div>

    <div class="paragraph center">
    <img class="phone-screenshot" src="https://raw.githubusercontent.com/AntonioPriego/UGR_InformaticaGrafica/main/Capturas/2_2.png"/>
    <img class="phone-screenshot" src="https://raw.githubusercontent.com/AntonioPriego/UGR_InformaticaGrafica/main/Capturas/1.png"  /> <br>
    <img class="phone-screenshot" src="https://raw.githubusercontent.com/AntonioPriego/UGR_InformaticaGrafica/main/Capturas/3.png"  />
    </div>
    `,/*smallIcons*/false, /*zoomHeight=*/"100%", /*zoomWidth=*/"100%", /*xShift=*/"0px", /*yShift=*/"0px", /*high=*/false, /*wide=*/false, "rgb(144, 90, 114)", /*isUnreal=*/false, /*isUnrealBp=*/false, /*isOpenGL*/true, /*isCpp=*/true, /*isBlender=*/false, /*isGodot=*/false),
    new ProjectData("FallGuys", "Fall Guys clone", "img/projects/FallGuysWannaBe.gif", 
    `
    
    `,/*smallIcons*/false, /*zoomHeight=*/"100%", /*zoomWidth=*/"100%", /*xShift=*/"0px", /*yShift=*/"0px", /*high=*/false, /*wide=*/false, "rgb(133, 202, 140)", /*isUnreal=*/true, /*isUnrealBp=*/false, /*isOpenGL*/false, /*isCpp=*/true, /*isBlender=*/false, /*isGodot=*/false),
    new ProjectData("DungeonPuzzle", "Dungeon puzzle prototype", "img/projects/DungeonPuzzle.gif", 
    `
    
    `,/*smallIcons*/false, /*zoomHeight=*/"100%", /*zoomWidth=*/"100%", /*xShift=*/"0px", /*yShift=*/"0px", /*high=*/false, /*wide=*/false, "rgb(142, 87, 29)", /*isUnreal=*/true, /*isUnrealBp=*/false, /*isOpenGL*/false, /*isCpp=*/true, /*isBlender=*/false, /*isGodot=*/false)
];