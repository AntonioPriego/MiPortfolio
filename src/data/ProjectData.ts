export default class ProjectData {
    id:               string;
    name:             string;
    htmlDescription:  string;
    iconUrl:          string; 
    smallIcons:       boolean;
    zoomHeight:       string;
    zoomWidth:        string;
    xShift:           string;
    yShift:           string;
    isWide:           boolean;
    isHigh:           boolean;
    accentColor:      string;  
    accentColorHover: string;
    accentColorAlpha: string;

    isUnreal:         boolean;
    isUnrealBp:       boolean;
    isOpenGL:         boolean;
    isCpp:            boolean;
    isBlender:        boolean;
    isGodot:          boolean;

    isArduino:        boolean;
    isQT:             boolean;
    isBluetooth:      boolean;
    isTensorFlow:     boolean;
    isPython:         boolean;
    isJava:           boolean;
    isRuby:           boolean;
    isCuda:           boolean;
    isMPI:            boolean;
    isFlutter:        boolean;

    constructor (
        id:           string,
        name:         string,
        iconUrl:      string,
        html:         string,
        smallIcons    = false,
        zoomHeight    = "100%",
        zoomWidth     = "100%",
        xShift        = "0px",
        yShift        = "0px",
        isHigh        = false,
        isWide        = false,
        accentColor   = "rgb(224, 234, 234)",

        isUnreal      = false,
        isUnrealBp    = false,
        isOpenGL      = false,
        isCpp         = false,
        isBlender     = false,
        isGodot       = false,
        
        isArduino     = false,
        isQT          = false,
        isBluetooth   = false,
        isTensorFlow  = false,
        isPython      = false,
        isJava        = false,
        isRuby        = false,
        isCuda        = false,
        isMPI         = false,
        isFlutter     = false,
    ) {
        this.id               = id;
        this.name             = name;
        this.iconUrl          = iconUrl;
        this.htmlDescription  = html;
        this.accentColor      = accentColor.replace('rgb', 'rgba').replace(')', ', 0.5)');
        this.accentColorHover = accentColor.replace('rgb', 'rgba').replace(')', ', 0.80)'); 
        this.accentColorAlpha = accentColor.replace('rgb', 'rgba').replace(')', ', 0.35)');
        this.smallIcons       = smallIcons;
        this.zoomHeight       = zoomHeight;
        this.zoomWidth        = zoomWidth;
        this.xShift           = xShift;
        this.yShift           = yShift;
        this.isHigh           = isHigh;
        this.isWide           = isWide;

        this.isUnreal         = isUnreal;
        this.isUnrealBp       = isUnrealBp;
        this.isOpenGL         = isOpenGL;
        this.isCpp            = isCpp;
        this.isBlender        = isBlender;
        this.isGodot          = isGodot;
        
        this.isArduino        = isArduino;
        this.isQT             = isQT;
        this.isBluetooth      = isBluetooth;
        this.isTensorFlow     = isTensorFlow;
        this.isPython         = isPython;
        this.isJava           = isJava;
        this.isRuby           = isRuby;
        this.isCuda           = isCuda;
        this.isMPI            = isMPI;
        this.isFlutter        = isFlutter;
    }
}
