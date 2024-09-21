import axiosInstance from "@/config/axios";
import { IBuildingType } from "@/interfaces/building.type";

const BuildingService = new (class {
    async findBuildingById(id:number): Promise<{data:IBuildingType}|any> {
        return await axiosInstance.get(`/Building/${id}`);
    }
    async getAllBuildings(): Promise<{data:IBuildingType[]}|any> {
        return await axiosInstance.get("/Building/all");
    }
    async createBuilding(data:IBuildingType): Promise<{data:IBuildingType}|any> {
        return await axiosInstance.post("/Building/create", data);
    }
    async updateBuilding(data:IBuildingType): Promise<{data:IBuildingType}|any> {
        return await axiosInstance.put("/Building/update", data);
    }
    async deleteBuilding(id:number): Promise<any> {
        return await axiosInstance.delete(`/Building/delete/${id}`);
    }
});

export default BuildingService;
