import Swal from "sweetalert2";
import { obtenerIdAuthSupabase, supabase } from "../index"

export const Insertar_usuarios=async(p)=>{
  try {
    const {data}=await supabase.from('usuarios').insert(p).select();
    // console.log(data)
    return data;
  } catch (error) {
    
  }
}
export const Mostrar_usuarios = async () => {
  try {
    const idAuthSupabase = await obtenerIdAuthSupabase();
    console.log(idAuthSupabase)
    const { data ,error} = await supabase
      .from("usuarios")
      .select()
      .eq("id_auth_supabase", idAuthSupabase)
      .maybeSingle();
    // if (error) {
    //   console.error("MostrarUsuarios:", error);
    //   throw new Error("Error al obtener datos de usuarios");
    // }
    if (data) {
      // console.log(data,'👀');
      return data;
    }
  } catch (error) {
    // console.error("MostrarUsuarios:", error);
    // throw new Error(error.error_description || error.message || "Error al mostrar usuarios");

  }
};
export const EditarTemaMonedaUser=async(p) =>{
  try {
    const { error } = await supabase.from("usuarios").update(p).eq("id", p.id);
    if (error) {
      alert("Error al editar usuarios", error);
    }
    Swal.fire({     
      icon: "success",
      title: "Datos modificados",
      showConfirmButton: false,
      timer: 1500,
    });
  } catch (error) {
    alert(error.error_description || error.message + "EditarTemaMonedaUser");
  }
}
