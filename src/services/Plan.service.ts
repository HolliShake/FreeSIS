import axiosInstance from "@/config/axios";
import { IPlanType } from "@/interfaces/plan.type";


const PlanService = new (class {
    async findPlanById(id:number): Promise<{data:IPlanType}|any> {
        return await axiosInstance.get(`/Plan/${id}`);
    }
    async getAllPlans(): Promise<{data:IPlanType[]}|any> {
        return await axiosInstance.get("/Plan/all");
    }
    async createPlan(data:IPlanType): Promise<{data:IPlanType}|any> {
        return await axiosInstance.post("/Plan/create", data);
    }
    async updatePlan(data:IPlanType): Promise<{data:IPlanType}|any> {
        return await axiosInstance.put("/Plan/update", data);
    }
    async deletePlan(id:number): Promise<any> {
        return await axiosInstance.delete(`/Plan/delete/${id}`);
    }
});

export default PlanService;
