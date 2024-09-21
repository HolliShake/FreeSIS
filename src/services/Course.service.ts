import axiosInstance from "@/config/axios";
import { ICourseType } from "@/interfaces/course.type";

const CourseService = new (class {
    async findCourseById(id:number): Promise<{data:ICourseType}|any> {
        return await axiosInstance.get(`/Course/${id}`);
    }
    async getAllCourses(): Promise<{data:ICourseType[]}|any> {
        return await axiosInstance.get("/Course/all");
    }
    async createCourse(data:ICourseType): Promise<{data:ICourseType}|any> {
        return await axiosInstance.post("/Course/create", data);
    }
    async updateCourse(data:ICourseType): Promise<{data:ICourseType}|any> {
        return await axiosInstance.put("/Course/update", data);
    }
    async deleteCourse(id:number): Promise<any> {
        return await axiosInstance.delete(`/Course/delete/${id}`);
    }
});

export default CourseService;
