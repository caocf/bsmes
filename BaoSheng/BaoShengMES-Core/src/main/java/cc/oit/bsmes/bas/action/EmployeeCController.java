package cc.oit.bsmes.bas.action;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
@RequestMapping("/bas/employeeC")
public class EmployeeCController {

	@RequestMapping(produces = "text/html")
	public String index(Model model) {
		model.addAttribute("moduleName", "bas");
		model.addAttribute("submoduleName", "employeeC");
		return "bas.employeeC";
	}

}
