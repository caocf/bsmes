package cc.oit.bsmes.interfaceWebClient.service;

import java.util.List;

import cc.oit.bsmes.common.service.BaseService;
import cc.oit.bsmes.interfaceWebClient.model.ProQualitySum;

/**
 *  
 * <p style="display:none">modifyRecord</p>
 * @author zhangdongping
 * @date 2015-5-19 下午1:04:50
 * @since
 * @version
 */
public interface ProQualitySumService extends BaseService<ProQualitySum>{
	
	/**
	 * <p>各工序问题发生次数</p> 
	 * @author zhangdongping
	 * @date 2015-5-20 下午4:05:36
	 * @param parm
	 * @return
	 * @see
	 */
	public List<ProQualitySum> getProProQualitySum(ProQualitySum parm) ;
	
	/**
	 * <p>查询前N大质量问题</p> 
	 * @author zhangdongping
	 * @date 2015-5-20 下午4:05:36
	 * @param parm
	 * @return
	 * @see
	 */
	public List<ProQualitySum> getTopProProQuality(ProQualitySum parm) ;
	
}
