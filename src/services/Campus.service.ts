import axiosInstance from "@/config/axios";
import { ICampusType } from "@/interfaces/campus.type";


const CampusService = new (class {
    async findCampusById(id:number): Promise<{data:ICampusType}|any> {
        return await axiosInstance.get(`/Campus/${id}`);
    }
    async getAllCampuses(): Promise<{data:ICampusType[]}|any> {
        return await axiosInstance.get("/Campus/all");
    }
    async createCampus(data:ICampusType): Promise<{data:ICampusType}|any> {
        return await axiosInstance.post("/Campus/create", data);
    }
    async updateCampus(data:ICampusType): Promise<{data:ICampusType}|any> {
        return await axiosInstance.put("/Campus/update", data);
    }
    async deleteCampus(id:number): Promise<any> {
        return await axiosInstance.delete(`/Campus/delete/${id}`);
    }
});

export default CampusService;
