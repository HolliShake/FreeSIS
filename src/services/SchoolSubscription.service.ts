import axiosInstance from "@/config/axios";
import { ISchoolSubscriptionType } from "@/interfaces/schoolsubscription.type";

const SchoolSubscriptionService = new (class {
    async findSchoolSubscriptionById(id:number): Promise<{data:ISchoolSubscriptionType}|any> {
        return await axiosInstance.get(`/SchoolSubscription/${id}`);
    }
    async getAllSchoolSubscriptions(): Promise<{data:ISchoolSubscriptionType[]}|any> {
        return await axiosInstance.get("/SchoolSubscription/all");
    }
    async createSchoolSubscription(data:ISchoolSubscriptionType): Promise<{data:ISchoolSubscriptionType}|any> {
        return await axiosInstance.post("/SchoolSubscription/create", data);
    }
    async updateSchoolSubscription(data:ISchoolSubscriptionType): Promise<{data:ISchoolSubscriptionType}|any> {
        return await axiosInstance.put("/SchoolSubscription/update", data);
    }
    async deleteSchoolSubscription(id:number): Promise<any> {
        return await axiosInstance.delete(`/SchoolSubscription/delete/${id}`);
    }
});

export default SchoolSubscriptionService;