var wms_layers = [];


        var lyr_WorldImageryClarityBeta_0 = new ol.layer.Tile({
            'title': 'World Imagery (Clarity) Beta',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://clarity.maptiles.arcgis.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Geologia148_1 = new ol.format.GeoJSON();
var features_Geologia148_1 = format_Geologia148_1.readFeatures(json_Geologia148_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Geologia148_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Geologia148_1.addFeatures(features_Geologia148_1);
var lyr_Geologia148_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Geologia148_1, 
                style: style_Geologia148_1,
                popuplayertitle: 'Geologia 148',
                interactive: true,
    title: 'Geologia 148<br />\
    <img src="styles/legend/Geologia148_1_0.png" /> J-Pi<br />\
    <img src="styles/legend/Geologia148_1_1.png" /> K1-Pf<br />\
    <img src="styles/legend/Geologia148_1_2.png" /> K1-Sct<br />\
    <img src="styles/legend/Geologia148_1_3.png" /> K2-Pi<br />\
    <img src="styles/legend/Geologia148_1_4.png" /> MP3NP1-Mag<br />\
    <img src="styles/legend/Geologia148_1_5.png" /> N2Q1-VCc<br />\
    <img src="styles/legend/Geologia148_1_6.png" /> Q-al<br />\
    <img src="styles/legend/Geologia148_1_7.png" /> Q-t<br />\
    <img src="styles/legend/Geologia148_1_8.png" /> T-Mbg<br />\
    <img src="styles/legend/Geologia148_1_9.png" /> T-Mm<br />\
    <img src="styles/legend/Geologia148_1_10.png" /> T-Mmg<br />\
    <img src="styles/legend/Geologia148_1_11.png" /> T-Pf<br />\
    <img src="styles/legend/Geologia148_1_12.png" /> <br />' });
var format_Fallas_2 = new ol.format.GeoJSON();
var features_Fallas_2 = format_Fallas_2.readFeatures(json_Fallas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fallas_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fallas_2.addFeatures(features_Fallas_2);
var lyr_Fallas_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Fallas_2, 
                style: style_Fallas_2,
                popuplayertitle: 'Fallas',
                interactive: true,
    title: 'Fallas<br />\
    <img src="styles/legend/Fallas_2_0.png" /> Falla<br />\
    <img src="styles/legend/Fallas_2_1.png" /> Falla de rumbo dextral<br />\
    <img src="styles/legend/Fallas_2_2.png" /> Falla de rumbo sinestral<br />\
    <img src="styles/legend/Fallas_2_3.png" /> Lineamiento<br />\
    <img src="styles/legend/Fallas_2_4.png" /> <br />' });
var format_Curvas_3 = new ol.format.GeoJSON();
var features_Curvas_3 = format_Curvas_3.readFeatures(json_Curvas_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Curvas_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Curvas_3.addFeatures(features_Curvas_3);
var lyr_Curvas_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Curvas_3, 
                style: style_Curvas_3,
                popuplayertitle: 'Curvas',
                interactive: true,
                title: '<img src="styles/legend/Curvas_3.png" /> Curvas'
            });
var format_Drenajes_4 = new ol.format.GeoJSON();
var features_Drenajes_4 = format_Drenajes_4.readFeatures(json_Drenajes_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Drenajes_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Drenajes_4.addFeatures(features_Drenajes_4);
var lyr_Drenajes_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Drenajes_4, 
                style: style_Drenajes_4,
                popuplayertitle: 'Drenajes',
                interactive: true,
                title: '<img src="styles/legend/Drenajes_4.png" /> Drenajes'
            });
var format_Datos_5 = new ol.format.GeoJSON();
var features_Datos_5 = format_Datos_5.readFeatures(json_Datos_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Datos_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Datos_5.addFeatures(features_Datos_5);
var lyr_Datos_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Datos_5, 
                style: style_Datos_5,
                popuplayertitle: 'Datos',
                interactive: true,
                title: '<img src="styles/legend/Datos_5.png" /> Datos'
            });

