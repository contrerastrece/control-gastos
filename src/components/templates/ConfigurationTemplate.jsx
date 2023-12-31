import React, { useState } from "react";
import { styled } from "styled-components";
import {
  Header,
  ListaGenerica,
  ListaPaises,
  Selector,
  useUsuariosStore,
  TemasData,
  v,
  BtnSave,
  ResetCategories,
} from "../../index";
const ConfigurationTemplate = () => {
  const { datausuarios, editartemamonedauser } = useUsuariosStore();

  const [select, setSelect] = useState([]);
  const [selectTema, setSelectTema] = useState([]);
  const [state, setState] = useState(false);
  const [stateListaPaises, setStateListaPaises] = useState(false);
  const [stateListaTemas, setStateListaTemas] = useState(false);

  //pais moneda
  const moneda = select.symbol ? select.symbol : datausuarios.currency;
  const pais = select.countryName ? select.countryName : datausuarios.country;
  const paisSeleccionado = "🐷 " + moneda + " " + pais;
  console.log(datausuarios, "👀");
  //Tema
  const iconobd = datausuarios.theme === "0" ? "🌞" : "🌚";
  const temabd = datausuarios.theme === "0" ? "light" : "dark";
  const temainicial = selectTema.descripcion ? selectTema.descripcion : temabd;
  const iconoinicial = selectTema.icono ? selectTema.icono : iconobd;
  const temaSeleccionado = iconoinicial + " " + temainicial;

  // editar
  const editar = async () => {
    const temaElegido = selectTema.descripcion === "light" ? "0" : "1";
    const p = {
      theme: temaElegido,
      currency: moneda,
      country: pais,
      id: datausuarios.id,
    };

    await editartemamonedauser(p);
  };

  return (
    <Container>
      <header className="header">
        <Header
          stateConfig={{ state: state, setState: () => setState(!state) }}
        />
      </header>

     

      <section className="area2">
        <h2>AJUSTES</h2>
        <ContentCard>
          <span>Moneda:</span>
          <Selector
            state={stateListaPaises}
            color={v.colorselector}
            texto1={paisSeleccionado}
            funcion={() => setStateListaPaises(!stateListaPaises)}
          />
          {stateListaPaises && (
            <ListaPaises
              setSelect={(p) => setSelect(p)}
              setState={() => setStateListaPaises(!stateListaPaises)}
            />
          )}
        </ContentCard>

        <ContentCard>
          <span>Tema:</span>
          <Selector
            texto1={temaSeleccionado}
            color={v.colorselector}
            state={stateListaTemas}
            funcion={() => setStateListaTemas(!stateListaTemas)}
          ></Selector>
          {stateListaTemas && (
            <ListaGenerica
              data={TemasData}
              setState={() => setStateListaTemas(!stateListaTemas)}
              funcion={setSelectTema}
            />
          )}
        </ContentCard>
        <BtnSave
          titulo="Guardar"
          bgcolor={v.colorselector}
          icono={<v.iconoguardar />}
          funcion={editar}
        />
        <ResetCategories/>
      </section>
    </Container>
  );
};

const Container = styled.div`
  min-height: 100vh;
  padding: 15px;
  width: 100%;
  background: ${({ theme }) => theme.bgtotal};
  color: ${({ theme }) => theme.text};
  display: grid;
  grid-template:
    "header" 100px

    "area2" auto;

  .header {
    grid-area: header;
    /* background-color: rgba(103, 93, 241, 0.14); */
    display: flex;
    align-items: center;
  }

  .area2 {
    grid-area: area2;
    /* background-color: rgba(77, 237, 106, 0.14); */
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: start;
    gap: 2rem;
    align-self:center;
    h2{
      font-size:3rem;
    }
  }

`;
const ContentCard = styled.div`
  display: flex;
  text-align: start;
  align-items: center;
  gap: 20px;
  position: relative;
  width: 100%;
  justify-content: center;
`;
export default ConfigurationTemplate;
