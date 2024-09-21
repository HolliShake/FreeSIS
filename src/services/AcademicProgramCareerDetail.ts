import axiosInstance from "@/config/axios";
import { IAcademicProgramCareerDetailType } from "@/interfaces/academicprogramcareerdetail.type";

const AcademicProgramCareerDetail = new (class {
    async findAcademicProgramCareerDetailById(id:number): Promise<{data:IAcademicProgramCareerDetailType}|any> {
        return await axiosInstance.get(`/AcademicProgramCareerDetail/${id}`);
    }
    async getAllAcademicProgramCareerDetails(): Promise<{data:IAcademicProgramCareerDetailType[]}|any> {
        return await axiosInstance.get("/AcademicProgramCareerDetail/all");
    }
    async createAcademicProgramCareerDetail(data:IAcademicProgramCareerDetailType): Promise<{data:IAcademicProgramCareerDetailType}|any> {
        return await axiosInstance.post("/AcademicProgramCareerDetail/create", data);
    }
    async updateAcademicProgramCareerDetail(data:IAcademicProgramCareerDetailType): Promise<{data:IAcademicProgramCareerDetailType}|any> {
        return await axiosInstance.put("/AcademicProgramCareerDetail/update", data);
    }
    async deleteAcademicProgramCareerDetail(id:number): Promise<any> {
        return await axiosInstance.delete(`/AcademicProgramCareerDetail/delete/${id}`);
    }
});

export default AcademicProgramCareerDetail;
