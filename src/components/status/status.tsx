import React, { useEffect, useState } from "react";
import './status.css'
import {useEmployeeContext  } from "../../context/employeeContext";

/**
 * 
 * @returns Array of employee status based on the user selection
 */
const Status = (props: any) => {
    // possible value for the employee status
    const statusArray = ['ADDED', 'IN-CHECK', 'APPROVED', 'ACTIVE', 'INACTIVE'];
    /**
     * Hooks for the component
     */
    const [selectedStatus, setSelectedStatus] = useState('');
    const {setEmployeeStatus} = useEmployeeContext();
    useEffect(() => {
        if (props.status) {
            setSelectedStatus(props.status)
        }
    }, [])
    /**
     * This method saves the status of the empoyee 
     * @param event Click Event
     * @param item The text of the status 
     */
    const statusClick = (event: any, item: any) => {
        setSelectedStatus(item);
        setEmployeeStatus(props.id, {
            status:item
        })
    }

    return (
        <div className="container">
            <div className="wrapper">
                <div id="status-wrapper-container"className="arrow-steps clearfix">
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