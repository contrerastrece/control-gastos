import { create } from "zustand";
import {
  Eliminar_movimientos,
  Insertar_movimientos,
  Mostrar_movimientos_anio_mes,
  Reporte_movimientos_anio_mes,
} from "../index";

export const useTranstactionsStore = create((set, get) => ({
  dataTransactions: [],
  dataReportTransactionYearMonth: [],
  totalMonthYear: 0,
  totalMonthYearPayed: 0,
  totalMonthYearPending: 0,
  params: {},
  showTransactions: async (p) => {
    const response = await Mostrar_movimientos_anio_mes(p);
    const { calculateTotal } = get();
    set({params:p});
    calculateTotal(response);
    set({ dataTransactions: response });

    return response;
  },
  calculateTotal: (response) => {
    const payed = response?.filter((item) => item.status == 1);
    const pending = response?.filter((item) => item.status == 0);
    let total = 0;
    let t_payed = 0;
    let t_pending = 0;

    response?.forEach((item) => {
      const array = Object.values(item);
      total += array[2];
    });
    payed?.forEach((item) => {
      const array = Object.values(item);
      t_payed += array[2];
    });
    pending?.forEach((item) => {
      const array = Object.values(item);
      t_pending += array[2];
    });
    set({ totalMonthYear: total });
    set({ totalMonthYearPayed: t_payed });
    set({ totalMonthYearPending: t_pending });
  },
  insertTransaction: async (p) => {
    await Insertar_movimientos(p);
    const { params } = get();
    const { showTransactions } = get();
    set(showTransactions(params));
  },
  deleteTransaction: async (p) => {
    await Eliminar_movimientos(p);
    const { params } = get();
    const { showTransactions } = get();
    set(showTransactions(params));
  },
  reportTransactionYearMonth: async (p) => {
    const response = await Reporte_movimientos_anio_mes();
    set({ dataReportTransactionYearMonth: response });
    return response;
  },
}));
