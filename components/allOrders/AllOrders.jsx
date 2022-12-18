import { fetchAPI } from "../../lib/api";
import Link from 'next/link' 
import styles from "./AllOrders.module.css";

export default async function AllOrders() {
  const globalOrders = await fetchAPI("/orders");
  const { data, meta } = globalOrders;
  const columna = styles.columna;

  return (
    <div className="container">
      <h1 className={styles.titulo}>Listado Ordenes</h1>
      <ul>
        {data.map((order) => (
          <div key={order.id}>
            <Link href='/orders/[id]' as={`/orders/${order.id}`}>
            <h2 className={styles.tabla} style={{ color: "#09f" }}>
              {order.id}
            </h2>
            <p className={columna}>{order.attributes.name}</p>
            <p className={columna}>{order.attributes.domicilio}</p>
            <p className={columna}>{order.attributes.telefono}</p>
            <p className={columna}>{order.attributes.fecha}</p>
            <p className={columna}>{order.attributes.trabajos}</p>
            <p className={columna}>{order.attributes.telefono}</p>
            <p className={columna}>{order.attributes.observaciones}</p>
            <p className={columna}>
              {order.attributes.realizado === true
                ? "Trabajo Realizado"
                : "Trabajo por realizar"}
            </p>
            <hr />
            <hr />
            <hr />
            <hr />
            <hr />
            </Link>
          </div>
        ))}
      </ul>
    </div>
  );
}
