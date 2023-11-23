import { obtenerIdAuthSupabase, supabase } from "../index"

export const Insertar_usuarios=async(p)=>{
  try {
    const {data}=await supabase.from('usuarios').insert(p).select();
    return data;
  } catch (error) {
    
  }
}
export const MostrarUsuarios = async () => {
  try {
    const idAuthSupabase = await obtenerIdAuthSupabase();
    console.log(idAuthSupabase,"😉")
    const { error, data } = await supabase
      .from("usuarios")
      .select('*')
      .eq("id_auth_supabase", idAuthSupabase);
    if (error) {
      alert("MostrarUsuarios", error);
    }
    console.log(data,'');
    if (data) {
      return data[0];
    }
  } catch (error) {
    alert(error.error_description || error.message + "MostrarUsuarios");
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