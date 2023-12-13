// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/on dojo/Evented dojo/dom-construct dojo/query dijit/form/TextBox dijit/_TemplatedMixin dijit/registry jimu/BaseWidgetSetting jimu/dijit/SimpleTable jimu/dijit/Popup ./LookupList".split(" "),function(l,d,f,m,n,p,h,q,r,t,u,v,k,w){return l([u,r,n],{baseClass:"jimu-widget-setting-fields-critical-facilities",templateString:'\x3cdiv\x3e\x3cdiv data-dojo-attach-point\x3d"fieldsTable"\x3e\x3c/div\x3e\x3c/div\x3e',_layerInfo:null,isRecognizedValues:null,
type:"",addressFields:null,postCreate:function(){this.inherited(arguments);this.nls=d.mixin(this.nls,window.jimuNls.common);this._initFieldsTable();"fieldInfos"===this.type?(this.popupTitle=this.nls.configureFields,this._setFieldsTable(this._layerInfo.fieldInfos)):this._setAddressFieldsTable(this.addressFields)},popupEditPage:function(){var a=new k({titleLabel:this.popupTitle,width:this.disableDuplicateOption?640:800,maxHeight:600,autoHeight:!0,content:this,buttons:[{label:this.nls.ok,onClick:d.hitch(this,
function(){this._resetFieldInfos();a.close();this.emit("edit-fields-popup-ok")})},{label:this.nls.cancel,classNames:["jimu-btn-vacation"],onClick:d.hitch(this,function(){a.close();this.emit("edit-fields-popup-cancel")})}],onClose:d.hitch(this,function(){this.emit("edit-fields-popup-close")})})},_initFieldsTable:function(){var a=[{name:"visible",title:this.nls.display,type:"checkbox","class":"display",width:"100px",hidden:"undefined"===typeof this.disableDisplayOption?!1:this.disableDisplayOption,
onChange:d.hitch(this,this._visibleChange)},{name:"fieldName",title:this.nls.name,type:"text",width:"190px"},{name:"label",title:this.nls.editpageAlias,type:"extension",hidden:!1,width:"190px",create:d.hitch(this,this._createTextBox),setValue:d.hitch(this,this._setTextValue),getValue:d.hitch(this,this._getTextValue)},{name:"actions",title:this.nls.actions,type:"actions",actions:["up","down","edit"],"class":"actions",width:"90px"},{name:"duplicate",title:this.nls.duplicate,type:"checkbox","class":"display",
width:"170px",hidden:"undefined"===typeof this.disableDuplicateOption?!1:this.disableDuplicateOption},{name:"type",title:"",type:"text",editable:!0,hidden:!0},{name:"isRecognizedValues",title:"",type:"extension",hidden:!0,create:d.hitch(this,this._create),setValue:d.hitch(this,this._setValue),getValue:d.hitch(this,this._getValue)}];this._fieldsTable=new v({fields:a,selectable:!1,autoHeight:!0,style:{height:"300px",maxHeight:"300px"}});this._fieldsTable.placeAt(this.fieldsTable);this._fieldsTable.startup();
this.own(m(this._fieldsTable,"actions-edit",d.hitch(this,this._onEditFieldsClick)))},_visibleChange:function(a,b){(a=this._getCheckboxByClassName(".duplicate",a))&&a.setStatus(b.getValue())},_createTextBox:function(a){var b=new q({style:{height:"85%",width:"100%","margin-top":"-4px"}});a.labelBox=b;p.place(b.domNode,a)},_setTextValue:function(a,b){a.labelBox.set("value",b)},_getTextValue:function(a){return a.labelBox.get("value")},_setValue:function(a,b){a._isRecognizedValues=b},_getValue:function(a){return a._isRecognizedValues},
_setFieldsTable:function(a){var b=["esriFieldTypeOID","esriFieldTypeGlobalID"];f.forEach(a,function(c){if(c.type&&-1===b.indexOf(c.type)){var e=[c.fieldName];c.fieldName!==c.label&&e.push(c.label);(c=this._fieldsTable.addRow({fieldName:c.fieldName,label:c.label,visible:c.visible,type:c.type,duplicate:c.duplicate,isRecognizedValues:c.isRecognizedValues||e}))&&c.tr&&(e=this._getCheckboxByClassName(".visible",c.tr))&&this._visibleChange(c.tr,e)}},this)},_getCheckboxByClassName:function(a,b){if((a=h(a,
b))&&a.hasOwnProperty("length")&&0<a.length)return t.byNode(h(".jimu-checkbox",a[0])[0])},_setAddressFieldsTable:function(a){f.forEach(a,function(b){var c=navigator.language.toLowerCase();if(b.hasOwnProperty("fieldName")&&b.hasOwnProperty("isRecognizedValues"))b=this._fieldsTable.addRow(b);else{var e=b.localizedNames&&b.hasOwnProperty(c);b=this._fieldsTable.addRow({fieldName:e?b.localizedNames[c]:b.name,label:e?b.localizedNames[c]:b.alias,visible:b.hasOwnProperty("visible")?b.visible:!1,type:"STRING",
duplicate:b.hasOwnProperty("duplicate")?b.duplicate:!0,isRecognizedValues:this._getIsRecognizedValues(b)})}b&&b.tr&&(c=this._getCheckboxByClassName(".visible",b.tr))&&this._visibleChange(b.tr,c)},this)},_getIsRecognizedValues:function(a){var b=navigator.language.toLowerCase(),c=a.recognizedNames&&a.recognizedNames.hasOwnProperty(b),e=a.isRecognizedValues;return e?e:c?a.recognizedNames[b]:[a.name]},_onIsRecognizedListChanged:function(a){var b=this._fieldsTable.getRowData(a);b.isRecognizedValues=this.isRecognizedValues;
this._fieldsTable.editRow(a,b)},_resetFieldInfos:function(){var a=[],b=this._fieldsTable.getData();f.forEach(b,function(c){a.push({fieldName:c.fieldName,label:""!==c.label?c.label:c.fieldName,visible:c.visible,type:c.type,duplicate:c.duplicate,isRecognizedValues:c.isRecognizedValues})});"fieldInfos"===this.type?this._layerInfo.fieldInfos=a:this.fieldInfos=a},_onEditFieldsClick:function(a){var b=this._fieldsTable.getRowData(a);a=new w({nls:this.nls,row:a,rowData:b});var c=new k({width:400,autoHeight:!0,
content:a,titleLabel:this.nls.lookupList+": "+b.fieldName,buttons:[{label:this.nls.ok,onClick:d.hitch(this,function(){var e=c.content.sourceList.getData();this.isRecognizedValues=[];f.forEach(e,d.hitch(this,function(g){-1===this.isRecognizedValues.indexOf(g.name)&&g.name!==this.nls.newNamePlaceholder&&this.isRecognizedValues.push(g.name)}));this._onIsRecognizedListChanged(c.content.row);c.close()})},{label:this.nls.cancel,classNames:["jimu-btn-vacation"],onClick:d.hitch(this,function(){c.close()})}],
onClose:d.hitch(this,function(){})})}})});