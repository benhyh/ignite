import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const PuzzleCard = ({ title }: { title: string }) => (
  <TouchableOpacity style={styles.puzzleCard}>
    <Text style={styles.puzzleQuestionMark}>?</Text>
    <Text style={styles.puzzleTitle}>{title}</Text>
  </TouchableOpacity>
);

export default function Puzzles() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.title}>Puzzles</Text>
          <TouchableOpacity style={styles.coinContainer}>
            <Image 
              source={require('../../assets/images/logo.png')}
              style={styles.coinIcon}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.puzzlesGrid}>
          <PuzzleCard title="" />
          <PuzzleCard title="" />
          <PuzzleCard title="" />
          <PuzzleCard title="" />
          <PuzzleCard title="" />
          <PuzzleCard title="" />
          <PuzzleCard title="" />
          <PuzzleCard title="" />
          <PuzzleCard title="" />
          <PuzzleCard title="" />
          <PuzzleCard title="" />
          <PuzzleCard title="" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 24,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 18,
    marginBottom: 24,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 28,
    fontFamily: 'Poppins-Bold',
  },
  coinContainer: {
    width: 31,
    height: 31,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D9D9D9',
    borderRadius: 15.5,
  },
  coinIcon: {
    width: 20,
    height: 20,
  },
  puzzlesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  puzzleCard: {
    width: '48%',
    height: 90,
    backgroundColor: '#D9D9D9',
    borderRadius: 5,
    marginBottom: 16,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  puzzleQuestionMark: {
    color: '#1E1E1E',
    fontSize: 48,
    fontFamily: 'Poppins-Bold',
    marginBottom: 8,
  },
  puzzleTitle: {
    color: '#FFFFFF',
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    position: 'absolute',
    bottom: 16,
  },
}); 