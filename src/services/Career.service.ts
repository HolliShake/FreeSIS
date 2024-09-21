import axiosInstance from "@/config/axios";
import { ICareerType } from "@/interfaces/career.type";


const CareerService = new (class {
    async findCareerById(id:number): Promise<{data:ICareerType}|any> {
        return await axiosInstance.get(`/Career/${id}`);
    }
    async getAllCareers(): Promise<{data:ICareerType[]}|any> {
        return await axiosInstance.get("/Career/all");
    }
    async createCareer(data:ICareerType): Promise<{data:ICareerType}|any> {
        return await axiosInstance.post("/Career/create", data);
    }
    async updateCareer(data:ICareerType): Promise<{data:ICareerType}|any> {
        return await axiosInstance.put("/Career/update", data);
    }
    async deleteCareer(id:number): Promise<any> {
        return await axiosInstance.delete(`/Career/delete/${id}`);
    }
});

export default CareerService;
