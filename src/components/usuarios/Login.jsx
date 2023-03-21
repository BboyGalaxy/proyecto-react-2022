import axios from "axios";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigation = useNavigate();

  const [cargando, setCargando] = useState(false);

  const [error, setError] = useState();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const submit = (e) => {
    e.preventDefault();
    setCargando(true);
    setError(null)
    axios
      .post(`https://reqres.in/api/login`, user)
      .then((data) => {
        setCargando(false);
        localStorage.setItem("tokenADGmarket", data.data.token);
        navigation("/");
      })
      .catch((err) => {
        setCargando(false);
        console.log(err);
        setError(err.response.data.error);
      });
  };

  if (localStorage.getItem("tokenADGmarket")) return <Navigate to="/" />;

  return (
    <div className="login-container">
      <h1>Iniciar Sesion</h1>
      <form onSubmit={submit}>
        <div className="field">
          <label htmlFor="email">Correo Electronico</label>
          <input
            required
            type="email"
            name="email"
            onChange={(e) => {
              setUser({
                ...user,
                email: e.target.value,
              });
            }}
          />
        </div>
        <div className="field">
          <label htmlFor="password">Contraseña</label>
          <input
            required
            type="password"
            name="password"
            onChange={(e) => {
              setUser({
                ...user,
                password: e.target.value,
              });
            }}
          />
        </div>
        <div className="submit">
          <input
            type="submit"
            value={cargando ? "Ingresando..." : "Ingresar"}
            className="btn-submit"
          />
        </div>
      </form>
      {error && <span className="error">Error: {error}</span>}
    </div>
  );
};

export default Login;
