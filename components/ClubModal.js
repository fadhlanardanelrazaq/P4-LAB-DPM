import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet, Image, FlatList } from 'react-native';

const ClubModal = ({ clubs, modalVisible, setModalVisible, selectClub }) => {
  return (
    <Modal
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(false)}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
            <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.backButton}>
              <Image 
                source={require('../assets/red-left arrow.png')}
                style={styles.backIcon}                
              />
            <Text style={styles.backText}>Back</Text> 
            </TouchableOpacity>

          <View style={styles.laLigaLogoContainer}>
          <View style={styles.header}>
            <Image 
              source={require('../assets/laliga.png')}
              style={styles.laLigaLogo} 
            />
            </View>
          </View>


          <Text style={styles.modalTitle}>Pilih Klub</Text>

          <FlatList
            data={clubs}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.clubContainer}
                onPress={() => {
                  selectClub(item);
                  setModalVisible(false);
                }}
              >
                <View style={styles.clubImageContainer}>
                  <Image source={item.image} style={styles.clubImage} />
                </View>
                <Text style={styles.clubName}>{item.name}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.name}
            numColumns={3}
            columnWrapperStyle={styles.columnWrapper}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  modalContent: {
    width: '90%',
    backgroundColor: '#2c3e50',
    borderRadius: 20,
    elevation: 10,
  },
  laLigaLogoContainer: {
    alignItems: 'center',
    marginBottom: 15,
  },
  laLigaLogo: {
    width: 175,
    height: 100,
    resizeMode: 'contain',
  },
  header: {
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent: 'center', 
    borderBottomWidth: 5, 
    borderBottomColor: '#34495e',
    width: '100%',
  },
  backButton: {
    flexDirection: 'row', 
    alignItems: 'center',
    padding: 5,
    marginLeft: 10,
    marginTop: 10,
  },
  
  backIcon: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
  
  backText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
    marginLeft: 5,
  },
  
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ecf0f1',
    textAlign: 'center',
    marginBottom: 15,
  },
  clubContainer: {
    flex: 1,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#34495e',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 10,
    height: 130,
    width: 100,
    borderWidth: 2,
    borderColor: '#3498db',
    overflow: 'hidden',
  },
  clubImageContainer: {
    width: '70%',
    height: '70%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 10,
  },
  clubImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  clubName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#ecf0f1',
    textAlign: 'center',
  },
  columnWrapper: {
    justifyContent: 'space-between',
    marginBottom: 20,
  },
});

export default ClubModal;
