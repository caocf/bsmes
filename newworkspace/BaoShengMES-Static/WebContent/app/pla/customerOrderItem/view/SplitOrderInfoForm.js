Ext.define('bsmes.view.SplitOrderInfoForm',{
   extend:'Ext.form.Panel',
   width:'100%',
   layout:'column',
   defaults:{
        width:300,
        padding:1,
        labelAlign:'left'
   },
   items: [{
                xtype:'displayfield',
                fieldLabel: Oit.msg.pla.customerOrderItem.customerCompany,
                name:'customerCompany'},
            {
                xtype:'displayfield',
                fieldLabel: Oit.msg.pla.customerOrderItem.productType,
                name:'salesOrderItem.productType'},
            {
                xtype: 'displayfield',
                fieldLabel: Oit.msg.pla.customerOrderItem.contractNo,
                name:'contractNo'},
            {
                xtype: 'displayfield',
                fieldLabel: Oit.msg.pla.customerOrderItem.productSpec,
                name:'salesOrderItem.productSpec'},
            {
                xtype:'displayfield',
                fieldLabel: Oit.msg.pla.customerOrderItem.orderTotalLength,
                name:'orderLength'},
            {
                xtype:'displayfield',
                fieldLabel:Oit.msg.pla.customerOrderItem.standardLength,
                name:'salesOrderItem.standardLength'},
            {
               xtype:'displayfield',
               fieldLabel:Oit.msg.pla.customerOrderItem.minLength,
               name:'salesOrderItem.idealMinLength'
            }]
});