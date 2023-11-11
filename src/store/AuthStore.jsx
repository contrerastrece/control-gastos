import {create} from 'zustand'
import { supabase } from '../supabase/supabase.config'

export const useAuthStore=create((set)=>({
  isAuth:false,
  signInWithGoogle:async()=>{
    try{
      const {data,error}=await supabase.auth.signInWithOAuth({provider:'google'});
      if(error) throw new Error("Ocurrió un error en la atenticación")
      set({isAuth:true})
    return data;
    }catch(error){

    }
  },
  signOut:async()=>{
    const {error}=await supabase.auth.signOut();
    set({isAuth:false})

    if(error) throw new Error("Ocurrió un error al cerrar sesión")
  }
}))