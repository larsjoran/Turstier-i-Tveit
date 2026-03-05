var wms_layers = [];

var lyr_Topografisknorgeskart_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://wms.geonorge.no/skwms1/wms.topo",
                              attributions: ' ',
                              params: {
                                "LAYERS": "topo",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Topografisk norgeskart',
                            popuplayertitle: 'Topografisk norgeskart',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Topografisknorgeskart_0, 0]);
var format_HinderlypaMerket_tursti_1 = new ol.format.GeoJSON();
var features_HinderlypaMerket_tursti_1 = format_HinderlypaMerket_tursti_1.readFeatures(json_HinderlypaMerket_tursti_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HinderlypaMerket_tursti_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HinderlypaMerket_tursti_1.addFeatures(features_HinderlypaMerket_tursti_1);
var lyr_HinderlypaMerket_tursti_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HinderlypaMerket_tursti_1, 
                style: style_HinderlypaMerket_tursti_1,
                popuplayertitle: 'Hinderløypa — Merket_tursti',
                interactive: true,
                title: '<img src="styles/legend/HinderlypaMerket_tursti_1.png" /> Hinderløypa — Merket_tursti'
            });
var format_HinderlypaMerket_sti_2 = new ol.format.GeoJSON();
var features_HinderlypaMerket_sti_2 = format_HinderlypaMerket_sti_2.readFeatures(json_HinderlypaMerket_sti_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HinderlypaMerket_sti_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HinderlypaMerket_sti_2.addFeatures(features_HinderlypaMerket_sti_2);
var lyr_HinderlypaMerket_sti_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HinderlypaMerket_sti_2, 
                style: style_HinderlypaMerket_sti_2,
                popuplayertitle: 'Hinderløypa — Merket_sti',
                interactive: true,
                title: '<img src="styles/legend/HinderlypaMerket_sti_2.png" /> Hinderløypa — Merket_sti'
            });
var format_Bilder_Hinderlypa_3 = new ol.format.GeoJSON();
var features_Bilder_Hinderlypa_3 = format_Bilder_Hinderlypa_3.readFeatures(json_Bilder_Hinderlypa_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bilder_Hinderlypa_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bilder_Hinderlypa_3.addFeatures(features_Bilder_Hinderlypa_3);
var lyr_Bilder_Hinderlypa_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bilder_Hinderlypa_3, 
                style: style_Bilder_Hinderlypa_3,
                popuplayertitle: 'Bilder_Hinderløypa',
                interactive: true,
                title: '<img src="styles/legend/Bilder_Hinderlypa_3.png" /> Bilder_Hinderløypa'
            });

lyr_Topografisknorgeskart_0.setVisible(true);lyr_HinderlypaMerket_tursti_1.setVisible(true);lyr_HinderlypaMerket_sti_2.setVisible(true);lyr_Bilder_Hinderlypa_3.setVisible(true);
var layersList = [lyr_Topografisknorgeskart_0,lyr_HinderlypaMerket_tursti_1,lyr_HinderlypaMerket_sti_2,lyr_Bilder_Hinderlypa_3];
lyr_HinderlypaMerket_tursti_1.set('fieldAliases', {'qc_id': 'qc_id', 'objectid': 'objectid', 'shape_length': 'shape_length', });
lyr_HinderlypaMerket_sti_2.set('fieldAliases', {'qc_id': 'qc_id', 'objectid': 'objectid', 'shape_length': 'shape_length', });
lyr_Bilder_Hinderlypa_3.set('fieldAliases', {'qc_id': 'qc_id', 'fid': 'fid', 'photo': 'photo', 'filename': 'filename', 'directory': 'directory', 'altitude': 'altitude', 'direction': 'direction', 'rotation': 'rotation', 'longitude': 'longitude', 'latitude': 'latitude', 'timestamp': 'timestamp', });
lyr_HinderlypaMerket_tursti_1.set('fieldImages', {'qc_id': '', 'objectid': '', 'shape_length': '', });
lyr_HinderlypaMerket_sti_2.set('fieldImages', {'qc_id': '', 'objectid': '', 'shape_length': '', });
lyr_Bilder_Hinderlypa_3.set('fieldImages', {'qc_id': '', 'fid': 'TextEdit', 'photo': 'ExternalResource', 'filename': 'TextEdit', 'directory': 'ExternalResource', 'altitude': 'TextEdit', 'direction': 'TextEdit', 'rotation': 'Range', 'longitude': 'TextEdit', 'latitude': 'TextEdit', 'timestamp': 'DateTime', });
lyr_HinderlypaMerket_tursti_1.set('fieldLabels', {'qc_id': 'no label', 'objectid': 'no label', 'shape_length': 'no label', });
lyr_HinderlypaMerket_sti_2.set('fieldLabels', {'qc_id': 'no label', 'objectid': 'no label', 'shape_length': 'no label', });
lyr_Bilder_Hinderlypa_3.set('fieldLabels', {'qc_id': 'no label', 'fid': 'no label', 'photo': 'no label', 'filename': 'no label', 'directory': 'no label', 'altitude': 'no label', 'direction': 'no label', 'rotation': 'no label', 'longitude': 'no label', 'latitude': 'no label', 'timestamp': 'no label', });
lyr_Bilder_Hinderlypa_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});