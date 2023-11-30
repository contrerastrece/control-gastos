import { createContext, useContext, useEffect, useState } from "react";
import { Insertar_usuarios, supabase } from "../index";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (session == null) {
          setUser(null);
        } else {
          setUser(session?.user.user_metadata);
          insertarUsuarios(session?.user.user_metadata, session?.user.id);
          // console.log("event", event);
          // console.log("session", session?.user);
        }
      }
    );

    // console.log(authListener);

    return () => {
      authListener.subscription;
    };
  }, []);

  const insertarUsuarios = async (dataProvider, idAuthSupabase) => {
    const p = {
      name: dataProvider.name,
      img: dataProvider.picture,
      id_auth_supabase: idAuthSupabase,
      email: dataProvider.email,
    };
    await Insertar_usuarios(p);
  };

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};
export const UserAuth = () => {
  return useContext(AuthContext);
};
