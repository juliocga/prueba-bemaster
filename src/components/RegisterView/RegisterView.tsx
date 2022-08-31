import { useAuth } from "../../context/authContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { buttonCss, errorCss, FormContent, formCss, inputCss, titleCss } from "./RegisterView.styles";

function RegisterView() {
  const {user} = useAuth();
  const {signup} = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate()
  const [userData, setUser] = useState({
    email: "",
    password: ""
  });
  
  if (user) navigate("/");

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setUser({...userData, [name] : value});
  }

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setError("");
    try {
      await signup(userData.email, userData.password);
      navigate("/");
    } catch (error: any) {
      if(error?.code === "auth/invalid-email")
      setError("Correo inválido");
    }
  }

  return(
    <FormContent>
      <h3 className={titleCss}>Crear usuario</h3>
      {error && 
        <p className={errorCss}>{error}</p>
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
      <button type="submit" className={buttonCss}>Register</button>
     </form>
    </FormContent>
  )
}
 export default RegisterView;