lyr_WorldImageryClarityBeta_0.setVisible(true);lyr_Geologia148_1.setVisible(true);lyr_Fallas_2.setVisible(true);lyr_Curvas_3.setVisible(true);lyr_Drenajes_4.setVisible(true);lyr_Datos_5.setVisible(true);
var layersList = [lyr_WorldImageryClarityBeta_0,lyr_Geologia148_1,lyr_Fallas_2,lyr_Curvas_3,lyr_Drenajes_4,lyr_Datos_5];
lyr_Geologia148_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'OBJECTID_1': 'OBJECTID_1', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'SimboloUC': 'SimboloUC', 'Descripcio': 'Descripcio', 'Edad': 'Edad', 'UGIntegrad': 'UGIntegrad', 'Comentario': 'Comentario', });
lyr_Fallas_2.set('fieldAliases', {'Tipo': 'Tipo', 'NombreFall': 'NombreFall', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_Curvas_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ALTURA_SOB': 'ALTURA_SOB', 'TIPO_CURVA': 'TIPO_CURVA', 'PROYECTO': 'PROYECTO', 'FECHA': 'FECHA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_Drenajes_4.set('fieldAliases', {'NOMBRE_GEO': 'NOMBRE_GEO', 'ESTADO_DRE': 'ESTADO_DRE', 'PROYECTO': 'PROYECTO', 'FECHA': 'FECHA', 'DISPERSION': 'DISPERSION', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_Datos_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'FID_UC': 'FID_UC', 'Shape_Leng': 'Shape_Leng', 'SimboloUC': 'SimboloUC', 'Descripcio': 'Descripcio', 'Edad': 'Edad', 'UGIntegrad': 'UGIntegrad', 'Comentario': 'Comentario', 'FID_AreasD': 'FID_AreasD', 'PLA_NUMR_P': 'PLA_NUMR_P', 'RULEID': 'RULEID', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Ar_1': 'Shape_Ar_1', 'ORIG_FID': 'ORIG_FID', 'Azimuth': 'Azimuth', 'Buzamiento': 'Buzamiento', });
lyr_Geologia148_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'OBJECTID_1': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'SimboloUC': 'TextEdit', 'Descripcio': 'TextEdit', 'Edad': 'TextEdit', 'UGIntegrad': 'TextEdit', 'Comentario': 'TextEdit', });
lyr_Fallas_2.set('fieldImages', {'Tipo': 'TextEdit', 'NombreFall': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_Curvas_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'ALTURA_SOB': 'TextEdit', 'TIPO_CURVA': 'TextEdit', 'PROYECTO': 'TextEdit', 'FECHA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_Drenajes_4.set('fieldImages', {'NOMBRE_GEO': 'TextEdit', 'ESTADO_DRE': 'Range', 'PROYECTO': 'TextEdit', 'FECHA': 'DateTime', 'DISPERSION': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_Datos_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'FID_UC': 'TextEdit', 'Shape_Leng': 'TextEdit', 'SimboloUC': 'TextEdit', 'Descripcio': 'TextEdit', 'Edad': 'TextEdit', 'UGIntegrad': 'TextEdit', 'Comentario': 'TextEdit', 'FID_AreasD': 'TextEdit', 'PLA_NUMR_P': 'TextEdit', 'RULEID': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Ar_1': 'TextEdit', 'ORIG_FID': 'TextEdit', 'Azimuth': 'TextEdit', 'Buzamiento': 'TextEdit', });
lyr_Geologia148_1.set('fieldLabels', {'OBJECTID': 'no label', 'OBJECTID_1': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'SimboloUC': 'no label', 'Descripcio': 'no label', 'Edad': 'no label', 'UGIntegrad': 'no label', 'Comentario': 'no label', });
lyr_Fallas_2.set('fieldLabels', {'Tipo': 'inline label - visible with data', 'NombreFall': 'no label', 'SHAPE_Leng': 'no label', });
lyr_Curvas_3.set('fieldLabels', {'OBJECTID': 'no label', 'ALTURA_SOB': 'inline label - visible with data', 'TIPO_CURVA': 'no label', 'PROYECTO': 'no label', 'FECHA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_Drenajes_4.set('fieldLabels', {'NOMBRE_GEO': 'no label', 'ESTADO_DRE': 'no label', 'PROYECTO': 'no label', 'FECHA': 'no label', 'DISPERSION': 'no label', 'SHAPE_Leng': 'no label', });
lyr_Datos_5.set('fieldLabels', {'OBJECTID': 'no label', 'FID_UC': 'no label', 'Shape_Leng': 'no label', 'SimboloUC': 'inline label - visible with data', 'Descripcio': 'no label', 'Edad': 'no label', 'UGIntegrad': 'no label', 'Comentario': 'no label', 'FID_AreasD': 'no label', 'PLA_NUMR_P': 'no label', 'RULEID': 'no label', 'Shape_Le_1': 'no label', 'Shape_Ar_1': 'no label', 'ORIG_FID': 'no label', 'Azimuth': 'no label', 'Buzamiento': 'no label', });
lyr_Datos_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});