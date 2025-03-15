import { createContext, useEffect, useState } from 'react';
import Cookies from "js-cookie";
import {jwtDecode} from "jwt-decode";

export const AuthContext = createContext(undefined);

export function AuthProvider({ children }) {
    const [auth, setAuth] = useState(null);
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
                  });
                
            } catch (error) {
                console.error('Error decoding token:', error);
                Cookies.remove('access_token');
            }
        }
    }, [accessToken]);



    const value = {
        accessToken,
        auth,
        setAuth,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}
