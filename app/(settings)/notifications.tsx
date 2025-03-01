import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { router } from 'expo-router';

const NotificationCard = ({ title, description, isDismissible = true }: { title: string; description: string; isDismissible?: boolean }) => (
  <View style={styles.notificationCard}>
    <View style={styles.notificationContent}>
      <Text style={styles.notificationTitle}>{title}</Text>
      <Text style={styles.notificationDescription}>{description}</Text>
    </View>
    {isDismissible && (
      <TouchableOpacity style={styles.dismissButton}>
        <Text style={styles.dismissText}>X</Text>
      </TouchableOpacity>
    )}
  </View>
);

export default function Notifications() {
  const handleBack = () => {
    router.replace('/(tabs)/profile');
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleBack} style={styles.backButton}>
            <MaterialCommunityIcons name="arrow-left" size={24} color="#FFF" />
          </TouchableOpacity>
          <Text style={styles.title}>Notifications</Text>
        </View>

        <NotificationCard 
          title="Set up custom alerts"
          description="Get notified when the next free daily puzzle is available!"
        />

        <Text style={styles.sectionTitle}>Today's notifications</Text>

        <NotificationCard 
          title="Morning check-in"
          description="Measure your pace for the day ahead"
          isDismissible={false}
        />

        <NotificationCard 
          title="Evening check-in"
          description="Measure your pace for the day ahead"
          isDismissible={false}
        />

        <NotificationCard 
          title="Daily check-in"
          description="Measure your face for the day ahead"
          isDismissible={false}
        />

        <NotificationCard 
          title="Weekly check-in"
          description="Measure your pace for the week ahead"
          isDismissible={false}
        />

        <NotificationCard 
          title="Monthly check-in"
          description="Measure your pace for the month ahead"
          isDismissible={false}
        />
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
    marginBottom: 24,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 28,
    fontFamily: 'Poppins-Bold',
  },
  backButton: {
    padding: 8,
  },
  logoutButton: {
    padding: 8,
  },
  settingsIcon: {
    width: 28,
    height: 28,
  },
  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
    marginTop: 24,
    marginBottom: 16,
  },
  notificationCard: {
    backgroundColor: '#D9D9D9',
    borderRadius: 10,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  notificationContent: {
    flex: 1,
  },
  notificationTitle: {
    color: '#2E2E2E',
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    opacity: 0.7,
    marginBottom: 4,
  },
  notificationDescription: {
    color: '#2E2E2E',
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    opacity: 0.6,
  },
  dismissButton: {
    padding: 8,
  },
  dismissText: {
    color: '#2E2E2E',
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
    opacity: 0.7,
  },
}); 