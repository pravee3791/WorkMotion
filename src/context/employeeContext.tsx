import React, { useState, Dispatch, SetStateAction } from "react";
import { Employee } from "../models/employee";
import { employeeService } from "../services/service";

interface EmployeeContextType {
    employee: Employee[],
    error: boolean,
    setError: Dispatch<SetStateAction<boolean>>,
    errorMessage: string, 
    setErrorMessage: Dispatch<SetStateAction<string>>,
    getEmployee: () => void,
    setEmployee: Dispatch<SetStateAction<Employee[]>>,
    setEmployeeStatus: (id: any, payload: any) => void,
    postEmployeeData: (payload: any) => void
}

export const EmployeeContext = React.createContext<EmployeeContextType>({
    employee: [],
    error: false,
    setError: () => { },
    errorMessage: '',
    setErrorMessage: () =>{},
    getEmployee: () => { },
    setEmployee: () => { },
    setEmployeeStatus: (id: any, payload: any) => { },
    postEmployeeData: (payload: any) => { }
})
export const EmployeeProvider: React.FC<any> = (props) => {
    const emptyEmployeeArray: Employee[] = [];
    const [employee, setEmployee] = useState(emptyEmployeeArray);
    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('');
    const getEmployee = async () => {
        employeeService.getEmployees().then(res => {
            setError(false);
            setEmployee(res.data)
        })
            .catch((error) => {
                setError(true)
                setErrorMessage(error)
            }
            )
    }
    const setEmployeeStatus = async (id: any, payload: any) => {
        employeeService.editEmployees(id, payload);
    }
    const postEmployeeData = async (payload: any) => {
        employeeService.postEmployee(payload);
    }

    const value = {
        employee,
        error,
        setError,
        errorMessage,
        setErrorMessage,
        getEmployee,
        setEmployee,
        setEmployeeStatus,
        postEmployeeData
    }
    return (
        <EmployeeContext.Provider value={value}>{props.children}</EmployeeContext.Provider>
    )
}
export const useEmployeeContext = () => React.useContext(EmployeeContext)