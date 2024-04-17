// ReservationPDF.js
import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
 page: {
    flexDirection: 'column',
    backgroundColor: '#E4E4E4'
 },
 section: {
    margin: 10,
    padding: 10,
 }
});

const ReservationPDF = ({ reservation }) => (
 <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Reservation Details</Text>
        <Text>Name: {reservation.name}</Text>
        <Text>Email: {reservation.email}</Text>
        <Text>Date: {reservation.date}</Text>
        <Text>Timing: {reservation.timing}</Text>
        <Text>Capacity: {reservation.capacity}</Text>
      </View>
    </Page>
 </Document>
);

export default ReservationPDF;
