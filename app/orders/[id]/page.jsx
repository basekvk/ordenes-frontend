import {ButtonPDF} from "../../../components/Imprimir/PDF";
import { fetchAPI } from "../../../lib/api";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: "#f7f2f6",
    color: "black",
  },
  section: {
    margin: 10,
    padding: 10,
  },
  viewer: {
    width: "100vh", //the pdf viewer will take up all of the width and height
    height: "100vh",
  },
});

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
        {realizado === true
          ? "Trabajo Realizado"
          : "Trabajo por realizar"}
      </h3>
      <ButtonPDF />
    </div>
  );
}

export function BasicDocument() {
  return (
    <PDFViewer style={styles.viewer}>
      {/* Start of the document*/}
      <Document>
        {/*render a single page*/}
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <Text>{cliente}</Text>
          </View>
          <View style={styles.section}>
            <Text>World</Text>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
}

export function ButtonPDF() {
  return (
    <>
      <Link href="/pdf">
        <button className="btn btn-primary">PDF</button>
      </Link>
    </>
  );
}
