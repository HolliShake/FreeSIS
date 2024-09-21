import axiosInstance from "@/config/axios";
import { iPlanFeatureType } from "@/interfaces/planfeature.type";

const PlanFeatureService = new (class {
    async findPlanFeatureById(id:number): Promise<{data:iPlanFeatureType}|any> {
        return await axiosInstance.get(`/PlanFeature/${id}`);
    }
    async getAllPlanFeatures(): Promise<{data:iPlanFeatureType[]}|any> {
        return await axiosInstance.get("/PlanFeature/all");
    }
    async createPlanFeature(data:iPlanFeatureType): Promise<{data:iPlanFeatureType}|any> {
        return await axiosInstance.post("/PlanFeature/create", data);
    }
    async updatePlanFeature(data:iPlanFeatureType): Promise<{data:iPlanFeatureType}|any> {
        return await axiosInstance.put("/PlanFeature/update", data);
    }
    async deletePlanFeature(id:number): Promise<any> {
        return await axiosInstance.delete(`/PlanFeature/delete/${id}`);
    }
});

export default PlanFeatureService;
