import { create } from "zustand";
import { EditarTemaMonedaUser, Mostrar_usuarios } from "../index";

export const useUsuariosStore = create((set, get) => ({
  datausuarios: [],
  id_user:null,
  mostrarUsuarios: async () => {
    const response = await Mostrar_usuarios();
    set({ datausuarios: response });
    if(response){
      set({id_user:response.id})
      return response
    }else{
       return [];
    }
   
  },
  editartemamonedauser: async (p) => {
    await EditarTemaMonedaUser(p);
    const {mostrarUsuarios} = get();
    set(mostrarUsuarios)

  },
}));