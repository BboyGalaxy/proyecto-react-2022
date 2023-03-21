import { Navigate, Outlet } from "react-router-dom";
import Menu from "../menu/menu";
import "./App.css";

const App = () => {
  if (!localStorage.getItem("tokenADGmarket")) return <Navigate to="/login" />;

  return (
    <div className="app-container">
      <Menu />
      <Outlet />
    </div>
  );
};

export default App;
