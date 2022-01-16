import React, { useEffect, useState } from 'react';
import { employeeService } from "../services/service";
import { Employee } from "../models/employee";
import Status from "../components/status/status";
import Search from "../components/search/search";

function Home() {
    const [employees, setEmployees] = useState([]);
    const [employeesDisplayData, setEmployeeDisplayData] = useState([])
    useEffect(() => {
        employeeService.getEmployees().then(res => {
            setEmployees(res.data)
            setEmployeeDisplayData(res.data)
        })
    }, [])
    const employeeFilter = (val:string) => {
        if(val != ''){
            const filteredEmp = employees.filter((i:Employee)=>{
                return  i.first_name.includes(val) || i.last_name.includes(val) 
            })
            setEmployeeDisplayData(filteredEmp);
        }
        else{
            setEmployeeDisplayData(employees)
        }
    }
    return (
        <>
            <div className='home'>
                <div className='home-search'>
                    <Search onChange={employeeFilter}></Search>
                </div>
                <div className='home-table'>
                    <table>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Gender</th>
                            <th>Status</th>
                            
                        </tr>
                        {employeesDisplayData.map((emp: Employee, index) => {
                            return (<>
                                <tbody>
                                    <tr key={index}>
                                        <td>{emp.id}</td>
                                        <td>
                                            <img alt="..." src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" className="avatar avatar-sm rounded-circle me-2" />
                                            {`${emp.first_name} ${emp.last_name}`}</td>
                                        <td>{emp.email}</td>
                                        <td>{emp.gender}</td>
                                        <td>
                                            <Status id={emp.id}status={emp.status}></Status>
                                        </td>
                                    </tr>
                                </tbody>
                            </>)
                        })}
                    </table>
                </div>
            </div>
        </>
    )
}

export default Home; 