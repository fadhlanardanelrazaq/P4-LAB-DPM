import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ResetButton = ({ resetScores, resetMessage }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.resetButton} onPress={resetScores}>
        <Text style={styles.resetText}>Reset Skor</Text>
      </TouchableOpacity>
      {resetMessage ? (
        <Text style={styles.resetMessage}>{resetMessage}</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: 'center',
  },
  resetButton: {
    backgroundColor: '#e74c3c',
    padding: 15,
    borderRadius: 10,
  },
  resetText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  resetMessage: {
    marginTop: 10,
    fontSize: 14,
    color: '#34495e',
    fontStyle: 'italic',
  },
});

export default ResetButton;
