import React from 'react'
import { UserAuth, useAuthStore, } from '../index'

const Home = () => {

  const {signOut}=useAuthStore();
  const {user}=UserAuth();
  
  return (
    <div>
      <h2>Home</h2>

      <h3>Bienvenido {user.full_name}</h3>
      <img src={user.picture} alt="" />
      <button onClick={signOut}>Cerrar</button>
    </div>
  )
}

export default Home