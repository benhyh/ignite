import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, ImageSourcePropType } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const CategoryButton = ({ label, isSelected }: { label: string; isSelected?: boolean }) => (
  <TouchableOpacity style={[styles.categoryButton, isSelected && styles.categoryButtonSelected]}>
    <Text style={[styles.categoryButtonText, isSelected && styles.categoryButtonTextSelected]}>{label}</Text>
  </TouchableOpacity>
);

const GameCard = ({ title, color, imageSource }: { title: string; color: string; imageSource?: ImageSourcePropType }) => (
  <View style={[styles.gameCard, { backgroundColor: color }]}>
    {imageSource && (
      <View style={styles.gameImageContainer}>
        <Image source={imageSource} style={styles.gameImage} resizeMode="contain" />
      </View>
    )}
    <Text style={styles.gameCardTitle}>{title}</Text>
  </View>
);

export default function Games() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Games</Text>
        
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false} 
          style={styles.categoriesContainer}
        >
          <CategoryButton label="All" isSelected />
          <CategoryButton label="Relax" />
          <CategoryButton label="Focus" />
          <CategoryButton label="Writing" />
          <CategoryButton label="Speaking" />
          <CategoryButton label="Math" />
        </ScrollView>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Free game of the day</Text>
          <View style={[styles.featuredGame, { backgroundColor: '#6BCD58' }]}>
            <Image 
              source={require('../../assets/images/logo.png')} 
              style={styles.featuredGameImage} 
              resizeMode="contain"
            />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Free games</Text>
          <View style={styles.gamesGrid}>
            <GameCard 
              title="Candy sort" 
              color="#FF677F"
              imageSource={require('../../assets/images/logo.png')}
            />
            <GameCard 
              title="Words crossword" 
              color="#FBAF99"
              imageSource={require('../../assets/images/logo.png')}
            />
            <GameCard 
              title="Robotic flows" 
              color="#A8CFFB"
              imageSource={require('../../assets/images/logo.png')}
            />
            <GameCard 
              title="Draw one line" 
              color="#72CAAF"
              imageSource={require('../../assets/images/logo.png')}
            />
          </View>
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
  title: {
    color: '#FFFFFF',
    fontSize: 28,
    fontFamily: 'Poppins-Bold',
    marginTop: 18,
  },
  categoriesContainer: {
    flexDirection: 'row',
    marginTop: 16,
    marginBottom: 24,
  },
  categoryButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#FFFFFF',
    borderRadius: 26,
    marginRight: 12,
  },
  categoryButtonSelected: {
    backgroundColor: '#FA697A',
  },
  categoryButtonText: {
    color: '#2E2E2E',
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    opacity: 0.7,
  },
  categoryButtonTextSelected: {
    color: '#FFFFFF',
    opacity: 1,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
    marginBottom: 16,
  },
  featuredGame: {
    width: '100%',
    height: 127,
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  featuredGameImage: {
    width: '50%',
    height: '75%',
  },
  gamesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  gameCard: {
    width: '48%',
    height: 121,
    borderRadius: 10,
    marginBottom: 16,
    padding: 16,
    justifyContent: 'flex-end',
  },
  gameImageContainer: {
    position: 'absolute',
    top: 8,
    left: 8,
    right: 8,
    bottom: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gameImage: {
    width: '80%',
    height: '80%',
  },
  gameCardTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
  },
}); 