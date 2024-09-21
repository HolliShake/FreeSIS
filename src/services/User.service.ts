import axiosInstance from "@/config/axios";
import { IUserType } from "@/interfaces/user.type";

const UserService = new (class {
    async findUserById(id:number): Promise<{data:IUserType}|any> {
        return await axiosInstance.get(`/User/${id}`);
    }
    async getAllUsers(): Promise<{data:IUserType[]}|any> {
        return await axiosInstance.get("/User/all");
    }
    async createUser(data:IUserType): Promise<{data:IUserType}|any> {
        return await axiosInstance.post("/User/create", data);
    }
    async updateUser(data:IUserType): Promise<{data:IUserType}|any> {
        return await axiosInstance.put("/User/update", data);
    }
    async deleteUser(id:number): Promise<any> {
        return await axiosInstance.delete(`/User/delete/${id}`);
    }
});

export default UserService;
