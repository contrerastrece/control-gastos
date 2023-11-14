import { createContext, useState } from "react";
import { AuthContextProvider, Dark, Device, Light, MenuHambur, MyRoutes, Sidebar } from "./index";
import styled, { ThemeProvider } from "styled-components";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("dark");
  const themeStyle = theme === "light" ? Light : Dark;
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <ThemeContext.Provider value={{ setTheme, theme }}>
        <ThemeProvider theme={themeStyle}>
          <AuthContextProvider>
            <Container>
              <div className="ContentSidebar">
                <Sidebar state={sidebarOpen} setState={setSidebarOpen}/>
              </div>
              <div className="contentMenuHambur">
                <MenuHambur/>
              </div>
              <ContainerBody>
                <MyRoutes />
              </ContainerBody>
            </Container>
          </AuthContextProvider>
        </ThemeProvider>
      </ThemeContext.Provider>
    </>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns:1fr;
  background:${(props)=>props.theme.bgtotal};

  .ContentSidebar{
    display:none;
  }
  .ContentMenuHambur{
    display:block;
    position:absolute;
    left:20px;
  }
  
  @media ${Device.tablet}{
    grid-template-columns: 65px 1fr;
    
    .ContentSidebar{
      display:initial;
    }
    .ContentMenuHambur{
      display:none;
    }

  }
  `;

const ContainerBody = styled.div`
  width: 100%;
  grid-column: 1;
  @media ${Device.tablet}{
    grid-column: 2;
  
  }
`;

export default App;
