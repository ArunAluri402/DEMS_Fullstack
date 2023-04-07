package com.dems.main.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dems.main.exception.DataNotFound;
import com.dems.main.model.Department;
import com.dems.main.model.Employee;
import com.dems.main.repository.EmployeeRepo;
@Service
public class EmployeeService {
	
	@Autowired
	private EmployeeRepo emprepo;
	
	public List<Employee> getAllEmp(){
		return emprepo.findAll();
	}
	
	public Employee getEmpbyId(Integer id) { 
		return emprepo.findById(id).orElseThrow(()->new DataNotFound("Employee with id = " +id+ " is not found"));
	}

	public Employee createEmp(Employee emp) {
	
		return emprepo.save(emp);
	}
	

    public void deleteEmp(Integer id){
        Employee emp = emprepo.findById(id)
            .orElseThrow(() -> new DataNotFound("Employee with : "+id+" not exists"));

        emprepo.delete(emp);
    }

    public Employee updateEmp(Integer id, Employee emp){
        Employee employee = emprepo.findById(id)
            .orElseThrow(() -> new DataNotFound("Employee with : "+id+" not exists"));
        
        employee.setEmpName(emp.getEmpName());
        employee.setEmpEmail(emp.getEmpEmail());
        employee.setEmpDOB(emp.getEmpDOB());
        employee.setEmpDOH(emp.getEmpDOH());
        employee.setEmpAddress(emp.getEmpAddress());
        employee.setEmpJD(emp.getEmpJD());
        employee.setEmpPhone(emp.getEmpPhone());
        employee.setEmpPosition(emp.getEmpPosition());
        employee.setEmpSalary(emp.getEmpSalary());
        employee.setDep(emp.getDep());
            

      
       
        return emprepo.save(employee);
    }
	

}
