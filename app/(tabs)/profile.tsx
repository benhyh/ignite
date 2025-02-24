import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useAuth } from '../../lib/context/auth';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { badges } from '../../constants/badges';
import { router } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function Profile() {
  const { user } = useAuth();
  const insets = useSafeAreaInsets();

  const currentStreak = 0; // This will come from user data later
  const bestStreak = 2; // This will come from user data later
  const unlockedBadges = badges.filter(badge => !badge.isLocked).length;
  const totalBadges = badges.length;

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.push('/(settings)/settings')}>
          <MaterialCommunityIcons name="cog" size={24} color="#FFF" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profile</Text>
        <TouchableOpacity onPress={() => router.push('/(settings)/notifications')}>
          <MaterialCommunityIcons name="bell" size={24} color="#FFF" />
        </TouchableOpacity>
      </View>

      <ScrollView 
        style={styles.content}
        contentContainerStyle={[
          styles.scrollContent,
          { paddingBottom: insets.bottom + 100 } // Extra padding for bottom tab bar
        ]}
        showsVerticalScrollIndicator={false}
      >
        {/* Training Streak Section */}
        <Text style={styles.streakTitle}>Training streak</Text>
        <Text style={styles.streakSubtitle}>Complete 3 games to start your 🔥 streak</Text>
        
        <View style={styles.streakContainer}>
          <View style={styles.streakBox}>
            <Text style={styles.streakCount}>{currentStreak}</Text>
            <Text style={styles.streakLabel}>days</Text>
            <Text style={styles.streakType}>CURRENT STREAK</Text>
          </View>
          <View style={styles.streakDivider} />
          <View style={styles.streakBox}>
            <Text style={styles.streakCount}>{bestStreak}</Text>
            <Text style={styles.streakLabel}>days</Text>
            <Text style={styles.streakType}>BEST STREAK</Text>
          </View>
        </View>

        {/* Badges Section */}
        <View style={styles.badgesSection}>
          <Text style={styles.sectionTitle}>Badges</Text>
          <View style={styles.badgeProgress}>
            <View style={styles.progressBar}>
              <View 
                style={[
                  styles.progressFill, 
                  { width: `${(unlockedBadges / totalBadges) * 100}%` }
                ]} 
              />
            </View>
            <Text style={styles.progressText}>{unlockedBadges}/{totalBadges} badges unlocked</Text>
          </View>

          {/* Badge List */}
          {badges.map((badge) => (
            <View key={badge.id} style={styles.badgeItem}>
              <View style={styles.badgeHeader}>
                <View style={[styles.badgeIcon, badge.isLocked && styles.badgeLocked]}>
                  <Text style={styles.badgeEmoji}>{badge.icon}</Text>
                </View>
                <View style={styles.badgeInfo}>
                  <Text style={styles.badgeName}>{badge.name}</Text>
                  <Text style={styles.badgeDescription}>{badge.description}</Text>
                  <Text style={styles.badgeLevel}>Level 1</Text>
                  <View style={styles.levelProgress}>
                    <View style={[styles.levelProgressFill, { width: badge.isLocked ? '0%' : '100%' }]} />
                  </View>
                </View>
                <Text style={styles.badgePoints}>{badge.isLocked ? '0/7' : '7/7'}</Text>
              </View>
            </View>
          ))}
        </View>

        {/* Invite Friends Section */}
        <View style={styles.inviteSection}>
          <View style={styles.inviteContent}>
            <View>
              <Text style={styles.inviteTitle}>Invite friends and</Text>
              <Text style={styles.inviteTitle}>ignite your brain together.</Text>
            </View>
            <Image 
              source={require('../../assets/images/logo.png')} 
              style={styles.inviteImage}
            />
          </View>
          <TouchableOpacity style={styles.inviteButton}>
            <Text style={styles.inviteButtonText}>Invite friends</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
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
    paddingVertical: 15,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    fontFamily: 'Poppins-Bold',
  },
  content: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
  },
  streakTitle: {
    fontSize: 20,
    color: '#FFFFFF',
    fontFamily: 'Poppins-Bold',
    marginBottom: 4,
  },
  streakSubtitle: {
    fontSize: 14,
    color: '#999999',
    fontFamily: 'Poppins',
    marginBottom: 16,
  },
  streakContainer: {
    flexDirection: 'row',
    backgroundColor: '#2E2E2E',
    borderRadius: 12,
    padding: 16,
    marginBottom: 32,
  },
  streakBox: {
    flex: 1,
    alignItems: 'center',
  },
  streakDivider: {
    width: 1,
    backgroundColor: '#3E3E3E',
    marginHorizontal: 15,
  },
  streakCount: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    fontFamily: 'Poppins-Bold',
  },
  streakLabel: {
    fontSize: 16,
    color: '#FFFFFF',
    fontFamily: 'Poppins',
  },
  streakType: {
    fontSize: 12,
    color: '#999999',
    fontFamily: 'Poppins',
    marginTop: 4,
  },
  badgesSection: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 12,
    fontFamily: 'Poppins-Bold',
  },
  badgeProgress: {
    marginBottom: 20,
  },
  progressBar: {
    height: 4,
    backgroundColor: '#2E2E2E',
    borderRadius: 2,
    marginBottom: 8,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#FF4B4B',
    borderRadius: 2,
  },
  progressText: {
    fontSize: 14,
    color: '#999999',
    fontFamily: 'Poppins',
  },
  badgeItem: {
    backgroundColor: '#2E2E2E',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  badgeHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  badgeIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#3E3E3E',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  badgeLocked: {
    opacity: 0.5,
  },
  badgeEmoji: {
    fontSize: 24,
  },
  badgeInfo: {
    flex: 1,
  },
  badgeName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
    fontFamily: 'Poppins-Bold',
    marginBottom: 2,
  },
  badgeDescription: {
    fontSize: 12,
    color: '#999999',
    fontFamily: 'Poppins',
    marginBottom: 8,
  },
  badgeLevel: {
    fontSize: 12,
    color: '#999999',
    fontFamily: 'Poppins',
    marginBottom: 4,
  },
  levelProgress: {
    height: 2,
    backgroundColor: '#3E3E3E',
    borderRadius: 1,
    width: '100%',
  },
  levelProgressFill: {
    height: '100%',
    backgroundColor: '#FF4B4B',
    borderRadius: 1,
  },
  badgePoints: {
    fontSize: 12,
    color: '#999999',
    fontFamily: 'Poppins',
    marginLeft: 8,
  },
  inviteSection: {
    backgroundColor: '#2E2E2E',
    borderRadius: 12,
    padding: 20,
    marginBottom: 32,
  },
  inviteContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  inviteTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    fontFamily: 'Poppins-Bold',
  },
  inviteImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  inviteButton: {
    backgroundColor: '#2E2E2E',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#3E3E3E',
  },
  inviteButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Poppins-Bold',
  },
}); 