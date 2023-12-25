var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_FRA_adm1_1 = new ol.format.GeoJSON();
var features_FRA_adm1_1 = format_FRA_adm1_1.readFeatures(json_FRA_adm1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FRA_adm1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FRA_adm1_1.addFeatures(features_FRA_adm1_1);
var lyr_FRA_adm1_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FRA_adm1_1, 
                style: style_FRA_adm1_1,
                interactive: false,
    title: 'FRA_adm1<br />\
    <img src="styles/legend/FRA_adm1_1_0.png" /> 1 - 5.2<br />\
    <img src="styles/legend/FRA_adm1_1_1.png" /> 1.0 - 5.0<br />\
    <img src="styles/legend/FRA_adm1_1_2.png" /> 5.0 - 10.0<br />\
    <img src="styles/legend/FRA_adm1_1_3.png" /> 10.0 - 15.0<br />\
    <img src="styles/legend/FRA_adm1_1_4.png" /> 17.8 - 22<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_FRA_adm1_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_FRA_adm1_1];
lyr_FRA_adm1_1.set('fieldAliases', {'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'TYPE_1': 'TYPE_1', 'ENGTYPE_1': 'ENGTYPE_1', 'NL_NAME_1': 'NL_NAME_1', 'VARNAME_1': 'VARNAME_1', });
lyr_FRA_adm1_1.set('fieldImages', {'ID_0': '', 'ISO': '', 'NAME_0': '', 'ID_1': '', 'NAME_1': '', 'TYPE_1': '', 'ENGTYPE_1': '', 'NL_NAME_1': '', 'VARNAME_1': '', });
lyr_FRA_adm1_1.set('fieldLabels', {'ID_0': 'no label', 'ISO': 'no label', 'NAME_0': 'no label', 'ID_1': 'no label', 'NAME_1': 'inline label', 'TYPE_1': 'no label', 'ENGTYPE_1': 'no label', 'NL_NAME_1': 'no label', 'VARNAME_1': 'no label', });
lyr_FRA_adm1_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});