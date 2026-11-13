var size = 0;
var placement = 'point';

var style_Curvas_3 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("");
    var labelFont = "6.5px \'Arial\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "#d8d8d8";
    var bufferWidth = 3.0;
    var textAlign = 'left';
    var offsetX = 8;
    var offsetY = 3;
    var overflow = false;
    var repeat = 900.0;
    var placement = 'line';
    if (feature.get("ALTURA_SOB") !== null) {
        labelText = String(feature.get("ALTURA_SOB"));
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(236,96,16,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.22799999999999998}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];

    return style;
};
