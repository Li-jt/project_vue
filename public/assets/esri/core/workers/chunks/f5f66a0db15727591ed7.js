"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[24,8008,8062],{70024:(e,a,r)=>{r.r(a),r.d(a,{populateOperationalLayers:()=>c});var t=r(46791),n=(r(80442),r(95330)),i=r(87344),l=r(15235);function s(e,a){return!(!e.layerType||"ArcGISFeatureLayer"!==e.layerType)&&e.featureCollectionType===a}var y=r(28008),o=r(40555);async function c(e,a,r){if(!a)return;const t=[];for(const e of a){const a=S(e,r);"GroupLayer"===e.layerType?t.push(h(a,e,r)):t.push(a)}const i=await(0,n.as)(t);for(const a of i)!a.value||r.filter&&!r.filter(a.value)||e.add(a.value)}const u={ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",PointCloudLayer:"PointCloudLayer",ArcGISSceneServiceLayer:"SceneLayer",IntegratedMeshLayer:"IntegratedMeshLayer",OGCFeatureLayer:"OGCFeatureLayer",BuildingSceneLayer:"BuildingSceneLayer",ArcGISTiledElevationServiceLayer:"ElevationLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",GroupLayer:"GroupLayer",GeoJSON:"GeoJSONLayer",WebTiledLayer:"WebTileLayer",CSV:"CSVLayer",VectorTileLayer:"VectorTileLayer",WFS:"WFSLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer",KML:"KMLLayer",RasterDataLayer:"UnsupportedLayer",Voxel:"VoxelLayer",LineOfSightLayer:"LineOfSightLayer"},L={ArcGISTiledElevationServiceLayer:"ElevationLayer",DefaultTileLayer:"ElevationLayer",RasterDataElevationLayer:"UnsupportedLayer"},d={ArcGISTiledMapServiceLayer:"TileLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",OpenStreetMap:"OpenStreetMapLayer",WebTiledLayer:"WebTileLayer",VectorTileLayer:"VectorTileLayer",ArcGISImageServiceLayer:"UnsupportedLayer",WMS:"UnsupportedLayer",ArcGISMapServiceLayer:"UnsupportedLayer",DefaultTileLayer:"TileLayer"},p={ArcGISAnnotationLayer:"UnsupportedLayer",ArcGISDimensionLayer:"UnsupportedLayer",ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISStreamLayer:"StreamLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",CSV:"CSVLayer",DefaultTileLayer:"TileLayer",GeoRSS:"GeoRSSLayer",GeoJSON:"GeoJSONLayer",GroupLayer:"GroupLayer",KML:"KMLLayer",OGCFeatureLayer:"OGCFeatureLayer",SubtypeGroupLayer:"UnsupportedLayer",VectorTileLayer:"VectorTileLayer",WFS:"WFSLayer",WMS:"WMSLayer",WebTiledLayer:"WebTileLayer"},f={ArcGISFeatureLayer:"FeatureLayer"},m={ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",OpenStreetMap:"OpenStreetMapLayer",VectorTileLayer:"VectorTileLayer",WebTiledLayer:"WebTileLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer"};async function S(e,a){return async function(e,a,r){const t=new e;return t.read(a,r.context),"group"===t.type&&I(a)&&await async function(e,a,r){const t=i.T.FeatureLayer,n=await t(),l=a.featureCollection,s=l.showLegend,y=l.layers.map(((t,i)=>{const l=new n;l.read(t,r);const y={...r,ignoreDefaults:!0};return l.read({id:`${e.id}-sublayer-${i}`,visibility:a.visibleLayers?.includes(i)??!0},y),null!=s&&l.read({showLegend:s},y),l}));e.layers.addMany(y)}(t,a,r.context),await(0,o.y)(t,r.context),t}(await async function(e,a){const r=a.context,t=T(r);let n=e.layerType||e.type;!n&&a&&a.defaultLayerType&&(n=a.defaultLayerType);const o=t[n];let c=o?i.T[o]:i.T.UnknownLayer;if(g(e)){const a=r?.portal;if(e.itemId){const r=new l.default({id:e.itemId,portal:a});await r.load();const t=(await(0,y.selectLayerClassPath)(r)).className||"UnknownLayer";c=i.T[t]}}else"ArcGISFeatureLayer"===n?function(e){return s(e,"notes")}(e)?c=i.T.MapNotesLayer:function(e){return s(e,"route")}(e)?c=i.T.RouteLayer:I(e)&&(c=i.T.GroupLayer):e.wmtsInfo&&e.wmtsInfo.url&&e.wmtsInfo.layerIdentifier?c=i.T.WMTSLayer:"WFS"===n&&"2.0.0"!==e.wfsInfo.version&&(c=i.T.UnsupportedLayer);return c()}(e,a),e,a)}function I(e){return"ArcGISFeatureLayer"===e.layerType&&!g(e)&&(e.featureCollection?.layers?.length??0)>1}function g(e){return"Feature Collection"===e.type}function T(e){let a;if("web-scene"===e.origin)switch(e.layerContainerType){case"basemap":a=d;break;case"ground":a=L;break;default:a=u}else switch(e.layerContainerType){case"basemap":a=m;break;case"tables":a=f;break;default:a=p}return a}async function h(e,a,r){const n=new t.Z,i=c(n,Array.isArray(a.layers)?a.layers:[],r),l=await e;if(await i,"group"===l.type)return l.layers.addMany(n),l}},87344:(e,a,r)=>{r.d(a,{T:()=>t});const t={BingMapsLayer:async()=>(await Promise.all([r.e(6968),r.e(2723)]).then(r.bind(r,2723))).default,BuildingSceneLayer:async()=>(await Promise.all([r.e(6968),r.e(9454),r.e(1773),r.e(3471),r.e(1423),r.e(6105),r.e(7832),r.e(8326),r.e(3121),r.e(4133),r.e(2485)]).then(r.bind(r,30223))).default,CSVLayer:async()=>(await Promise.all([r.e(6968),r.e(9454),r.e(1773),r.e(3471),r.e(1423),r.e(6105),r.e(7832),r.e(8326),r.e(3121),r.e(4910)]).then(r.bind(r,45425))).default,ElevationLayer:async()=>(await Promise.all([r.e(1938),r.e(9932)]).then(r.bind(r,49932))).default,FeatureLayer:async()=>(await Promise.all([r.e(6968),r.e(9454),r.e(1773),r.e(3471),r.e(1423),r.e(6105),r.e(7832),r.e(8326),r.e(3121),r.e(4477)]).then(r.bind(r,3121))).default,GroupLayer:async()=>(await Promise.all([r.e(6968),r.e(9348)]).then(r.bind(r,89348))).default,GeoRSSLayer:async()=>(await Promise.all([r.e(6968),r.e(9454),r.e(3723)]).then(r.bind(r,3723))).default,GeoJSONLayer:async()=>(await Promise.all([r.e(6968),r.e(9454),r.e(1773),r.e(3471),r.e(1423),r.e(6105),r.e(7832),r.e(7202)]).then(r.bind(r,23477))).default,ImageryLayer:async()=>(await Promise.all([r.e(6968),r.e(9454),r.e(1773),r.e(3471),r.e(8326),r.e(176),r.e(9147),r.e(7175)]).then(r.bind(r,47175))).default,ImageryTileLayer:async()=>(await Promise.all([r.e(6968),r.e(4547),r.e(9454),r.e(1773),r.e(3471),r.e(1938),r.e(176),r.e(9147),r.e(2398),r.e(9032)]).then(r.bind(r,52294))).default,IntegratedMeshLayer:async()=>(await Promise.all([r.e(4547),r.e(4133),r.e(734)]).then(r.bind(r,9310))).default,KMLLayer:async()=>(await Promise.all([r.e(6968),r.e(9454),r.e(1773),r.e(3471),r.e(1423),r.e(739)]).then(r.bind(r,42756))).default,LineOfSightLayer:async()=>(await Promise.all([r.e(4547),r.e(5743)]).then(r.bind(r,45743))).default,MapImageLayer:async()=>(await Promise.all([r.e(6968),r.e(9454),r.e(1773),r.e(3471),r.e(1423),r.e(7832),r.e(3128),r.e(7374)]).then(r.bind(r,27374))).default,MapNotesLayer:async()=>(await Promise.all([r.e(6968),r.e(4547),r.e(9454),r.e(1773),r.e(3471),r.e(1423),r.e(6105),r.e(7832),r.e(8326),r.e(3121),r.e(3750)]).then(r.bind(r,62128))).default,OGCFeatureLayer:async()=>(await Promise.all([r.e(6968),r.e(9454),r.e(1773),r.e(3471),r.e(1423),r.e(6105),r.e(7832),r.e(2855)]).then(r.bind(r,88068))).default,OpenStreetMapLayer:async()=>(await Promise.all([r.e(6968),r.e(6199),r.e(6237)]).then(r.bind(r,66237))).default,PointCloudLayer:async()=>(await Promise.all([r.e(1773),r.e(4133),r.e(1197)]).then(r.bind(r,10608))).default,RouteLayer:async()=>(await Promise.all([r.e(6968),r.e(4547),r.e(9454),r.e(1773),r.e(3471),r.e(1423),r.e(8157)]).then(r.bind(r,50445))).default,SceneLayer:async()=>(await Promise.all([r.e(6968),r.e(4547),r.e(9454),r.e(1773),r.e(3471),r.e(1423),r.e(6105),r.e(7832),r.e(8326),r.e(3121),r.e(4133),r.e(4417)]).then(r.bind(r,57476))).default,StreamLayer:async()=>(await Promise.all([r.e(6968),r.e(9454),r.e(1773),r.e(3471),r.e(1423),r.e(6105),r.e(1408)]).then(r.bind(r,88387))).default,TileLayer:async()=>(await Promise.all([r.e(6968),r.e(9454),r.e(1773),r.e(3471),r.e(1423),r.e(7832),r.e(1938),r.e(3128),r.e(8636)]).then(r.bind(r,98636))).default,UnknownLayer:async()=>(await r.e(4166).then(r.bind(r,44166))).default,UnsupportedLayer:async()=>(await r.e(9296).then(r.bind(r,39296))).default,VectorTileLayer:async()=>(await Promise.all([r.e(6968),r.e(1938),r.e(4325),r.e(1785),r.e(4109)]).then(r.bind(r,24109))).default,VoxelLayer:async()=>(await Promise.all([r.e(4133),r.e(7304)]).then(r.bind(r,91398))).default,WebTileLayer:async()=>(await Promise.all([r.e(6968),r.e(6199)]).then(r.bind(r,16199))).default,WFSLayer:async()=>(await Promise.all([r.e(6968),r.e(4547),r.e(9454),r.e(1773),r.e(3471),r.e(1423),r.e(6105),r.e(3974)]).then(r.bind(r,12653))).default,WMSLayer:async()=>(await Promise.all([r.e(6968),r.e(9454),r.e(1773),r.e(5906)]).then(r.bind(r,25906))).default,WMTSLayer:async()=>(await Promise.all([r.e(6968),r.e(6199),r.e(5853)]).then(r.bind(r,55853))).default}},33516:(e,a,r)=>{r.d(a,{Y:()=>l,h:()=>i});var t=r(17452),n=r(65587);function i(e){return{origin:"portal-item",url:(0,t.mN)(e.itemUrl),portal:e.portal||n.Z.getDefault(),portalItem:e,readResourcePaths:[]}}function l(e){return{origin:"portal-item",messages:[],writtenProperties:[],url:e.itemUrl?(0,t.mN)(e.itemUrl):null,portal:e.portal||n.Z.getDefault(),portalItem:e}}},18062:(e,a,r)=>{r.r(a),r.d(a,{getFirstLayerOrTableId:()=>p,getNumLayersAndTables:()=>f,load:()=>o,preprocessFSItemData:()=>d});var t=r(20102),n=r(87344),i=r(65587),l=r(33516),s=r(40555),y=r(96187);async function o(e,a){const r=e.instance.portalItem;if(r&&r.id)return await r.load(a),function(e){const a=e.instance.portalItem;if(!e.supportedTypes.includes(a.type))throw new t.Z("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}'",{type:a.type,expectedType:e.supportedTypes.join(", ")})}(e),async function(e,a){const r=e.instance,i=r.portalItem,{url:o,title:u}=i,p=(0,l.h)(i);if("group"===r.type)return r.read({title:u},p),function(e,a){let r;const i=e.portalItem.type;switch(i){case"Feature Service":case"Feature Collection":r=n.T.FeatureLayer;break;case"Stream Service":r=n.T.StreamLayer;break;case"Scene Service":r=n.T.SceneLayer;break;default:throw new t.Z("portal:unsupported-item-type-as-group",`The item type '${i}' is not supported as a 'IGroupLayer'`)}let l;return r().then((e=>(l=e,L(a)))).then((async a=>"Feature Service"===i?(a=await d(a,e.portalItem.url),c(e,l,a)):f(a)>0?c(e,l,a):function(e,a){return e.portalItem.url?(0,y.b)(e.portalItem.url).then((r=>{function t(e){return{id:e.id,name:e.name}}r&&c(e,a,{layers:r.layers?.map(t),tables:r.tables?.map(t)})})):Promise.resolve()}(e,l)))}(r,e);o&&r.read({url:o},p);const m=await L(e,a);return m&&r.read(m,p),r.resourceReferences={portalItem:i,paths:p.readResourcePaths},r.read({title:u},p),(0,s.y)(r,p)}(e,a)}function c(e,a,r){let t=r.layers||[];const n=r.tables||[];"Feature Collection"===e.portalItem.type&&(t.forEach((e=>{"Table"===e?.layerDefinition?.type&&n.push(e)})),t=t.filter((e=>"Table"!==e?.layerDefinition?.type))),t.reverse().forEach((t=>{const n=u(e,a,r,t);e.add(n)})),n.reverse().forEach((t=>{const n=u(e,a,r,t);e.tables.add(n)}))}function u(e,a,r,t){const n=new a({portalItem:e.portalItem.clone(),layerId:t.id,sublayerTitleMode:"service-name"});if("Feature Collection"===e.portalItem.type){const a={origin:"portal-item",portal:e.portalItem.portal||i.Z.getDefault()};n.read(t,a);const l=r.showLegend;null!=l&&n.read({showLegend:l},a)}return n}function L(e,a){if(!1===e.supportsData)return Promise.resolve(void 0);const r=e.instance;return r.portalItem.fetchData("json",a).catch((()=>null)).then((async e=>{if(function(e){return"stream"!==e.type&&"layerId"in e}(r)){let a,t=!0;return e&&f(e)>0&&(null==r.layerId&&(r.layerId=p(e)),a=function(e,a){const r=e.layers;if(r)for(let e=0;e<r.length;e++)if(r[e].id===a)return r[e];const t=e.tables;if(t)for(let e=0;e<t.length;e++)if(t[e].id===a)return t[e];return null}(e,r.layerId),a&&(1===f(e)&&(t=!1),null!=e.showLegend&&(a.showLegend=e.showLegend))),t&&"service-name"!==r.sublayerTitleMode&&(r.sublayerTitleMode="item-title-and-service-name"),a}return e}))}async function d(e,a){if(null==e?.layers||null==e?.tables){const r=await(0,y.b)(a);(e=e||{}).layers=e.layers||r?.layers,e.tables=e.tables||r?.tables}return e}function p(e){const a=e.layers;if(a&&a.length)return a[0].id;const r=e.tables;return r&&r.length?r[0].id:null}function f(e){return(e?.layers?.length??0)+(e?.tables?.length??0)}},14661:(e,a,r)=>{r.d(a,{$o:()=>o,Kz:()=>c,_$:()=>s,ck:()=>y,qj:()=>l});var t=r(44547),n=r(82971),i=r(40488);function l(e,a){if(!s(e,a)){const r=e.typeKeywords;r?r.push(a):e.typeKeywords=[a]}}function s(e,a){return!!e.typeKeywords?.includes(a)}function y(e,a){const r=e.typeKeywords;if(r){const e=r.indexOf(a);e>-1&&r.splice(e,1)}}async function o(e){const a=e.clone().normalize();let r;if(a.length>1)for(const e of a)r?e.width>r.width&&(r=e):r=e;else r=a[0];return async function(e){const a=e.spatialReference;if(a.isWGS84)return e.clone();if(a.isWebMercator)return(0,i.Sx)(e);const r=n.Z.WGS84;return await(0,t.iQ)(a,r),(0,t.iV)(e,r)}(r)}const c={DEVELOPER_BASEMAP:"DeveloperBasemap",JSAPI:"ArcGIS API for JavaScript",METADATA:"Metadata",MULTI_LAYER:"Multilayer",SINGLE_LAYER:"Singlelayer",TABLE:"Table"}},28008:(e,a,r)=>{r.r(a),r.d(a,{fromItem:()=>o,selectLayerClassPath:()=>c});var t=r(20102),n=r(87344),i=r(15235),l=r(18062),s=r(14661),y=r(96187);function o(e){return!e.portalItem||e.portalItem instanceof i.default||(e={...e,portalItem:new i.default(e.portalItem)}),function(e){return e.load().then(c).then(u)}(e.portalItem).then((a=>{const r={portalItem:e.portalItem,...a.properties};return new(0,a.constructor)(r)}))}function c(e){switch(e.type){case"Map Service":return(a=e,(0,y.b)(a.url).then((e=>e.tileInfo))).then((e=>e?{className:"TileLayer"}:{className:"MapImageLayer"}));case"Feature Service":return function(e){return L(e).then((e=>{if("object"==typeof e){const a={};return null!=e.id&&(a.layerId=e.id),{className:"FeatureLayer",properties:a}}return{className:"GroupLayer"}}))}(e);case"Feature Collection":return async function(e){if(await e.load(),(0,s._$)(e,"Map Notes"))return{className:"MapNotesLayer"};if((0,s._$)(e,"Route Layer"))return{className:"RouteLayer"};const a=await e.fetchData();return 1===(0,l.getNumLayersAndTables)(a)?{className:"FeatureLayer"}:{className:"GroupLayer"}}(e);case"Scene Service":return function(e){return L(e).then((a=>{if("object"==typeof a){const r={};let t;if(null!=a.id?(r.layerId=a.id,t=`${e.url}/layers/${a.id}`):t=e.url,Array.isArray(e.typeKeywords)&&e.typeKeywords.length>0){const a={IntegratedMesh:"IntegratedMeshLayer","3DObject":"SceneLayer",Point:"SceneLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"};for(const r of Object.keys(a))if(e.typeKeywords.includes(r))return{className:a[r]}}return(0,y.b)(t).then((e=>{let a="SceneLayer";const t={Point:"SceneLayer","3DObject":"SceneLayer",IntegratedMesh:"IntegratedMeshLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"};return e&&e.layerType&&t[e.layerType]&&(a=t[e.layerType]),{className:a,properties:r}}))}return!1===a?(0,y.b)(e.url).then((e=>"Voxel"===e?.layerType?{className:"VoxelLayer"}:{className:"GroupLayer"})):{className:"GroupLayer"}}))}(e);case"Image Service":return async function(e){await e.load();const a=e.typeKeywords?.map((e=>e.toLowerCase()))??[];if(a.includes("elevation 3d layer"))return{className:"ElevationLayer"};if(a.includes("tiled imagery"))return{className:"ImageryTileLayer"};const r=(await e.fetchData())?.layerType;if("ArcGISTiledImageServiceLayer"===r)return{className:"ImageryTileLayer"};if("ArcGISImageServiceLayer"===r)return{className:"ImageryLayer"};const t=(await(0,y.b)(e.url)).cacheType?.toLowerCase();return"map"===t?{className:"ImageryTileLayer"}:{className:"ImageryLayer"}}(e);case"Stream Service":case"Feed":return{className:"StreamLayer"};case"Vector Tile Service":return{className:"VectorTileLayer"};case"KML":return{className:"KMLLayer"};case"WFS":return{className:"WFSLayer"};case"WMTS":return{className:"WMTSLayer"};case"WMS":return{className:"WMSLayer"};default:return Promise.reject(new t.Z("portal:unknown-item-type","Unknown item type '${type}'",{type:e.type}))}var a}function u(e){return(0,n.T[e.className])().then((a=>({constructor:a,properties:e.properties})))}function L(e){return!e.url||e.url.match(/\/\d+$/)?Promise.resolve({}):e.load().then((()=>e.fetchData())).then((async a=>"Feature Service"===e.type?d(a=await(0,l.preprocessFSItemData)(a,e.url)):(0,l.getNumLayersAndTables)(a)>0?d(a):(0,y.b)(e.url).then(d)))}function d(e){return 1===(0,l.getNumLayersAndTables)(e)&&{id:(0,l.getFirstLayerOrTableId)(e)}}},40555:(e,a,r)=>{r.d(a,{y:()=>l});var t=r(66643),n=r(95330),i=r(20941);async function l(e,a,r){const l=e&&e.getAtOrigin&&e.getAtOrigin("renderer",a.origin);if(l&&"unique-value"===l.type&&l.styleOrigin){const s=await(0,t.q6)(l.populateFromStyle());if((0,n.k_)(r),!1===s.ok){const r=s.error;a&&a.messages&&a.messages.push(new i.Z("renderer:style-reference",`Failed to create unique value renderer from style reference: ${r.message}`,{error:r,context:a})),e.clear("renderer",a.origin)}}}},96187:(e,a,r)=>{r.d(a,{b:()=>n});var t=r(3172);async function n(e){const{data:a}=await(0,t.default)(e,{responseType:"json",query:{f:"json"}});return a}}}]);