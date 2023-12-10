import Swal from "sweetalert2";
import {supabase } from "../index";

export const Insertar_categorias = async (p) => {
  try {
    const { data, error } = await supabase
      .from("categories")
      .insert(p)
      .select();
    console.log(data,'👀😂');
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
        title: "Categoria Ingresado",
        showConfirmButton: false,
        timer: 1500,
      });
    }
    return data;
  } catch (error) {
    alert(error.error_description || error.message + " insertar categoria");
  }
};

export const Mostrar_categorias = async (p) => {
  try {
    const { data, error } = await supabase
      .from("categories")
      .select()
      .eq("id_user", p.iduser)
      .eq("type", p.type)
      .order("id", { ascending: false });
    // if (error) {
    //   console.error("MostrarUsuarios:", error);
    //   throw new Error("Error al obtener datos de usuarios");
    // }
    // return data;
    if (data) {
      console.log(data, "👀");
      return data;
    }
  } catch (error) {
    // console.error("MostrarUsuarios:", error);
    // throw new Error(error.error_description || error.message || "Error al mostrar usuarios");
  }
};

export const Eliminar_categorias = async (p) => {
  try {
    const { error } = await supabase
      .from("categories")
      .delete()
      .eq("id_user", p.iduser)
      .eq("id", p.id);
    if (error) {
      alert("Error al eliminar", error);
    }
  } catch (error) {
    console.error("Eliminar Categorias:", error);
    throw new Error(
      error.error_description || error.message || "Error al mostrar usuarios"
    );
  }
};

export const Editar_categorias = async (p) => {
  try {
    const { error } = await supabase
      .from("categories")
      .update()
      .eq("id_user", p.iduser)
      .eq("id", p.id);
    if (error) {
      alert("Error al Editar", error);
    }
  } catch (error) {
    console.error("Editar Categorias:", error);
    throw new Error(
      error.error_description || error.message || "Error a editar categorias"
    );
  }
};
