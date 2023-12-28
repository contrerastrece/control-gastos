import Swal from "sweetalert2";
import { supabase } from "../index";

export const Insertar_movimientos = async (p) => {
  try {
    const { data, error } = await supabase
      .from("transactions")
      .insert(p)
      .select();
    if (error) {
      Swal.fire({
        icon: "error",
        title: "Opps...",
        text: "Ya existe un registro con " + p.description,
        footer: '<a href="">Agregue una nueva descripcion</a>',
      });
    }
    if (data) {
      Swal.fire({
        icon: "success",
        title: "Movimiento Ingresado",
        showConfirmButton: false,
        timer: 1500,
      });
    }
    // return data;
  } catch (error) {
    alert(error.error_description || error.message + " insertar categoria");
  }
};

export const Mostrar_movimientos_anio_mes = async (p) => {
  // rpc=llamada de procesos remotos (para llamar funciones)
  try {
    const { data, error } = await supabase
      .rpc("show_transactionsmesanio", {
        year_param: p.year,
        month_param: p.month,
        id_user_param: p.id_user,
        type_category_param: p.type_category,
      })
    return data;
  } catch (error) {
    console.error("MostrarUsuarios:", error);
    // throw new Error(error.error_description || error.message || "Error al mostrar usuarios");
  }
};

export const Eliminar_movimientos = async (p) => {
  try {
    const {error } = await supabase
      .from("transactions")
      .delete()
      .eq("id", p.id);
    if (error) {
      alert("Error al eliminar", error.message);
    }
  } catch (error) {
    throw new Error(
      error.error_description || error.message || "Error al Eliminar movimientos"
    );
  }
};

export const Reporte_movimientos_anio_mes=async(p)=>{
  try {
    const {data}=await supabase.rpc('report_transactionsmesanio',{ 
      year_param: p.year,
      month_param: p.month,
      id_user_param: p.id_user,
      type_category_param: p.type_category,})
    return data;
  } catch (error) {
    
  }
}
