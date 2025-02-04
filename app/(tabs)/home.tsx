import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useAuth } from '../../lib/context/auth';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Home() {
  const { user } = useAuth();
  const firstName = user?.user_metadata?.name?.split(' ')[0] || 'there';

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Welcome back {firstName}</Text>
        <TouchableOpacity>
          <MaterialCommunityIcons name="account-circle" size={32} color="#FFF" />
        </TouchableOpacity>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statBox}>
          <Text style={styles.statTitle}>Today's Goal</Text>
          <Text style={styles.statSubtitle}>Complete 3 games</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statTitle}>Current Streak</Text>
          <Text style={styles.statSubtitle}>0 day(s)</Text>
        </View>
      </View>

      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        style={styles.featuredGames}
      >
        <TouchableOpacity style={[styles.gameCard, { backgroundColor: '#FFF8E1' }]}>
          <Image 
            source={require('../../assets/images/logo.png')} 
            style={styles.gameImage}
          />
          <Text style={styles.gameTitle}>The Black Swan</Text>
          <Text style={styles.gameSubtitle}>Puzzle</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.gameCard, { backgroundColor: '#FFE4E1' }]}>
          <Image 
            source={require('../../assets/images/logo.png')} 
            style={styles.gameImage}
          />
          <Text style={styles.gameTitle}>The Black Swan</Text>
          <Text style={styles.gameSubtitle}>Puzzle</Text>
        </TouchableOpacity>
      </ScrollView>

      <View style={styles.exploreSection}>
        <Text style={styles.sectionTitle}>Explore games</Text>
        <Text style={styles.sectionSubtitle}>Popular games just for you</Text>
        
        <View style={styles.categoryGrid}>
          <TouchableOpacity style={[styles.categoryCard, { backgroundColor: '#E8F5E9' }]}>
            <Image 
              source={require('../../assets/images/logo.png')} 
              style={styles.categoryImage}
            />
          </TouchableOpacity>
          
          <TouchableOpacity style={[styles.categoryCard, { backgroundColor: '#E3F2FD' }]}>
            <Image 
              source={require('../../assets/images/logo.png')} 
              style={styles.categoryImage}
            />
          </TouchableOpacity>
          
          <TouchableOpacity style={[styles.categoryCard, { backgroundColor: '#F3E5F5' }]}>
            <Image 
              source={require('../../assets/images/logo.png')} 
              style={styles.categoryImage}
            />
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={styles.startButton}>
        <Text style={styles.startButtonText}>Start playing</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    fontFamily: 'Poppins-Bold',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  statBox: {
    flex: 1,
    marginRight: 10,
  },
  statTitle: {
    fontSize: 16,
    color: '#FFFFFF',
    fontFamily: 'Poppins',
  },
  statSubtitle: {
    fontSize: 14,
    color: '#999999',
    fontFamily: 'Poppins',
  },
  featuredGames: {
    paddingLeft: 20,
    marginBottom: 30,
  },
  gameCard: {
    width: 200,
    height: 250,
    borderRadius: 20,
    marginRight: 15,
    padding: 20,
  },
  gameImage: {
    width: '100%',
    height: 160,
    resizeMode: 'contain',
  },
  gameTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    fontFamily: 'Poppins-Bold',
  },
  gameSubtitle: {
    fontSize: 14,
    color: '#666666',
    fontFamily: 'Poppins',
  },
  exploreSection: {
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 5,
    fontFamily: 'Poppins-Bold',
  },
  sectionSubtitle: {
    fontSize: 14,
    color: '#999999',
    marginBottom: 20,
    fontFamily: 'Poppins',
  },
  categoryGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  categoryCard: {
    width: '31%',
    aspectRatio: 1,
    borderRadius: 15,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryImage: {
    width: '80%',
    height: '80%',
    resizeMode: 'contain',
  },
  startButton: {
    backgroundColor: '#666666',
    marginHorizontal: 20,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  startButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Poppins-Bold',
  },
}); 