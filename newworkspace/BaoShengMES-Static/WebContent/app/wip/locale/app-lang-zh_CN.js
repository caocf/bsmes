Ext.define('Oit.app.locale.Message', {
			override : 'Oit.locale.Message',
			statics : {
				creator : '创建者',
				createTime : '创建时间',
				updator : '更新者',
				updateTime : '更新时间',
				wip : {
					title : {
						valid : '身 份 验 证',
						success : '成功',
						fail : '失败'
					},
					alarmHistory : {
						title : '工艺报警信息'
					},
					processBalanceChart : {
						productName : '产品',
						startTime : '完工时间从',
						endTime : '到',
						resert : '重置'
					},
					cycleStepChart : {
						productName : '产品',
						startTime : '完工时间从',
						endTime : '到',
						resert : '重置',
						equipCode : '设备名称',
						processCode : '工序'
					},
					workOrder : {
						workOrderNO : '生产单号',
						oaDate : '订单最迟完工日期',
						latestStartDate : 'OA开始时间',
						latestFinishDate : 'OA结束时间',
						processName : '工序',
						orgName : '单位',
						customerContractNO : '客户合同号',
						halfProductCode : '半成品编号',
						productSpec : '产品规格',
						productType : '产品型号',
						color : '半成品颜色',
						preStartTime : '计划开始日期',
						preEndTime : '计划结束日期',
						realStartTime : '实际开始时间',
						realEndTime : '实际完成时间',
						shift : '班次',
						preStartTimeFrom : '预计开始日期  从',
						preStartTimeTo : '到',
						equipName : '机台',
						dbUserName : '挡班',
						fdbUserName : '副挡班',
						fzgUserName : '辅助工',
						fixedEquipName : '调整机台',
						status : '生产状态',
						reportNum : '报工长度',
						serialNum : '条码',
						reportUserCode : '报工员工',
						reportTime : '报工时间',
						statusName : {
							all : '全部',
							toAudit : '待下发',
							toDo : '已下发',
							inProgress : '生产中',
							canceled : '已取消',
							finished : '已完成',
							pause : '已暂停'
						},
						orderLength : '总任务数',
						cancelLength : '取消数量',
						auditTime : '下发日期',
						color : '颜色',
						percent : '完成进度',
						reqTec : '技术要求',
						remarks : '备注',
						matName : '物料名称',
						matCode : '物料编号',
						quantity : '数量',
						unit : '单位',
						tools : '工具代码',
						disorder : '未排序生产单',
						selectedOrder : '已排序生产单',
						addForm : {
							title : '新增生产单'
						},
						userCode : '工    号',
						password : '密    码',
						reasonDesc : '原因说明',
						operator : '销售员',
						msg : {
							success : '操作成功!',
							auditError : '已经下发通过不需要再下发!',
							cancelError : '正在生产无法取消!',
							adjustCount : '请选择两条记录进行调整!',
							adjustStatusError : '请选择待下发状态记录!',
							canNotUp : "无法再向上调整!",
							canNotDown : "无法再向下调整!",
							userValidFalse : "无法通过权限验证!",
							successCalculate : '后台已经开始计算，请等待查询结果!',
							failureCalculate : '后台有相同的任务正在执行，请耐心等待!'
						}
					},
					receipt : {
						workOrderNo : '生产单',
						productCode : '产品',
						equipCode : '设备',
						type : '参数类型',
						receiptCode : '工艺参数代码',
						receiptName : '工艺参数名称',
						receiptTargetValue : '参数设定值',
						receiptMaxValue : '参数上限',
						receiptMinValue : '参数下限',
						createUserCode : '操作人',
						issuedTime : '下发时间',
						processReceipt : '工艺参数',
						qaReceipt : '质量参数',
						all : '所有'
					},
					turnoverReport : {
						equipCode : '设备号',
						shiftName : '班次',
						shiftDate : '班次日期',
						processName : '工序名称',
						processCode : '工序代号'
					},
					workOrderReport : {
						js : '挤塑生产记录',
						hhpt : '火花配套生产记录',
						bzpb : '编织屏蔽生产记录',
						clpb : '成缆屏蔽生产记录'
					},
					weight : {
						matCode : '物料编号',
						workOrderNO : '生产单号',
						userCode : "工人工号",
						weight : "重量"
					},
					terminal : {
						btn : {
							back : '返回',
							debug : '调试',
							report : '报工',
							change : '查看生产单',
							shiftRecord : '交班报表',
							turnOverMatreial : '交料',
							emphInfoShow : '基本信息',
							toDayMatPlan : '物料计划',
							receive : '接受',
							sign : '刷卡',
							product : '加工',
							detail : '详情',
							save : '保存并打印',
							dailyMaintain : '点检',
							issuedParam : '下发参数',
							QADataEntry : '质量数据录入',
							reportDetail : '报工信息',
							triggerAlarm : '触发警报',
							handleAlarm : '处理警报',
							print : '打印',
							finishWorkOrder : '完成生产单',
							querySpark : '查看火花点',
							printer: '喷码'
						},
						error : {
							report : '数据填写有误！请更正后再试！',
							userCodeIsNotNull : '工号不能为空',
							EmployeeCreditCardUserCodeNotFound : '员工号不存在',
							reportLengthErrorMsg : "可报工长度小于当前填写的报工长度，请确认!",
							reportLengthIsSoMin : '报工长度填写有误请确认!',
							unFinishWorkOrder : '生产单未生产完成，不能结束生产单!',
							remainQLengthIsZero : '当前生产单已完成,请结束生产单!'
						},
						msg : {
							needInCheckMsg : '该产品需要上车检!',
							needMiddleCheckMsg : '产品需要中检，请检查!',
							productIntercept : '在制品被拦截，不允许生产!',
							selectOnReport : '请选择一条报工记录!',
							needOutCheck : '请做下车检!',
							receiveOK : '接受成功',
							noIdleLocation : '无空闲的库位,请联系管理员添加!'
						},
						finishWork : '生产长度已足够，是否要完成当前订单?',
						orderInfoTitle : '当前生产单',
						orderDetailTitle : '订单详细信息',
						workOrderNo : '生产单号',
						discNo : '线盘号',
						feed : '投料',
						materialTitle : '物料需求表',
						receiptTitle : '操作参数',
						qcTitle : '生产要求',
						code : '编号',
						pic : '图片',
						location : '位置',
						productType : '产品型号',
						productSpec : '产品规格',
						wiresStructure : '线芯结构',
						productCode : '产出代码',
						deliverLength : '交付长度',
						outProductColor : '产品颜色',
						processCode : '工序名称',
						name : '名称',
						matSpec : '规格',
						batchNo : '批次号',
						matInTime : '投入时间',
						planAmount : '计划用量',
						quotaAmount : '定额用量',
						realAmount : '实际用量',
						matColor : '颜色',
						unit : '单位',
						valueRange : '要求范围',
						targetValue : '要求值',
						setValue : '设定值',
						receiptMaxValue : '最大值',
						receiptMinValue : '最小值',
						daValue : '当前值',
						acquistionValue : '采集值',
						receive : '质量控制',
						status : '生产状态',
						noEquipment : '无设备',
						toDoTaskNum : '待生产任务数',
						workOrderNo : '当前任务',
						currentTask : '当前任务',
						planLength : '计划长度',
						productLength : '投产长度',
						currentDiscQLength : '当前盘合格长度',
						productColor : '产品颜色',
						discQLength : '合格长度',
						currentDiscLength : '当前生产长度',
						discLength : '生产长度',
						wasteLength : '浪费长度',
						sn : '序号',
						sectionType : '分段原因',
						remainQLength : '剩余长度',
						userCode : '工号',
						cardType : '刷卡类型',
						equipCode : "设备",
						contractNo : '合同号',
						qaDataInput : 'QA数据录入',
						orderLength : '合同长度',
						eventTitle : '事件标题',
						eventContent : '事件内容',
						eventName : '事件名称',
						createTime : '发生时间',
						eventStatus : '事件状态',
						debugInfo : {
							debugType : '调试原因',
							color : '换颜色',
							head : '换机头',
							msg : {
								success : '操作成功!',
								error : '操作失败',
								loading : '正在处理...'
							}
						},
						check : {
							isPassed : '是否通过检查',
							recordId : '点检表',
							value : '测量值',
							remarks : '备注',
							describe : '项目说明',
							itemId : '点检项目',
							complete : '完成'
						}
					},
					equipProcessTrace : {
						equipCode : '设备号',
						equipName : '设备名称',
						contractNo : '合同号',
						workOrderNo : '订单号',
						processCode : '工序代代码',
						processName : '工序名称',
						realStartTime : '开始时间',
						realEndTime : '结束时间',
						userCode : '操作工',
						orderLength : '加工数量',
						usedTime : '加工时长'
					},
					userProcessTrace : {
						equipCode : '设备号',
						reportUserCode : '工号',
						reportUserName : '姓名',
						contractNo : '合同号',
						workOrderNo : '生产单号',
						realStartTime : '开始时间',
						realEndTime : '结束时间',
						orderLength : '加工数量',
						usedTime : '加工时长',
						userCode : '工号姓名',
						productCode : '产品代码'
					},

					qualityTrace : {
						workOrderNo : '生产单号',
						contractNo : '合同号',
						productBatch : '产品批号',
						productCode : '产品代码',
						processCode : '工序代码',
						custProductTypeSpec : '客户型号规格',
						custProductType : '客户型号',
						custProductSpec : '客户规格',
						checkItemCode : '质检项目',
						eqipCode : '生产线',
						startTime : '起始时间',
						endTime : '结束时间',
						type : '检测类型',
						firstCheck : '首检',
						middleCheck : '中检',
						inCheck : '上车检',
						outCheck : '下车检',
						qcValue : '检测值',
						checkEqipCode : '检测设备',
						qcResult : '结论',
						userName : '质检员',
						createTime : '质检时间',
						all : '所有',
						processName : '工序名称'
					},
					rawMaterialInvTrans : {
						materialCode : '原材料号',
						materialName : '名称',
						barCode : '批号',
						createTime : '入库时间',
						locationName : '目的库位',
						quantity : '数量',
						beforeQuantity : '期初数量',
						transactionQuantity : '交易量',
						afterQuantity : '期末数量',
						transactionType : '交易类型',
						transactionTime : '交易时间',
						operator : '操作人'
					},
					btn : {
						audit : '下发生产单',
						cancel : '任务取消',
						setPriority : '调整加工顺序',
						printOrder : '打印任务单',
						resourceGantt : '资源甘特图',
						logisticalRequest : '后勤需求',
						move : '上移',
						down : '下移',
						top : '置顶',
						end : '置底',
						right : '右移',
						left : '左移',
						recalculate : '重新计算',
						setFixedEquipCode : "调整机台",
						skip : '跳 过',
						pause : '暂 停'
					},
					productStatusTrace : {
						contractNo : '合同号',
						workOrderNo : '生产单号',
						halfProductCode : '半成品',
						batchNo : '物料批次号',
						matCode : '物料号',
						status : '状态',
						processCode : '工序编号',
						processName : '工序名称',
						equipCode : '设备编号',
						reportUserCode : '操作工工号',
						realStartTime : '开始时间',
						orderlength : '计划加工长度',
						completedLength : '完成长度',
						color : '半成品颜色',
						specification : '半成品规格'
					},
					productProcessTrace : {
						contractNo : '合同号',
						workOrderNo : '生产单',
						batchNo : '批号',
						matCode : '物料号',
						productType : '产品类型',
						productSpec : '产品规格',
						processCode : '工序代码',
						processName : '工序名称',
						equipCode : '加工设备',
						reportUserCode : '操作工',
						realStartTime : '开始时间',
						completedLength : '加工长度',
						processingTime : '加工时长(分钟)'
					},
					eventTrace : {
						code : '事件类型',
						allType : '所有类型',
						eventContent : '事件描述',
						eventReason : '事件原因',
						eventResult : '事件结果',
						batchNo : '批号',
						processCode : '工序代码',
						processName : '工序名称',
						equipCode : '加工设备',
						createUserCode : '操作工',
						createTime : '时间',
						endTime : '结束时间',
						startTime : '开始时间',
						triggerTime : '触发时间',
						respondedTime: '响应时间',
						completedTime: '完成时间',
						processTime: '处理时长',
						triggerUser: '触发人',
						processUser: '处理人'
					},
					materialTrace : {
						matCode : '原材料号',
						batchNo : '原材批号',
						productBatches : '产品批号',
						equipCode : '消耗机台',
						operator : '操作人',
						realStartTime : '消耗时间',
						quantity : '消耗数量',
						workOrderNo : '生产单号'
					},
					processReceiptTrace : {
						processCode : '工序代码',
						processReceipt : '工艺参数',
						craftsCode : '工艺代码',
						equipCode : '设备号',
						productCode : '生产产品',
						status : '设备状态',
						startTime : '开始时间',
						endTime : '结束时间',
						processQcTrace : '质量检测参数',
						xFieldTitle : '日期'
					},
					dataCollection : {
						checkItemCode : '采集参数',
						checkItemRange : '参数范围',
						itemTargetValue : '参数目标值',
						qcValue : '检测值',
						qcResult : '检测结论',
						dataUnit : '单位',
						pass : '通过',
						noPass : '不通过',
						// checkEquipCode:'数据检测设备',
						winTitle : '产品QA检测数据录入'
					},
					equipWorkingInfo : {
						equipRealTimeInfo : '设备实时加工信息'
					},
					statusChart : {
						equipCode : '设备代码',
						equipName : '设备名称',
						searchTime : '查询日期',
						startTime : '开始时间',
						endTime : '结束时间',
						processTime : '工作时间(小时)',
						equipEffectiveUse : '设备有效利用率',
						processDate : '加工日期:',
						processTimes : '加工时间(小时):',
						idleDate : '空闲日期：',
						idleTimes : '空闲时间(小时)：',
						closedDate : '关机日期：',
						closedTimes : '关机时间(小时)：',
						errorDate : '故障日期：',
						errorTimes : '故障时间(小时)：',
						debugDate : '调试日期：',
						debugTimes : '调试时间(小时)：',
						maintDate : '维修日期：',
						maintTimes : '维修时间(小时)：',
						all : '空闲/关机/故障/调试/加工(小时)',
						status : {
							process : '加工',
							debug : '调试',
							idle : '空闲',
							closed : '关机',
							error : '故障',
							debug : '调试',
							maint : '维修'
						}
					},
					realTimeEquipmentStatus : {
						equipCurrentStatus : '设备状态',
						equipStatusMointorHistory : '设备状态监控历史',
						search : '查询',
						timeDiagram : '加工时间统计',
						effectiveProcessTime : '设备有效加工时间',
						oEETradeAnalysis : '加工时间分析',
						equipCraftsMonitor : '设备工艺参数监控',
						equipCode : '设备代码',
						equipName : '设备名称',
						startTime : '开始时间',
						endTime : '结束时间',
						processTime : '工作时间(小时)',
						equipEffectiveUse : '设备有效利用率',
						processDate : '加工日期:',
						processTimes : '加工时间(小时):',
						idleDate : '待机日期：',
						idleTimes : '待机时间(小时)：',
						closedDate : '关机日期：',
						closedTimes : '关机时间(小时)：',
						errorDate : '故障日期：',
						errorTimes : '故障时间(小时)：',
						debugDate : '调试日期：',
						debugTimes : '调试时间(小时)：',
						maintDate : '维修日期：',
						maintTimes : '维修时间(小时)：',
						all : '待机/关机/故障/调试/加工(小时)',
						searchTime : '查询日期',
						resert : '重置',
						status : {
							process : '加工',
							debug : '调试',
							idle : '待机',
							closed : '关机',
							error : '故障',
							debug : '调试',
							maint : '保养'
						}
					},
					processTraceReport : {
						contractNo : '合同号',
						productCode : '产品代码',
						processCode : '工序',
						equipCode : '加工设备',
						realStartTime : '加工开始时间',
						realEndTime : '加工结束时间',
						reportUserCode : '操作工',
						orderlength : '计划加工长度'
					},
					sparkRepair : {
						contractNo : '合同号',
						workOrderNo : '生产单号',
						productCode : '产品代码',
						sparkPosition : '火花位置',
						repairType : '修复方式',
						createTime : '发生时间',
						status : '修复状态',
						equipCode : '设备代号'
					}

				},
				pla : {
					product : {
						readForm : {
							title : "查看信息"
						},
						editForm : {
							title : '修改产品'
						},
						contractNo : '合同号',
						customerCompany : '客户单位',
						orderLength : '合同长度',
						productCode : '产品代码',
						productName : '产品名称',
						productType : '产品型号',
						productSpec : '产品规格',
						standardLength : '标准长度',
						usedStock : '是否允许冲抵',
						craftsCode : '默认工艺代码',
						craftsVersion : '工艺版本号',
						complex : '是否复杂产品'
					}
				},
				pro : {
					crafts : {
						process : {
							title : '产品工艺流程'
						}
					}
				}
			}
		});