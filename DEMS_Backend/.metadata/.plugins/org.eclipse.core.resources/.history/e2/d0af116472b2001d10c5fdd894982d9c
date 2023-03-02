package com.dems.main.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dems.main.exception.DataNotFound;
import com.dems.main.model.Department;
import com.dems.main.repository.DepartmentRepo;

@Service
public class DepartmentService {

    @Autowired
    private DepartmentRepo departmentRepo;

    public List<Department> getAllDepartments(){
        return departmentRepo.findAll();
    }

    public Department getDepartmentById(Integer id){
        return departmentRepo.findById(id)
            .orElseThrow(() -> new DataNotFound("Department number : "+id+" not exists"));
    }

    public Department createDepartment(Department dep){
        return departmentRepo.save(dep);
    }

    public Department updateDepartment(Integer id, Department dep){
        Department department = departmentRepo.findById(id)
            .orElseThrow(() -> new DataNotFound("Department number : "+id+" not exists"));

        department.setDepName(dep.getDepName());
        department.setDepDescription(dep.getDepDescription());
        department.setDepLocation(dep.getDepLocation());
        department.setDepHOD(dep.getDepHOD());
        department.setDepEmpCount(dep.getDepEmpCount());

        return departmentRepo.save(department);
    }

    public void deleteDepartment(Integer id){
        Department department = departmentRepo.findById(id)
            .orElseThrow(() -> new DataNotFound("Department number : "+id+" not exists"));

        departmentRepo.delete(department);
    }
}
