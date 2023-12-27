import { supabase } from "../index";

export const Mostrar_cuentas = async (p) => {
  try {
    const { data, error } = await supabase
      .from("account")
      .select()
      .eq('id_user',p.id_user)
      .maybeSingle()
    return data;
  } catch (error) {
    console.error("MostrarCuentas:", error);
    // throw new Error(error.error_description || error.message || "Error al mostrar usuarios");
  }
};

