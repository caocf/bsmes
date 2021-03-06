Ext.define('bsmes.store.ProcessInOutStore', {
			extend : 'Oit.app.data.GridStore',
			model : 'bsmes.model.ProcessInOut',
			autoLoad : false,
			proxy : {
				type : 'rest',
				url : '../pro/processWip/inOut',
//				api : {
//					create : '../pro/process/inOut/insertProcessInOut',
//					read : '../pro/process/inOut/queryProcessInOutList',
//					update : '../pro/process/inOut/updateProcessInOut',
//					destroy : undefined
//				},
				reader : {
					type : 'json',
					root : 'rows'
				}
			},
			sorters : [{
						property : 'matCode',
						direction : 'ASC'
					}]

		});