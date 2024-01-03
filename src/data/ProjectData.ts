export default class ProjectData {
    id:               string;
    name:             string;
    htmlDescription:  string;
    iconUrl:          string; 
    isWide:           boolean;
    isHigh:           boolean;
    accentColor:      string;  
    accentColorHover: string;
    accentColorAlpha: string;
    isUnreal:         boolean;
    isUnrealBp:       boolean;
    isCpp:            boolean;
    isBlender:        boolean;
    isGodot:          boolean;

    constructor (
        id:           string,
        name:         string,
        iconUrl:      string,
        html:         string,
        isHigh      = false,
        isWide      = false,
        accentColor = "rgb(224, 234, 234)",
        isUnreal    = false,
        isUnrealBp  = false,
        isCpp       = false,
        isBlender   = false,
        isGodot     = false,
    ) {
        this.id               = id;
        this.name             = name;
        this.iconUrl          = iconUrl;
        this.htmlDescription  = html;
        this.accentColor      = accentColor.replace('rgb', 'rgba').replace(')', ', 0.5)');
        this.accentColorHover = accentColor.replace('rgb', 'rgba').replace(')', ', 0.80)'); 
        this.accentColorAlpha = accentColor.replace('rgb', 'rgba').replace(')', ', 0.35)'); 
        this.isHigh           = isHigh;
        this.isWide           = isWide;
        this.isUnreal         = isUnreal;
        this.isUnrealBp       = isUnrealBp;
        this.isCpp            = isCpp;
        this.isBlender        = isBlender;
        this.isGodot          = isGodot;
    }
}
