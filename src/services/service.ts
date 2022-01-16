import axios from "axios";

class EmployeeService {
    private URL_PARAM = 'http://localhost:4000';
    private static instance: EmployeeService;
    static getInstance() {
        if (!this.instance) {
            this.instance = new EmployeeService()
        }
        return this.instance;
    }

    private async get(endpoint: any, options = {}) {
        return await axios.get(`${this.URL_PARAM}/${endpoint}`, options);
    }
    private async post(endpoint: any, payload: any) {
        return await axios.post(`${this.URL_PARAM}/${endpoint}`, payload);
    }
    private async patch(endpoint: any, payload: any) {
        return await axios.patch(`${this.URL_PARAM}/employees/${endpoint}`, payload);
    }

    getEmployees(){
        return this.get('employees')
    }

    postEmployee(id:any, payload:any){
        return this.post(`employees`,payload)
    }

    editEmployees(id:any,payload:any){
        return this.patch(id ,payload)
    }

}

export const employeeService = EmployeeService.getInstance()