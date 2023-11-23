import { supabase } from "../index";

export const obtenerIdAuthSupabase = async () => {
  const {
    data: { session },
  } = await supabase.auth.getSession();
  console.log(data)

  if (session != null) {
    const { user } = session;
    const idAuthSupabase = user.id;
    return idAuthSupabase;
  }
};
