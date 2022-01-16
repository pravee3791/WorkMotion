import React, { useEffect, useState } from "react";
import './status.css'
import {employeeService} from "../../services/service";

const Status = (props: any) => {
    const statusArray = ['ADDED', 'IN-CHECK', 'APPROVED', 'ACTIVE', 'INACTIVE'];
    const [selectedStatus, setSelectedStatus] = useState('');
    useEffect(() => {
        if (props.status) {
            setSelectedStatus(props.status)
        }
    }, [])
    const statusClick = (event: any, item: any) => {
        setSelectedStatus(item);
        employeeService.editEmployees(props.id,{
            status:item   
        })
    }

    return (
        <div className="container">
            <div className="wrapper">
                <div className="arrow-steps clearfix">
                    {
                        statusArray.map((item: string, index: any) => {
                            return (
                                <div className={item == selectedStatus ? 'step current' : 'step'} id={index} key={index} onClick={(e) => { statusClick(e, item) }}> <span> {item}</span> </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
export default Status;