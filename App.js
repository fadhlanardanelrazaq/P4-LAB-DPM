import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import ClubModal from './components/ClubModal';
import ScoreBoard from './components/ScoreBoard';
import ResetButton from './components/ResetButton';

const clubs = [
  { id: 1, name: 'Barcelona', image: require('./assets/FC_Barcelona.png') },
  { id: 2, name: 'Real Madrid', image: require('./assets/Real_Madrid_CF.png') },
  { id: 3, name: 'Atletico Madrid', image: require('./assets/Atletico_Madrid_2017_logo.png') },
  { id: 4, name: 'Sevilla', image: require('./assets/Sevilla_cf.png') },
  { id: 5, name: 'Valencia', image: require('./assets/Valenciacf.png') },
  { id: 6, name: 'Villarreal', image: require('./assets/Villarreal_CF.png') },
  { id: 7, name: 'Osasuna', image: require('./assets/Osasuna.png') },
  { id: 8, name: 'Girona', image: require('./assets/Girona_FC.png') },
  { id: 9, name: 'Getafe', image: require('./assets/Getafe_cf.png') },
  { id: 10, name: 'Athletic Bilbao', image: require('./assets/Athletic_Bilbao.png') },
  { id: 11, name: 'Celta Vigo', image: require('./assets/Celta_Vigo.png') },
  { id: 12, name: 'Rayo Vallecano', image: require('./assets/Rayo_Vallecano.png') },
];

const App = () => {
  const [scoreA, setScoreA] = useState(0);
  const [scoreB, setScoreB] = useState(0);
  const [winnerMessage, setWinnerMessage] = useState('');
  const [teamALogo, setTeamALogo] = useState(clubs[0].image);
  const [teamBLogo, setTeamBLogo] = useState(clubs[1].image);
  const [teamAName, setTeamAName] = useState(clubs[0].name);
  const [teamBName, setTeamBName] =useState(clubs[1].name);
  const [modalVisible, setModalVisible] = useState(false);
  const [activeTeam, setActiveTeam] = useState('');
  const [resetMessage, setResetMessage] = useState('');

  useEffect(() => {
    if (scoreA === 10 || scoreB === 10) {
      setResetMessage('Skor Akan Tereset Secara Otomatis Dalam Beberapa Detik...');
      const timer = setTimeout(() => {
        resetScores();
      }, 5000);

      return () => clearTimeout(timer);
    } else {
      setResetMessage('');
    }
  }, [scoreA, scoreB]);

  const resetScores = () => {
    setScoreA(0);
    setScoreB(0);
    setWinnerMessage('');
  };

  const openClubModal = (team) => {
    setActiveTeam(team);
    setModalVisible(true);
  };

  return (
    <LinearGradient
      colors={['#00178f', '#00a9f2', '#4b96ff']}
      style={styles.gradientContainer}
    >
      <Text style={styles.title}>Pertandingan Futsal</Text>
      {winnerMessage ? (
        <Text style={styles.winnerMessage}>{winnerMessage}</Text>
      ) : (
        <Text style={styles.info}>Pertandingan Berlangsung</Text>
      )}

      <ScoreBoard
        scoreA={scoreA}
        scoreB={scoreB}
        setScoreA={setScoreA}
        setScoreB={setScoreB}
        teamALogo={teamALogo}
        teamBLogo={teamBLogo}
        teamAName={teamAName}
        teamBName={teamBName}
        winnerMessage={winnerMessage}
        setWinnerMessage={setWinnerMessage}
        openClubModal={openClubModal}
      />

      <ResetButton resetScores={resetScores} resetMessage={resetMessage} />

      <ClubModal
        clubs={clubs}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        selectClub={(club) => {
          if (activeTeam === 'A') {
            setTeamALogo(club.image);
            setTeamAName(club.name);
          } else if (activeTeam === 'B') {
            setTeamBLogo(club.image);
            setTeamBName(club.name);
          }
          setModalVisible(false);
        }}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradientContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff',
  },
  info: {
    fontSize: 18,
    color: '#dcdde1',
    marginBottom: 10,
  },
  winnerMessage: {
    fontSize: 20,
    color: '#27ae60',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  
});

export default App;
