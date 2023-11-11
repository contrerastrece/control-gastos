import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../supabase/supabase.config";

const AuthContext=createContext();
export const AuthContextProvider=({children})=>{
  const [user, setUser] = useState([])


  useEffect(() => {
   const {data:authListener}=supabase.auth.onAuthStateChange(
      async (e,session)=>{
        if(session===null){
          setUser(null)
        }else{
          setUser(session?.user.user_metadata)
          console.log("session",session)
          console.log("event",e)
        }
      }
   )

   return ()=>{
    authListener.subscription;
   }
  
   
  }, [])

  return (
    <AuthContext.Provider value={{user}}>
      {children}
    </AuthContext.Provider>
  )
  
}

export const UserAuth=()=>{
  return useContext(AuthContext);
}