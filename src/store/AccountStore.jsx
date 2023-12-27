import { create } from "zustand";
import { Mostrar_cuentas } from "../index";

export const useAccountStore=create((set,get)=>({
  accountItemSelect:[],
  dataAccount:[],
  showAccount:async(p)=>{
    const response=await Mostrar_cuentas(p);
    set({dataAccount:response});
    set({accountItemSelect:response});
    return response;
  }

}));