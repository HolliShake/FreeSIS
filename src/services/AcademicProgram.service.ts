import axiosInstance from "@/config/axios";
import { IAcademicProgramType } from "@/interfaces/academicprogram.type";


const AcademicProgramService  = new (class {
    async findAcademicProgramById(id:number): Promise<{data:IAcademicProgramType}|any> {
        return await axiosInstance.get(`/AcademicProgram/${id}`);
    }
    async getAllAcademicPrograms(): Promise<{data:IAcademicProgramType[]}|any> {
        return await axiosInstance.get("/AcademicProgram/all");
    }
    async createAcademicProgram(data:IAcademicProgramType): Promise<{data:IAcademicProgramType}|any> {
        return await axiosInstance.post("/AcademicProgram/create", data);
    }
    async updateAcademicProgram(data:IAcademicProgramType): Promise<{data:IAcademicProgramType}|any> {
        return await axiosInstance.put("/AcademicProgram/update", data);
    }
    async deleteAcademicProgram(id:number): Promise<any> {
        return await axiosInstance.delete(`/AcademicProgram/delete/${id}`);
    }
});

export default AcademicProgramService;

