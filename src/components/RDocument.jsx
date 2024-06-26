import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
    border: "none",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

const RDocument = ({ content }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>{content}</Text>
        </View>
      </Page>
    </Document>
  );
};

export default RDocument;
