import React from 'react'
import { useGlobalContext } from './utils/global.context'


const Footer = () => {
  const {state} = useGlobalContext();
  
  return (
    <footer className={ state.theme === "dark" ? "dark" : "light"}>
        <p>Powered by Sofía Pereyra</p>
    </footer>
  )
}

export default Footer
