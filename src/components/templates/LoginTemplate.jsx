import React from "react";
import { BtnSave, v ,useAuthStore} from "../../index";
import styled from "styled-components";

const LoginTemplate = () => {
const {signInWithGoogle}=useAuthStore()

  return (
    <Container imgfondo={v.imagenfondo}>
      <div className="contentCard">
        <h1>LoginTemplate</h1>
        <div className="contentImg">
          <img src={v.logo} alt="" />
        </div>
        <BtnSave titulo={"Soy un botn"} icono={<v.iconogoogle />} bgColor={v.colorSecundario} funcion={signInWithGoogle}/>
      </div>
    </Container>
  );
};

const Container = styled.div`
  background-image: url(${(props)=>props.imgfondo});
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  display:flex;
  justify-content:center;
  align-items:center;
  color:rgba(255,255,255,0.87);

  .contentCard{
    padding:2em;
    background-color:#131313;
    border-radius:2em;
    display:flex;
    gap:2em;
    flex-direction:column;
    text-align:center;
    margin:2em;
    
  }
  .contentImg{
    display:flex;
    align-items:center;
    justify-content:center;
    /* border:1px solid white; */
    img {
      width:60%;
      animation:flotar 2s ease-in-out infinite alternate;
    }
    @keyframes flotar {
      0%{
        transform:translate(0,0);
      };
      50%{
        transform:translate(0,15px);
        
      };
      100%{
        transform:translate(0,0);

      };
    }
  }
`;

export default LoginTemplate;
