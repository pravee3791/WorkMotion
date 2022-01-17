import React, { useState } from 'react';
import { Employee as EmployeeModel} from "../models/employee";
import {useEmployeeContext  } from "../context/employeeContext";

/**
 * This component is to complete the requirement of using post employee endpoint
 * This component is not exhaustive and is only to demonstrate the ability to use the Post Call.
 * @returns Employee Component for the creation of the employee object in the DB
 * 
 */
function Employee() {
    /**
     * Hooks for the page
     */
    const [employeeData, setEmpoyeeData] = useState<EmployeeModel>({} as EmployeeModel)
    const { employee,postEmployeeData} = useEmployeeContext();

    /**
     * Method to save a new employee detail
     * This is to demonstrate the post employee end point shared in the requirement
     */
    const submitEmployee = () => {
       // very basic check 
       // the form validation is not part of assignment4;// very basic check 
        if(Object.keys(employeeData).length < 4){
               alert(`The Form can't be empty`);
               return;
        }
        setEmpoyeeData({
            ...employeeData,
            id: employee.length + 1,
            status: ''
        })
        postEmployeeData(employeeData)
    }

    return (
        <>
            <div className='home'>
                <div className='home-table'>
                    <div className="employee-header">
                        <div>Employee</div>
                        <div>
                            <button className='employee-submit' onClick={submitEmployee}>Submit</button>
                        </div>
                    </div>
                    <div className='employee-container'>

                        <div className='employee-row'>
                            <div className='employee-label'>First Name</div>
                            <div >
                                <input
                                    id='firstName'
                                    className='employee-input'
                                    type="text"
                                    value={employeeData.first_name}
                                    onChange={e => setEmpoyeeData({...employeeData,first_name:e.target.value}) }
                                />
                            </div>
                        </div>
                        <div className='employee-row'>
                            <div className='employee-label'>Last Name</div>
                            <div>
                                <input
                                    id='lastName'
                                    className='employee-input'
                                    type="text"
                                    value={employeeData.last_name}
                                    onChange={e => setEmpoyeeData({...employeeData,last_name:e.target.value}) }
                                />
                            </div>
                        </div>
                        <div className='employee-row'>
                            <div className='employee-label'> Email: </div>
                            <div>
                                <input
                                    id='email'
                                    className='employee-input'
                                    type="text"
                                    value={employeeData.email}
                                    onChange={e => setEmpoyeeData({...employeeData,email:e.target.value}) }
                                />
                            </div>
                        </div>
                        <div className='employee-row'>
                            <div className='employee-label'>Gender</div>
                            <div>
                                <input
                                    id='gender'
                                    className='employee-input'
                                    type="text"
                                    value={employeeData.gender}
                                    onChange={e => setEmpoyeeData({...employeeData,gender:e.target.value}) }
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Employee; 