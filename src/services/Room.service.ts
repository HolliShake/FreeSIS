import axiosInstance from "@/config/axios";
import { IRoomType } from "@/interfaces/room.type";


const RoomService = new (class {
    async findRoomById(id:number): Promise<{data:IRoomType}|any> {
        return await axiosInstance.get(`/Room/${id}`);
    }
    async getAllRooms(): Promise<{data:IRoomType[]}|any> {
        return await axiosInstance.get("/Room/all");
    }
    async createRoom(data:IRoomType): Promise<{data:IRoomType}|any> {
        return await axiosInstance.post("/Room/create", data);
    }
    async updateRoom(data:IRoomType): Promise<{data:IRoomType}|any> {
        return await axiosInstance.put("/Room/update", data);
    }
    async deleteRoom(id:number): Promise<any> {
        return await axiosInstance.delete(`/Room/delete/${id}`);
    }
});

export default RoomService;