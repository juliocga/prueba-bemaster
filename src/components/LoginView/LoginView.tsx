import { useAuth } from "../../context/authContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { buttonCss, errorCss, FormContent, formCss, inputCss, titleCss } from "./LoginView.styles";

function LoginView() {
  const {user, login} = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate()
  const [userData, setUser] = useState({
    email: "",
    password: ""
  });
  
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setUser({...userData, [name] : value});
  }

  if (user) navigate("/");


  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setError("");
    try {
      await login(userData.email, userData.password);
      navigate("/");
    } catch (error: any) {
      if(error?.code === "user-not-found") {
        setError("Usuario no encontrado");
      }
      if(error?.code === "auth/wrong-password"){
        setError("Contraseña incorrecta");
      }
    }
  }

  return(
    <FormContent>
      <h3 className={titleCss}>Iniciar sesión</h3>
      {error && 
        <p className={errorCss}>Error: {error}</p>
      }
      <form onSubmit={handleSubmit} className={formCss}>
      <label htmlFor= "email">Email</label>
      <input 
        type="email" 
        name="email" 
        id="email"
        placeholder="youremail@company.com" 
        onChange={handleChange}
        className={inputCss}
      />
      <label htmlFor= "password">Password </label>
      <input 
        type="password" 
        name="password" 
        id="password"
        placeholder="password" 
        onChange={handleChange}
        className={inputCss}
      />
      <button type="submit" className={buttonCss}>Login</button>
     </form>
    </FormContent>
  )
}
 export default LoginView;