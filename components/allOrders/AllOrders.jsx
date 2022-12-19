import { fetchAPI } from "../../lib/api";
import Link from "next/link";
import styles from "./AllOrders.module.css";

export default async function AllOrders() {
  const globalOrders = await fetchAPI("/orders");
  const { data, meta } = globalOrders;
  const columna = styles.columna;

  return (
    <div className="container">
      <h1 className={styles.titulo}>Listado Ordenes</h1>

      {data.map((order) => (
        <div key={order.id}>
          <p className={styles.tabla}>{order.id}</p>
          <div className="d-flex flex-row bd-highlight mb-3">
            <div className="p-2 bd-highlight">
              Domicilio: {order.attributes.domicilio.toUpperCase()}
            </div>
            <div className="p-2 bd-highlight">
              Fecha: {order.attributes.fecha}
            </div>
            <div className="p-2 bd-highlight">
              Trabajos: {order.attributes.trabajos.toUpperCase()}
            </div>
            <div className="d-flex justify-content-end">
              <div className="d-flex justify-content-end">
                <Link href="/orders/[id]" as={`/orders/${order.id}`}>
                  <button className="btn btn-success m-2">Ver</button>
                </Link>
              </div>
              <div className="p-2 bd-highlight">
                <button className="btn btn-primary">Editar</button>
              </div>
              <div className="p-2 bd-highlight">
                <button className="btn btn-danger">Borrar</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
