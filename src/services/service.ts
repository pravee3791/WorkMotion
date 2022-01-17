import axios from "axios";
import {endpoint  } from "../constants/constant";

/**
 * Singleton class for the api class
 */
class EmployeeService {
    private URL_PARAM = 'http://localhost:4000';
    private static instance: EmployeeService;
    static getInstance() {
        if (!this.instance) {
            this.instance = new EmployeeService()
        }
        return this.instance;
    }

    private async get( options = {}) {
        return await axios.get(`${this.URL_PARAM}/${endpoint}`, options);
    }
    private async post( payload: any) {
        return await axios.post(`${this.URL_PARAM}/${endpoint}`, payload);
    }
    private async patch(id:number, payload: any) {
        return await axios.patch(`${this.URL_PARAM}/${endpoint}/${id}`, payload);
    }

    getEmployees(){
        return this.get();
    }

    postEmployee(payload:any){
        return this.post(payload)
    }

    editEmployees(id:any,payload:any){
        return this.patch(id ,payload)
    }

}

export const employeeService = EmployeeService.getInstance()