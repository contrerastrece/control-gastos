import { createContext, useState } from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {
  AuthContextProvider,
  Dark,
  Device,
  Light,
  Login,
  MenuHambur,
  MyRoutes,
  Sidebar,
  SpinerLoader,
  useUsuariosStore,
} from "./index";
import styled, { ThemeProvider } from "styled-components";
import { useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

export const ThemeContext = createContext(null);

function App() {
  const { mostrarUsuarios, datausuarios } = useUsuariosStore();

  const { pathname } = useLocation();
  // const [theme, setTheme] = useState("dark");
  const theme = datausuarios?.theme === "0" ? "light" : "dark";
  const themeStyle = theme === "light" ? Light : Dark;
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const { isLoading, error } = useQuery({
    queryKey: ["mostrar usuarios"],
    queryFn: () => mostrarUsuarios(),
  });

if(isLoading){
  return <SpinerLoader/>
}


  return (
    <>
      <ThemeContext.Provider value={{ theme }}>
        <ThemeProvider theme={themeStyle}>
          <AuthContextProvider>
            {pathname != "/login" ? (
              <Container>
                <div className="ContentSidebar">
                  <Sidebar state={sidebarOpen} setState={setSidebarOpen} />
                </div>
                <div className="contentMenuHambur">
                  <MenuHambur />
                </div>
                <ContainerBody>
                  <MyRoutes />
                </ContainerBody>
              </Container>
            ) : (
              <Login />
            )}
            <ReactQueryDevtools initialIsOpen={true} />
          </AuthContextProvider>
        </ThemeProvider>
      </ThemeContext.Provider>
    </>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  background: ${(props) => props.theme.bgtotal};

  .ContentSidebar {
    display: none;
  }
  .ContentMenuHambur {
    display: block;
    position: absolute;
    left: 20px;
  }

  @media ${Device.tablet} {
    grid-template-columns: 65px 1fr;

    .ContentSidebar {
      display: initial;
    }
    .ContentMenuHambur {
      display: none;
    }
  }
`;

const ContainerBody = styled.div`
  width: 100%;
  grid-column: 1;
  @media ${Device.tablet} {
    grid-column: 2;
  }
`;

export default App;
