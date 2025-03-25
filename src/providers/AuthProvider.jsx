import { createContext, useEffect, useState } from 'react';
import Cookies from "js-cookie";
import {jwtDecode} from "jwt-decode";

export const AuthContext = createContext(undefined);

export function AuthProvider({ children }) {
    const [auth, setAuth] = useState(null);
    const [loading, setLoading] = useState(true)
    const [accessToken] = useState(Cookies.get('access_token'));
    
    console.log(accessToken);
    
    useEffect(() => {
        if (accessToken) {
            try {
                const decodedToken = jwtDecode(accessToken);
                console.log(decodedToken);
                
                setAuth({
                    isLoggedIn: true,
                    userId: decodedToken.nameid,
                    roleName: decodedToken.role,
                    avatar: decodedToken.Avatar,
                    fullName: decodedToken.FullName
                  });
                
            } catch (error) {
                console.error('Error decoding token:', error);
                Cookies.remove('access_token');
                setAuth(null);
            }
        }
        else {
            setAuth(null); 
        }
        setLoading(false)
    }, [accessToken]);



    const value = {
        accessToken,
        auth,
        setAuth,
        loading,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}
