package com.dems.main.controller;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.dems.main.model.Department;
import com.dems.main.model.Employee;
import com.dems.main.service.DepartmentService;
import com.dems.main.service.EmployeeService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class DEMSController {

    @Autowired
    private DepartmentService departmentService;


	@Autowired
	private EmployeeService empservice;
	
	@GetMapping("/getEmpAll")
	public List<Employee> getAllEmp(){
    	return empservice.getAllEmp();
	}
	
	@PostMapping("/AddEmp")
	public Employee createEmployee(@RequestBody Employee emp) {
		return empservice.createEmp(emp);
	}
	
	 
	  
	@GetMapping("/emp/{id}")
	public ResponseEntity<Employee> getEmpbyId(@PathVariable Integer id){
		Employee emp = empservice.getEmpbyId(id);
		return ResponseEntity.ok(emp);
		
	}
	
	  @PutMapping("/updateEmp/{id}")
	    public ResponseEntity<Employee> updateEmp(@PathVariable Integer id ,@RequestBody Employee emp){
	    	
			Employee employee = empservice.updateEmp(id, emp);
			return ResponseEntity.ok(employee);
			
		}
	
	 @DeleteMapping("/delEmp/{id}")
		public ResponseEntity<Map<String, Boolean>> deleteEmp(@PathVariable Integer id){
	    	empservice.deleteEmp(id);
			Map<String, Boolean> response = new HashMap<>();
			response.put("deleted", Boolean.TRUE);
			return ResponseEntity.ok(response);
		}
	
	// Department Mapping
    
    @GetMapping("/GetAllDep")
    public List<Department> getAllDepartments(){
    	return departmentService.getAllDepartments();
    }
    
    @GetMapping("/dep/{id}")
    public ResponseEntity<Department> getDepbyId(@PathVariable Integer id) {
    	Department dep = departmentService.getDepartmentById(id);
    	return ResponseEntity.ok(dep);
    }
    
    @PostMapping("/AddDep")
    public Department create(@RequestBody Department dep) {
        return departmentService.createDepartment(dep);
    }
    
    @PutMapping("/update/{id}")
    public ResponseEntity<Department> updateDep(@PathVariable Integer id ,@RequestBody Department dep){
    	
		Department department = departmentService.updateDepartment(id, dep);
		return ResponseEntity.ok(department);
		
	}
    
    @DeleteMapping("/del/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteDep(@PathVariable Integer id){
    	departmentService.deleteDepartment(id);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
}
