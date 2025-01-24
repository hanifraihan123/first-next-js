'use client'
import { useKindeAuth } from '@kinde-oss/kinde-auth-nextjs';
import { useEffect } from 'react';

const page = () => {

    const { isAuthenticated, isLoading, login } = useKindeAuth();

    useEffect(() => {
      if (!isLoading && !isAuthenticated) {
        login(); 
      }
    }, [isAuthenticated, login]);
  

  return (
   <div>
      <h3 className="font-bold text-3xl py-6 text-center">Welcome to your profile</h3>
    </div> 

  );
};

export default page;
