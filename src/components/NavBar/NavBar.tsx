import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import {HeaderCss, itemCss, LogContent, MenuButton, MenuItems} from "./NavBar.styles"
//Los valores que deberá tener la propiedad “data-testid” en los elementos HTML son:

// elemento de redirección a ingreso data-testid="header__link-login"
// elemento de redirección a usuarios data-testid="header__link-users"
// elemento de redirección a Crear data-testid="header__link-create"
// elemento para cerrar sesión data-testid="header__link-signout"

function NavBar(){
  const [open, setOpen] = useState(false);
  const {user, logout} = useAuth();

  const clicHandler = () => {
    setOpen(!open);
  }

  const singOutHandler = async () => {
    await logout();
  }

  return(
    <HeaderCss>
      <MenuButton onClick={clicHandler}>
        <img src="../../icons-menu.png" alt="icon-menu" width={30} height={30}/>
      </MenuButton>
      <MenuItems open={open}>
        <Link to="/" data-testid="header__link-login" className={itemCss}>
          Home
        </Link>
        {!user && (
          <LogContent>
            <Link to="/login" data-testid="header__link-login" className={itemCss}>
              Iniciar sesión
            </Link>
            <Link to="/register" data-testid="header__link-create" className={itemCss}>
              Crear usuario
            </Link>
          </LogContent>
        )}
        {user && (
          <Link onClick={singOutHandler} to="/login" data-testid="header__link-signout" className={itemCss}>
            Logout
          </Link>
        )}
      </MenuItems>
    </HeaderCss>
  )
}

export default NavBar;