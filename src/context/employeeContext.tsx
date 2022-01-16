import React,{useState } from "react";
import { Employee} from "../models/employee";

interface EmployeeContextType {
    employeeData: Employee[]
}

export const EmployeeContext = React.createContext<EmployeeContextType>({} as EmployeeContextType)
export const EmployeeProvider: React.FC<any> =  (props) =>{
    const [employeeProviderState, setEmpoyeeProviderState] = useState<EmployeeContextType>({} as EmployeeContextType);
    const value = {
        employeeProviderState,
        setEmpoyeeProviderState
    }
    return(
        // <EmployeeContext.Provider value={value}>{props.children}</EmployeeContext.Provider>
    )
}
export const useEmployeeContext = () => React.useContext(EmployeeContext)