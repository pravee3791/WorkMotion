import React, { useState } from 'react';
import { Employee as EmployeeModel} from "../models/employee";
import { employeeService } from "../services/service";

function Employee() {
   
    const [employee, setEmpoyee] = useState<EmployeeModel>({} as EmployeeModel)

   
    const submitEmployee = () => {
        setEmpoyee({
            ...employee,
            id: Math.floor((Math.random() * 100) + 1),
            status: ''
        })
        employeeService.postEmployee(employee.id, employee)
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
                                    value={employee.first_name}
                                    onChange={e => setEmpoyee({...employee,first_name:e.target.value}) }
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
                                    value={employee.last_name}
                                    onChange={e => setEmpoyee({...employee,last_name:e.target.value}) }
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
                                    value={employee.email}
                                    onChange={e => setEmpoyee({...employee,email:e.target.value}) }
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
                                    value={employee.gender}
                                    onChange={e => setEmpoyee({...employee,gender:e.target.value}) }
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