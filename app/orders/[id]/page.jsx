import { fetchAPI } from "../../../lib/api";

export default async function SingleOrder({ params }) {
  const { id } = params;
  const singleOrders = await fetchAPI(`/orders/${id}`);
  const { data, meta } = singleOrders;

  const cliente = data.attributes.name.toUpperCase();
  const domicilio = data.attributes.domicilio;
  const telefono = data.attributes.telefono;
  const fecha = data.attributes.fecha;
  const trabajos = data.attributes.trabajos;
  const observaciones = data.attributes.observaciones;
  const realizado = data.attributes.realizado;

  return (
    <div className="container mt-5">
      <h3>CLIENTE: {cliente}</h3>
      <p>DOMICILIO: {domicilio}</p>
      <p>CONTACTO: {telefono}</p>
      <p>FECHA: {fecha}</p>
      <p>TRABAJOS: {trabajos}</p>
      <p>OBSERVACIONES: {observaciones}</p>
      <h3>
        ESTADO DEL TRABAJO:
        {realizado === true ? "Trabajo Realizado" : "Trabajo por realizar"}
      </h3>
    </div>
  );
}
