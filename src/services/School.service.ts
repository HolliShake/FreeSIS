import axiosInstance from "@/config/axios";
import { ISchoolType } from "@/interfaces/school.type";


const SchoolService = new (class {
    async findSchoolById(id:number): Promise<{data:ISchoolType}|any> {
        return await axiosInstance.get(`/School/${id}`);
    }
    async getAllSchools(): Promise<{data:ISchoolType[]}|any> {
        return await axiosInstance.get("/School/all");
    }
    async createSchool(data:ISchoolType): Promise<{data:ISchoolType}|any> {
        return await axiosInstance.post("/School/create", data);
    }
    async updateSchool(data:ISchoolType): Promise<{data:ISchoolType}|any> {
        return await axiosInstance.put("/School/update", data);
    }
    async deleteSchool(id:number): Promise<any> {
        return await axiosInstance.delete(`/School/delete/${id}`);
    }
});

export default SchoolService;