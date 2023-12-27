import { create } from "zustand";
import { v } from "../index";


export const useOperation = create((set, get) => ({
  type:'i',
  titleBtnDesplegable: "Categorias Ingresos",
  titleBtnDesplegableMov: "Ingresos",
  colorCategory: v.colorIngresos,
  bgCategory: v.colorbgingresos,
  year:null,
  month:null,
  setMonth:(p)=>{set({month:p});  },
  setYear:(p)=>{set({year:p})},
  setType: (p) => {
    set({type:p.tipo});
    set({
      titleBtnDesplegable: p.text,titleBtnDesplegableMov:p.text
    });
    set({
      colorCategory: p.color
    });
    set({
      bgCategory: p.bgcolor
    });
  },
}));
