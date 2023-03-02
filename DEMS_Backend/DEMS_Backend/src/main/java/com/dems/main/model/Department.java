package com.dems.main.model;

import java.util.List;


import javax.persistence.*;


@Entity
@Table(name = "department",uniqueConstraints = {@UniqueConstraint(columnNames = {"dep_description"})})
public class Department {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	

	 @OneToMany(mappedBy = "dep", cascade = CascadeType.ALL)
	    private List<Employee> employee;
	
	@Column(name = "dep_name")
	private String depName;

	@Column(name = "dep_description")
	private String depDescription;
	
	@Column(name = "dep_location")
	private String depLocation;
	
	@Column(name="dep_hod")
	private String depHOD;
	
	@Column(name="dep_empcount")
	private int depEmpCount;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getDepName() {
		return depName;
	}

	public void setDepName(String depName) {
		this.depName = depName;
	}

	public String getDepDescription() {
		return depDescription;
	}

	public void setDepDescription(String depDescription) {
		this.depDescription = depDescription;
	}

	public String getDepLocation() {
		return depLocation;
	}

	public void setDepLocation(String depLocation) {
		this.depLocation = depLocation;
	}

	public String getDepHOD() {
		return depHOD;
	}

	public void setDepHOD(String depHOD) {
		this.depHOD = depHOD;
	}

	public int getDepEmpCount() {
		return depEmpCount;
	}

	public void setDepEmpCount(int depEmpCount) {
		this.depEmpCount = depEmpCount;
	}
public Department() {
	
}
	public Department(String depName, String depDescription, String depLocation, String depHOD, Integer depEmpCount) {
		super();
		this.depName = depName;
		this.depDescription = depDescription;
		this.depLocation = depLocation;
		this.depHOD = depHOD;
		this.depEmpCount = depEmpCount;
	}
	
	

}
