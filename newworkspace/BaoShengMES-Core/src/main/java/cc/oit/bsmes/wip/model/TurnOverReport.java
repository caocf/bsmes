package cc.oit.bsmes.wip.model;

import cc.oit.bsmes.common.model.Base;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

import javax.persistence.Table;
import javax.persistence.Transient;
import java.util.Date;


@Data
@EqualsAndHashCode(callSuper = false)
@ToString(callSuper = true)
@Table(name = "T_WIP_TURNOVER_REPORT")
public class TurnOverReport extends Base{

	private static final long serialVersionUID = 7156931186834695628L;

	private String equipCode;
	private String shiftName;
	private String dbUserCode;
	private String dbUserName;
	private String fdbUserCode;
	private String fdbUserName;
	private String fzgUserCode;
	private String fzgUserName;
	private String workOrderNo;
	private String custProductType;
	private String custProductSpec;
	private Double workOrderLength;
	private Double reportLength;
	private String contractNo;
    private Date turnoverDate;
    private Date shiftDate;
    private String processCode;
    private String processName;
    @Transient
    private String equipName;
    @Transient
    private String matCode;
    @Transient
    private String matName;
    @Transient
    private String quotaQuantity;
    
    @Transient
    private String productOutput;
    
    
}