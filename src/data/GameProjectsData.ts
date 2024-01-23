import ProjectData from '@/data/ProjectData.ts';


export default [
    new ProjectData("TomLoomanCourse", "Action Roguelike", "img/projects/MultiRPG.gif", `
    <div class="paragraph">
        <strong>Action Roguelike</strong> is a multiplayer action rpg survivial waves. The result of developing further the project I did during <a style="text-decoration: none;" href="https://courses.tomlooman.com/p/unrealengine-cpp" target="_blank">Tom Looman's course</a>.
    </div>

    <iframe id="videoPlayer" class="youtube" src="https://www.youtube.com/embed/tkYM9w13rmY" frameborder="0" allowfullscreen></iframe>
    
    <div class="paragraph">
        <div class="notice">
            Source code is available on <a style="text-decoration: none;" href="https://github.com/AntonioPriego/ActionRoguelike_TLC" target="_blank"><i class="fa fa-github" aria-hidden="true"></i> GitHub</a>.
        </div>
    </div>

    <div class="paragraph right">
        I am currently working on polish and make it shine with cool assets and new features. <br />
        <small>
            With this project I have learned in depth how to make use of Unreal Engine, how to combine C++ and Blueprints in an efficient way and some technical aspects it hides.
            It is the most technical and to some measure challenging project due to the implementation of multiplayer, which I have developed in a video game engine until the present time.
            But I am extremely satisfied with the result and mainly with the knowledge I acquired.
        </small>

        <div class="paragraph">
            Main features :
            <ul style="margin-top: -2px;">
                <li>Multiplayer / Replication</li>
                <li>
                    Component based actors
                    <ul>
                        <li>RPG attributes component</li>
                        <li>Interaction component</li>
                        <li>Abilities component</li>
                        <li>Sensing component</li>
                    </ul>
                </li>
                <li>Custom Gameplay Ability System</li>
                <li>Mid-Complex animation system</li>
                <li>Gameplay tags usage</li>
                <li>
                    AI
                    <ul>
                        <li>Mid-Complex Behavior Trees</li>
                        <li>Navigation System</li>
                        <li>Environment Query System</li>
                        <li>BT Tasks</li>
                        <li>...</li>
                    </ul>    
                </li>
                <li>Mid-Complex UI UMG Widgets</li>
                <li>Shooter & Abilities system</li>
                <li>Materials focused on gameplay</li>
                <li>Deep engine architecture knowledge</li>
                <li>Basic Menus</li>
                <li>Basic Save System</li>
                <li>Efficient Asset Management</li>
                <li>...</li>
            </ul>
        </div>
    </div>
    `,/*isDetailed=*/true, /*smallIcons*/false, /*zoomHeight=*/"100%", /*zoomWidth=*/"100%", /*xShift=*/"0px", /*yShift=*/"0px", /*high=*/true, /*wide=*/true, "rgb(255, 19, 60)", /*isUnreal=*/false, /*isUnrealBp=*/true, /*isOpenGL*/false, /*isCpp=*/true, /*isBlender=*/false, /*isGodot=*/false),
    new ProjectData("CarlosCoronadoCourse", "Level Set developed on Blueprints", "img/projects/UE_LevelSet.gif", 
    `
    <div class="paragraph">
        I collected in a menu with options, some of the levels I did during the course <a style="text-decoration: none;" href="https://udemy-certificate.s3.amazonaws.com/image/UC-d876e636-c706-4a66-946e-44777034909f.jpg?v=1662981718000" target="_blank">'Programming Blueprints in Unreal Engine from 0 to pro'</a> by Carlos Coronado.</a>
    </div>
    <iframe id="videoPlayer" class="youtube" src="https://www.youtube.com/embed/3uIrEifCvJQ" frameborder="0" allowfullscreen></iframe>
    
    <div class="paragraph right">
        This is my first guided learning experience with Unreal Engine. <br />
        <small>
            Now I consider this experience as a very elementary introduction to Unreal, but at the time it was extremely useful for me, as I had just developed a small tower defence game with 3 colleagues in a couple of weeks and none of us had even the slightest notion of the engine.
            So we did a very "intuitive" development. <br /> In this way, this course helped me to realise everything that we had not taken into consideration during the development of that tower defence, to introduce me to so many elements that we had not dealt with in the course and to give a little more shape to everything I had learnt.
        </small>
        <br />
        <br />
        Developed features to be noted :
        <ul style="margin-top: -2px;">
            <li>
                Menus
                <ul>
                    <li>Load system</li>
                    <li>Settings (language, video, accessibility, etc)</li>
                    <li>Pause menu</li>
                </ul>    
            </li>
            <li>Saves system</li>
            <li>Translated/localised texts</li>
            <li>
                Gameplay mechanics
                <ul>
                    <li>Keys system</li>
                    <li>Take/Carry/Use objects</li>
                    <li>Puzzles</li>
                </ul>
            </li>
            <li>            
                Environment interactions
                <ul>
                    <li>Buttons</li>
                    <li>Harmful fire</li>
                    <li>Death by falling into the void</li>
                </ul>
            </li>
            <li>            
                AI powered enemies
                <ul>
                    <li>Basic behavior tree: Follow & Attack</li>
                    <li>Basic Navigation System: Follow</li>
                    <li>Basic Animation Blueprint implementation</li>
                </ul>
            </li>
            <li>            
                UI/Widgets
                <ul>
                    <li>Context texts</li>
                    <li>Health clue</li>
                </ul>
            </li>
            <li>Basic health/death system</li>
            <li>Levels management</li>
        </ul>  
    </div>
    `,/*isDetailed=*/true, /*smallIcons*/false, /*zoomHeight=*/"100%", /*zoomWidth=*/"100%", /*xShift=*/"0px", /*yShift=*/"0px", /*high=*/false, /*wide=*/true, "rgb(102, 153, 255)", /*isUnreal=*/false, /*isUnrealBp=*/true, /*isOpenGL*/false, /*isCpp=*/false, /*isBlender=*/false, /*isGodot=*/false),
    
    new ProjectData("IG", "OpenGL scene: Coffee Shop", "https://raw.githubusercontent.com/AntonioPriego/UGR_InformaticaGrafica/main/Capturas/2_2.png", 
    `
    <div class="paragraph">An openGL scene with humble graphics, basic lighting, simple texturing and hierarchical animated models.</a>
    </div>
    <img style="display: block; margin-left: auto; margin-right: auto; width: 35%;" class="phone-screenshot" src="https://raw.githubusercontent.com/AntonioPriego/UGR_InformaticaGrafica/main/Capturas/4.gif"/>

    <div class="paragraph">
        <div class="notice">
            Source code is available on <a style="text-decoration: none;" href="https://github.com/AntonioPriego/UGR_InformaticaGrafica" target="_blank"><i class="fa fa-github" aria-hidden="true"></i> GitHub</a>.
        </div>
    </div>

    <div>
        <small>
            Despite its simplicity, it was a challenging project that made me realise the complexity of graphics. <br />It is precisely because of this complexity that I enjoyed developing it so much and felt so proud of my learning.
        </small>        
    </div>

    <div class="paragraph center">
    <img class="phone-screenshot" src="https://raw.githubusercontent.com/AntonioPriego/UGR_InformaticaGrafica/main/Capturas/2_2.png"/>
    <img class="phone-screenshot" src="https://raw.githubusercontent.com/AntonioPriego/UGR_InformaticaGrafica/main/Capturas/1.png"  /> <br>
    <img class="pc-screenshot" style="width: 60%;" src="https://raw.githubusercontent.com/AntonioPriego/UGR_InformaticaGrafica/main/Capturas/3.png"  />
    </div>
    `,/*isDetailed=*/true ,/*smallIcons*/false, /*zoomHeight=*/"100%", /*zoomWidth=*/"100%", /*xShift=*/"0px", /*yShift=*/"0px", /*high=*/false, /*wide=*/false, "rgb(144, 90, 114)", /*isUnreal=*/false, /*isUnrealBp=*/false, /*isOpenGL*/true, /*isCpp=*/true, /*isBlender=*/false, /*isGodot=*/false),
    new ProjectData("FallGuys", "Fall Guys clone", "img/projects/FallGuysWannaBe.gif", 
    `
    
    `,/*isDetailed=*/false, /*smallIcons*/false, /*zoomHeight=*/"100%", /*zoomWidth=*/"100%", /*xShift=*/"0px", /*yShift=*/"0px", /*high=*/false, /*wide=*/false, "rgb(133, 202, 140)", /*isUnreal=*/true, /*isUnrealBp=*/false, /*isOpenGL*/false, /*isCpp=*/true, /*isBlender=*/false, /*isGodot=*/false),
    new ProjectData("DungeonPuzzle", "Dungeon puzzle prototype", "img/projects/DungeonPuzzle.gif", 
    `
    
    `,/*isDetailed=*/false, /*smallIcons*/false, /*zoomHeight=*/"100%", /*zoomWidth=*/"100%", /*xShift=*/"0px", /*yShift=*/"0px", /*high=*/false, /*wide=*/false, "rgb(142, 87, 29)", /*isUnreal=*/true, /*isUnrealBp=*/false, /*isOpenGL*/false, /*isCpp=*/true, /*isBlender=*/false, /*isGodot=*/false)
];