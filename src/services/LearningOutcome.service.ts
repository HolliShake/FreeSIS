import axiosInstance from "@/config/axios";
import { ILearningOutcomeType } from "@/interfaces/learningoutcome.type";

const LearningOutcomeService = new (class {
    async findLearningOutcomeById(id:number): Promise<{data:ILearningOutcomeType}|any> {
        return await axiosInstance.get(`/LearningOutcome/${id}`);
    }
    async getAllLearningOutcomes(): Promise<{data:ILearningOutcomeType[]}|any> {
        return await axiosInstance.get("/LearningOutcome/all");
    }
    async createLearningOutcome(data:ILearningOutcomeType): Promise<{data:ILearningOutcomeType}|any> {
        return await axiosInstance.post("/LearningOutcome/create", data);
    }
    async updateLearningOutcome(data:ILearningOutcomeType): Promise<{data:ILearningOutcomeType}|any> {
        return await axiosInstance.put("/LearningOutcome/update", data);
    }
    async deleteLearningOutcome(id:number): Promise<any> {
        return await axiosInstance.delete(`/LearningOutcome/delete/${id}`);
    }
});

export default LearningOutcomeService;