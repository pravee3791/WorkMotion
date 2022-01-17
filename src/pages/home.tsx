import React, { useEffect, useState } from 'react';
import { Employee } from "../models/employee";
import ErrorComponent from "./Error/error-component";
import Status from "../components/status/status";
import Search from "../components/search/search";
import { useEmployeeContext } from "../context/employeeContext";
/**
 *  Home Component is the main page of the assignment and dispalys the employee information 
 *  in the tabular form. 
 *  Home page also edits the status of the employee
 *  Search can also be performed on the Employee Table 
 * @returns a Home Component that displays the employee rows in a table and stores the state of the employee
 */
function Home() {
    /**
     * Hooks for the component
     */
    const [employeeState, setEmployeeState] = useState([] as Employee[]);
    const { error, employee, getEmployee } = useEmployeeContext();

    /**
     * To ge the employee details on the page load
     */
    useEffect(() => {
        getEmployee();
    }, [])

    /**
     * To save the employee information in the context
     */
    useEffect(() => {
        setEmployeeState(employee)
    }, [employee])

    /**
     *  The method to filter the state and show the filtereed rows 
     * @param val the string to be tested
     */
    const employeeFilter = (val: string) => {
        if (val != '') {
            const filteredEmp = employee.filter((i: Employee) => {
                return i.first_name.includes(val) || i.last_name.includes(val)
            })
            setEmployeeState(filteredEmp);
        }
        else {
            setEmployeeState(employee)
        }
    }
    return (
        <>
            {error && <ErrorComponent></ErrorComponent>}
            {!error && <div className='home'>
                <div className='home-search'>
                    <Search onChange={employeeFilter}></Search>
                </div>
                <div id="employee-table" className='home-table'>
                    <table>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Gender</th>
                                <th>Status</th>

                            </tr>
                        </thead>
                        <tbody id='employee-table-body'>
                            {employeeState.map((emp: Employee, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{emp.id}</td>
                                        <td>
                                            <img alt="..." src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" className="avatar avatar-sm rounded-circle me-2" />
                                            {`${emp.first_name} ${emp.last_name}`}</td>
                                        <td>{emp.email}</td>
                                        <td>{emp.gender}</td>
                                        <td>
                                            <Status id={emp.id} status={emp.status}></Status>
                                        </td>
                                    </tr>

                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
            }
        </>
    )
}

export default Home; 