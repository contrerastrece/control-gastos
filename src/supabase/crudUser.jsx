import { supabase } from "../index"

export const insertar_usuarios=async(p)=>{
  try {
    const {data,error}=await supabase.from('usuarios').insert(p).select();
    return data;
  } catch (error) {
    
  }
}
