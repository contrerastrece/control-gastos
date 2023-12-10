import { create } from "zustand";

import {
  Editar_categorias,
  Eliminar_categorias,
  Insertar_categorias,
  Mostrar_categorias,
} from "../index";

export const useCategoriesStore = create((set, get) => ({
  dataCategories: [],
  showCategories: async (p) => {
    const response = await Mostrar_categorias(p);
    set({ dataCategories: response });

    return response;
  },
  insertCategories: async (p) => {
    await Insertar_categorias(p);
    const { showCategories } = get();
    set(showCategories(p));
  },
  deleteCategories: async (p) => {
    await Eliminar_categorias(p);
    const { showCategories } = get();
    set(showCategories(p));
  },
  updateCategories: async (p) => {
    await Editar_categorias(p);
    const { showCategories } = get();
    set(showCategories(p));
  },
}));
