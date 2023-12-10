import React from "react";
import {
  CategoriesTemplate,
  useCategoriesStore,
  useOperation,
  useUsuariosStore,
} from "../index";
import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";

export const Categories = () => {
  const { dataCategories, showCategories } = useCategoriesStore();
  const { datausuarios } = useUsuariosStore();
  const {type}=useOperation();


  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["mostrar categorias",type],
    queryFn: () =>
      showCategories({ id_user: datausuarios.id, type:type }),
  });

  return (
    <Container>
      
      <CategoriesTemplate data={dataCategories}/>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
`;
