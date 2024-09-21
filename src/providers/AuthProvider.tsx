import { useEffect, useState } from "react";
import useAuthProviderStore from "./auth.store";


function AuthProvider({ children }: { children: React.ReactNode }) {
    const { setUser } = useAuthProviderStore();

    useEffect(() => {
        // const accessToken:string = localStorage.getItem('accessToken');
    }, []);

    return (
        <>{children}</>
    );
}

export default AuthProvider;