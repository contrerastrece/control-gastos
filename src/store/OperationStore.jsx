import { create } from "zustand";
import { v } from "../index";


export const useOperation = create((set, get) => ({
  type:'i',
  titleBtnDesplegable: "Categorias Ingresos",
  colorCategory: v.colorIngresos,
  bgCategory: v.colorbgingresos,
  setType: (p) => {
    set({type:p.tipo});
    set({
      titleBtnDesplegable: p.text
    });
    set({
      colorCategory: p.color
    });
    set({
      bgCategory: p.bgcolor
    });
  },
}));
