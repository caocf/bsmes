Ext.define('bsmes.model.HandSchedule', {
			extend : 'Ext.data.Model',
			fields : ['ID', 'OPERATOR', 'CUSTOMERCOMPANY', 'PRODUCTCODE', 'YUNMU', 'YMCOUNT', {
						name : 'ORDERLENGTH',
						type : 'double'
					}, 'CONTRACTNO', 'CRAFTSID', 'PARENTCRAFTSID', 'CRAFTSCNAME', 'CRAFTSCODE', {
						name : 'CONTRACTLENGTH',
						type : 'double'
					}, 'PLANSTARTDATE', 'PLANFINISHDATE', 'PRODUCTTYPE', 'OADATE', 'CUSTOMEROADATE', 'RELEASEDATE', 'PRODUCTSPEC', 'CUSTPRODUCTSPEC',
					'CUSTPRODUCTTYPE', 'WIRESSTRUCTURE', 'SALESORDERITEMID', {
						name : 'STANDARDLENGTH',
						type : 'double'
					}, {
						name : 'HASYUNMU',
						type : 'double'
					}, 'ROWINDEX', 'CONDUCTORSTRUCT', 'SENDDOWNPERCENT', 'PROCESSREQUIRE', 'REMARKS', 'STATUS',
					'NUMBEROFWIRES', 'ERPBM', 'ORDERFILENUM','TECHNIQUENUM', 'SPLITLENGTHROLE', 'SPECIALFLAG', 'SPECIALOPERATETIME', 'FINISHJY', 'CONTRACTAMOUNT','REMINDTIME','TIMECOUNT']
		});