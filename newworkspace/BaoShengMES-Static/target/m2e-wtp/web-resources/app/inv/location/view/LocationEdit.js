Ext.define('bsmes.view.LocationEdit', {
	extend: 'Oit.app.view.form.EditForm',
	alias: 'widget.locationedit',
	title: Oit.msg.inv.location.editForm.title,
	iconCls: 'feed-add',
	width:'70%',
	width:'50%',
	formItems: [{
		 fieldLabel: Oit.msg.inv.location.warehouseName,
		 xtype:'displayfield',
	     name: 'warehouseName'
	},{
		 fieldLabel: Oit.msg.inv.location.processCode,
	     name: 'processCode',
	     xtype : 'combobox',
	     displayField : 'name',
		 valueField : 'code',
		 allowBlank: false,
		 queryMode: 'remote',
		 store : new Ext.data.Store({
			fields : [ 'name', 'code'],
			autoLoad:true,
			proxy : {
				type : 'rest',
				url : '../pro/processInfo/getAllProcess'
			}
		})
	},{
        fieldLabel:Oit.msg.inv.location.locationName,
        name: 'locationName'
    },{
    	fieldLabel:Oit.msg.inv.location.locationX,
    	allowBlank: false,
        name: 'locationX'
    },{
    	fieldLabel:Oit.msg.inv.location.locationY,
    	allowBlank: false,
        name: 'locationY'
    }
//    ,{
//    	fieldLabel:Oit.msg.inv.location.locationZ,
//        name: 'locationZ'
//    }
//    ,{
//    	fieldLabel:Oit.msg.inv.location.type,
//        name: 'type',
//        xtype : 'combobox',
//        displayField: 'name',
//	    valueField: 'code',
//	    editable:false,
//	    store:new Ext.data.Store({
//		    fields:['code', 'name'],
//		    data : [
//		        {"name":'临时库位', "code":"TEMP"},
//		        {"name":'一般库位', "code":"FIX"}
//	        ]
//		})
//    }
    ] 
});