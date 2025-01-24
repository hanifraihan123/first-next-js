"use client"

import { useKindeAuth } from "@kinde-oss/kinde-auth-nextjs";
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import { useRouter } from "next/router";
import { useEffect } from "react";

const PrivateRoute = async({children}) => {

    const {isAuthenticated} = useKindeAuth();
      const {getUser} = getKindeServerSession();
      const router = useRouter();
      const user = await getUser()

    useEffect(()=>{
        if(!isAuthenticated){
            router.push('/login'); 
        }
    },[isAuthenticated])


    return children
};

export default PrivateRoute;