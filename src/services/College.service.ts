import axiosInstance from "@/config/axios";
import { ICollegeType } from "@/interfaces/college.type";

const CollegeService = new (class {
    async findCollegeById(id:number): Promise<{data:ICollegeType}|any> {
        return await axiosInstance.get(`/College/${id}`);
    }
    async getAllColleges(): Promise<{data:ICollegeType[]}|any> {
        return await axiosInstance.get("/College/all");
    }
    async createCollege(data:ICollegeType): Promise<{data:ICollegeType}|any> {
        return await axiosInstance.post("/College/create", data);
    }
    async updateCollege(data:ICollegeType): Promise<{data:ICollegeType}|any> {
        return await axiosInstance.put("/College/update", data);
    }
    async deleteCollege(id:number): Promise<any> {
        return await axiosInstance.delete(`/College/delete/${id}`);
    }
});

export default CollegeService;

