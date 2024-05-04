import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    paddingTop: 10,
    paddingLeft: 25,
    paddingRİght: 25  
  },
  title: {
    display: "flex",
    flexFlow: "row wrap",
    fontWeight: "bold",
    textAlign: "center",
    color: "red",
    marginBottom: 20,
  },
  note: {
    display: "flex",
    flexFlow: "row wrap",
    fontWeight: "bold",
    textAlign: "start"
  }
});

// Create Document Component
const MyDocument = ({ title, note }) => (
    <Document>
        <Page size="A4" style={styles.page}>
            <Text style={styles.title}>{ title }</Text>

            <Text style={styles.note}>{ note }</Text>
        </Page>
    </Document>
);

export default MyDocument;