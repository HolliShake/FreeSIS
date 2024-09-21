import axiosInstance from "@/config/axios";

const AuthService = new (class {
    async login(data:{ email:string, password:string }): Promise<{data:any}|any> {
        return await axiosInstance.post("/Auth/login", data);
    }
});

export default AuthService;

