import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';

const ScoreBoard = ({
  scoreA,
  scoreB,
  setScoreA,
  setScoreB,
  teamALogo,
  teamBLogo,
  teamAName,
  teamBName,
  openClubModal,
  winnerMessage,
  setWinnerMessage,
}) => {
  const incrementScore = (team) => {
    if (winnerMessage) return;
    if (team === 'A') {
      const newScore = scoreA + 1;
      setScoreA(Math.min(newScore, 10));
      if (newScore === 10) setWinnerMessage(`${teamAName} Menang!`);
    } else {
      const newScore = scoreB + 1;
      setScoreB(Math.min(newScore, 10));
      if (newScore === 10) setWinnerMessage(`${teamBName} Menang!`);
    }
  };

  const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

  return (
    <View style={styles.container}>
      <View style={styles.scoreBoard}>
        <View style={styles.team}>
          <TouchableOpacity onPress={() => openClubModal('A')} style={styles.teamCard}>
            <Image source={teamALogo} style={styles.logo} />
            <Text style={styles.teamName}>{teamAName}</Text>
            <Text style={styles.score}>{scoreA}</Text>
            <TouchableOpacity onPress={() => openClubModal('A')} style={styles.clubButton}>
              <Text style={styles.clubButtonText}>Pilih Klub A</Text>
            </TouchableOpacity>
          </TouchableOpacity>
          <View style={styles.scoreActions}>
            <AnimatedTouchable
              style={styles.button}
              onPress={() => incrementScore('A')}
              activeOpacity={0.7}
            >
              <Text style={styles.buttonText}>+</Text>
            </AnimatedTouchable>
            <AnimatedTouchable
              style={[styles.button, styles.minusButton]}
              onPress={() => setScoreA(Math.max(scoreA - 1, 0))}
              activeOpacity={0.7}
            >
              <Text style={styles.buttonText}>-</Text>
            </AnimatedTouchable>
          </View>
        </View>

        <View style={styles.team}>
          <TouchableOpacity onPress={() => openClubModal('B')} style={styles.teamCard}>
            <Image source={teamBLogo} style={styles.logo} />
            <Text style={styles.teamName}>{teamBName}</Text>
            <Text style={styles.score}>{scoreB}</Text>
            <TouchableOpacity onPress={() => openClubModal('B')} style={styles.clubButton}>
              <Text style={styles.clubButtonText}>Pilih Klub B</Text>
            </TouchableOpacity>
          </TouchableOpacity>
          <View style={styles.scoreActions}>
            <AnimatedTouchable
              style={styles.button}
              onPress={() => incrementScore('B')}
              activeOpacity={0.7}
            >
              <Text style={styles.buttonText}>+</Text>
            </AnimatedTouchable>
            <AnimatedTouchable
              style={[styles.button, styles.minusButton]}
              onPress={() => setScoreB(Math.max(scoreB - 1, 0))}
              activeOpacity={0.7}
            >
              <Text style={styles.buttonText}>-</Text>
            </AnimatedTouchable>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  scoreBoard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    maxWidth: 600,
    marginVertical: 20,
  },
  team: {
    alignItems: 'center',
    backgroundColor: '#2980b9',
    padding: 25,
    borderRadius: 20,
    elevation: 10,
    marginHorizontal: 15,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    transform: [{ scale: 1 }],
    transition: 'transform 0.2s',
  },
  teamCard: {
    alignItems: 'center',
    marginBottom: 15,
    paddingBottom: 15,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 15,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: '#fff',
    transform: [{ scale: 1 }],
    transition: 'transform 0.3s ease-in-out',
  },
  teamName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  score: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#ecf0f1',
    marginTop: 10,
  },
  scoreActions: {
    flexDirection: 'row',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#f39c12',
    padding: 15,
    borderRadius: 15,
    margin: 8,
    minWidth: 50,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
  buttonText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
  },
  minusButton: {
    backgroundColor: '#e74c3c',
  },
  clubButton: {
    marginTop: 10,
    paddingVertical: 8,
    paddingHorizontal: 14,
    backgroundColor: '#2c3e50',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#34495e',
  },
  clubButtonText: {
    color: '#fff',
    fontSize: 14,
  },
});

export default ScoreBoard;
