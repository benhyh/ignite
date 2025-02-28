import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Switch } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useAuth } from '../../lib/context/auth';

export default function Settings() {
  const insets = useSafeAreaInsets();
  const { user, signOut } = useAuth();
  const fullName = user?.user_metadata?.name;
  const email = user?.user_metadata?.email;
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  
  const handleLogout = async () => {
    try {
      await signOut();
      // Reset the entire navigation state and redirect to index
      router.replace('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    // authentication merge
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Settings</Text>
      </View>

      <ScrollView 
        style={styles.content}
        contentContainerStyle={[
          styles.scrollContent,
          { paddingBottom: insets.bottom + 20 }
        ]}
      >
        {/* User Info Section */}
        <View style={styles.userSection}>
          <Text style={styles.userName}>{fullName}</Text>
          <Text style={styles.userEmail}>{email}</Text>
        </View>

        {/* Account Section */}
        <View style={styles.section}>
          <TouchableOpacity style={styles.menuItem}>
            <MaterialCommunityIcons name="account" size={20} color="#FFF" />
            <Text style={styles.menuText}>Account</Text>
            <MaterialCommunityIcons name="chevron-right" size={20} color="#666" style={styles.chevron} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <MaterialCommunityIcons name="credit-card" size={20} color="#FFF" />
            <Text style={styles.menuText}>Billing</Text>
            <MaterialCommunityIcons name="chevron-right" size={20} color="#666" style={styles.chevron} />
          </TouchableOpacity>
        </View>

        {/* Preferences Section */}
        <View style={styles.section}>
          <View style={styles.menuItem}>
            <MaterialCommunityIcons name="bell" size={20} color="#FFF" />
            <Text style={styles.menuText}>Notifications</Text>
            <Switch
              value={notificationsEnabled}
              onValueChange={setNotificationsEnabled}
              trackColor={{ false: '#3E3E3E', true: '#FF4B4B' }}
              thumbColor="#FFFFFF"
            />
          </View>
          <View style={styles.menuItem}>
            <MaterialCommunityIcons name="volume-high" size={20} color="#FFF" />
            <Text style={styles.menuText}>Sound Effects</Text>
            <Switch
              value={soundEnabled}
              onValueChange={setSoundEnabled}
              trackColor={{ false: '#3E3E3E', true: '#FF4B4B' }}
              thumbColor="#FFFFFF"
            />
          </View>
          <View style={styles.menuItem}>
            <MaterialCommunityIcons name="weather-night" size={20} color="#FFF" />
            <Text style={styles.menuText}>Dark/Light Mode</Text>
            <Switch
              value={darkMode}
              onValueChange={setDarkMode}
              trackColor={{ false: '#3E3E3E', true: '#FF4B4B' }}
              thumbColor="#FFFFFF"
            />
          </View>
          <TouchableOpacity style={styles.menuItem}>
            <MaterialCommunityIcons name="earth" size={20} color="#FFF" />
            <Text style={styles.menuText}>Language</Text>
            <MaterialCommunityIcons name="chevron-right" size={20} color="#666" style={styles.chevron} />
          </TouchableOpacity>
        </View>

        {/* Legal Section */}
        <View style={styles.section}>
          <TouchableOpacity style={styles.menuItem}>
            <MaterialCommunityIcons name="file-document" size={20} color="#FFF" />
            <Text style={styles.menuText}>Terms of Service</Text>
            <MaterialCommunityIcons name="chevron-right" size={20} color="#666" style={styles.chevron} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <MaterialCommunityIcons name="file-document" size={20} color="#FFF" />
            <Text style={styles.menuText}>Subscription Terms</Text>
            <MaterialCommunityIcons name="chevron-right" size={20} color="#666" style={styles.chevron} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <MaterialCommunityIcons name="shield-lock" size={20} color="#FFF" />
            <Text style={styles.menuText}>Privacy Policy</Text>
            <MaterialCommunityIcons name="chevron-right" size={20} color="#666" style={styles.chevron} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={handleLogout}>
            <MaterialCommunityIcons name="logout" size={20} color="#FF4B4B" />
            <Text style={[styles.menuText, styles.logoutText]}>Log Out</Text>
          </TouchableOpacity>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Status: Online</Text>
          <Text style={styles.footerText}>Ignite © 2025. Version: 5.174.0 (4145)</Text>
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
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#2E2E2E',
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
    padding: 20,
  },
  userSection: {
    marginBottom: 30,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    fontFamily: 'Poppins-Bold',
    marginBottom: 4,
  },
  userEmail: {
    fontSize: 14,
    color: '#FFFFFF',
    opacity: 0.7,
    fontFamily: 'Poppins',
  },
  section: {
    backgroundColor: '#2E2E2E',
    borderRadius: 10,
    marginBottom: 20,
    overflow: 'hidden',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#3E3E3E',
  },
  menuText: {
    fontSize: 14,
    color: '#FFFFFF',
    fontFamily: 'Poppins',
    marginLeft: 12,
    flex: 1,
  },
  logoutText: {
    color: '#FF4B4B',
  },
  chevron: {
    marginLeft: 'auto',
  },
  footer: {
    alignItems: 'center',
    marginTop: 20,
  },
  footerText: {
    fontSize: 12,
    color: '#FFFFFF',
    opacity: 0.5,
    fontFamily: 'Poppins',
    marginBottom: 4,
  },
}); 