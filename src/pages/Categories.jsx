import React from "react";
import {
  CategoriesTemplate,
  DataUser,
  useCategoriesStore,
  useUsuariosStore,
} from "../index";
import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";

export const Categories = () => {
  const { dataCategories, showCategories } = useCategoriesStore();
  const { datausuarios } = useUsuariosStore();
  console.log(dataCategories);
  console.log(datausuarios);
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["mostrar categorias"],
    queryFn: () =>
      showCategories({ iduser: datausuarios.id, type:'compras' }),
  });
  if (isLoading) {
    return <>Cargando</>;
  }
  if (isError) {
    return <>Error...{error.message}</>;
  }
  console.log(data,'👀');
  return (
    <Container>
      
      <CategoriesTemplate data={dataCategories}/>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
`;
