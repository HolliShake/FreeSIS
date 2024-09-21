import axiosInstance from "@/config/axios";
import { ICurriculumType } from "@/interfaces/curriculum.type";

const CurriculumService = new (class {
    async findCurriculumById(id:number): Promise<{data:ICurriculumType}|any> {
        return await axiosInstance.get(`/Curriculum/${id}`);
    }
    async getAllCurriculums(): Promise<{data:ICurriculumType[]}|any> {
        return await axiosInstance.get("/Curriculum/all");
    }
    async createCurriculum(data:ICurriculumType): Promise<{data:ICurriculumType}|any> {
        return await axiosInstance.post("/Curriculum/create", data);
    }
    async updateCurriculum(data:ICurriculumType): Promise<{data:ICurriculumType}|any> {
        return await axiosInstance.put("/Curriculum/update", data);
    }
    async deleteCurriculum(id:number): Promise<any> {
        return await axiosInstance.delete(`/Curriculum/delete/${id}`);
    }
});

export default CurriculumService;
