





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
