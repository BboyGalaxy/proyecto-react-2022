import dayjs from "dayjs";

const CriptoHistorial = ({history}) => {
  return (
    <div className="history">
      <table>
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          {history.reverse().map(({ date, priceUsd, time }) => (
            <tr key={time}>
              <td>{String(dayjs(date).format("MMMM-DD-YYYY"))}</td>
              <td className="price">{parseFloat(priceUsd).toFixed(3)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CriptoHistorial;
