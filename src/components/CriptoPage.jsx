
import { useParams } from "react-router-dom";
import usePetition from "../hooks/usePetition";
import CriptoHistorial from "./cripto/info/CriptoHistorial";
import CriptoInfo from "./cripto/info/CriptoInfo";
import "./CriptoPage.css";

const CriptoPage = () => {
  const params = useParams();

  const [cripto, cargandoCripto] = usePetition(`assets/${params.id}`);
  const [history, cargandoHistory] = usePetition(`assets/${params.id}/history?interval=d1`);

  if (cargandoCripto || cargandoHistory) return <span>Cargando...</span>

  return (
    <div className="cripto-page-container">
      {cripto && <CriptoInfo cripto={cripto} />}
      {history && <CriptoHistorial history={history} />}
    </div>
  );
};

export default CriptoPage;
