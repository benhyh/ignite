import { router } from 'expo-router';
import { View, Text, StyleSheet, ScrollView, Image, ImageSourcePropType, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const DayCircle = ({ day, isActive }: { day: string; isActive?: boolean }) => (
  <View style={[styles.dayCircle, isActive && styles.dayCircleActive]}>
    <Image 
      source={require('../../assets/images/logo.png')}
      style={styles.streakIcon}
      resizeMode="contain"
    />
    <Text style={[styles.dayText, isActive && styles.dayTextActive]}>{day}</Text>
  </View>
);

const TaskCard = ({ title, subtitle, progress }: { title: string; subtitle: string; progress: number }) => (
  <View style={styles.taskCard}>
    <View>
      <Text style={styles.taskTitle}>{title}</Text>
      <Text style={styles.taskSubtitle}>{subtitle}</Text>
      <Text style={styles.taskLevel}>Level 1</Text>
      <Text style={styles.taskSection}>1.1 Solving Jars</Text>
    </View>
    <View style={styles.progressBar}>
      <View style={[styles.progressFill, { width: `${progress}%` }]} />
    </View>
  </View>
);

const RecommendedCard = ({ color, imageSource }: { color: string; imageSource: ImageSourcePropType }) => (
  <View style={[styles.recommendedCard, { backgroundColor: color }]}>
    <View style={styles.infoButton}>
      <Image 
        source={require('../../assets/images/logo.png')}
        style={styles.infoIcon}
        resizeMode="contain"
      />
    </View>
    <Image 
      source={imageSource}
      style={styles.recommendedImage}
      resizeMode="contain"
    />
  </View>
);

export default function Today() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View style={styles.streakContainer}>
            <Image 
              source={require('../../assets/images/logo.png')}
              style={styles.streakIconLarge}
            />
            <Text style={styles.streakCount}>2</Text>
          </View>
          <Text style={styles.title}>Today</Text>
          <View style={styles.notificationContainer}>
              <Image 
                source={require('../../assets/images/logo.png')}
                style={styles.bellIcon}
              />
            <View style={styles.notificationBadge}>
              <Text style={styles.notificationCount}>4</Text>
            </View>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Your Streak</Text>
        
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.daysContainer}>
          <DayCircle day=""/>
          <DayCircle day=""/>
          <DayCircle day=""/>
          <DayCircle day=""/>
          <DayCircle day=""/>
        </ScrollView>

        <TaskCard 
          title="Candy Sort"
          subtitle="Level 1"
          progress={55}
        />

        <Text style={styles.sectionTitle}>Recommended tasks</Text>
        
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.recommendedContainer}>
          <RecommendedCard 
            color="#CF7AFF"
            imageSource={require('../../assets/images/logo.png')}
          />
          <RecommendedCard 
            color="#FD3636"
            imageSource={require('../../assets/images/logo.png')}
          />
          <RecommendedCard 
            color="#9BE2E2"
            imageSource={require('../../assets/images/logo.png')}
          />
        </ScrollView>

        <Text style={styles.sectionTitle}>Quote of the day</Text>
        <View style={styles.quoteCard}>
          <Text style={styles.quoteText}>
            "The magic you're looking for is in the work you're avoiding."
          </Text>
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
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 22,
    marginBottom: 16,
  },
  streakContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  streakIconLarge: {
    width: 29,
    height: 29,
  },
  streakCount: {
    color: '#FA697A',
    fontSize: 21,
    fontFamily: 'Poppins-Bold',
    marginLeft: 4,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 28,
    fontFamily: 'Poppins-Bold',
  },
  notificationContainer: {
    position: 'relative',
  },
  bellIcon: {
    width: 50,
    height: 50,
  },
  notificationBadge: {
    position: 'absolute',
    top: 11,
    right: 11,
    backgroundColor: '#FA697A',
    width: 14,
    height: 14,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationCount: {
    color: '#FFFFFF',
    fontSize: 11,
    fontFamily: 'Poppins-Medium',
  },
  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold',
    marginTop: 24,
    marginBottom: 16,
  },
  daysContainer: {
    flexDirection: 'row',
    marginBottom: 24,
  },
  dayCircle: {
    width: 33,
    height: 33,
    borderRadius: 16.5,
    backgroundColor: '#777777',
    marginRight: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.4,
    borderColor: '#FFFFFF',
  },
  dayCircleActive: {
    backgroundColor: '#FA697A',
  },
  streakIcon: {
    width: 30,
    height: 28,
    position: 'absolute',
  },
  dayText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
  },
  dayTextActive: {
    color: '#FFFFFF',
  },
  taskCard: {
    backgroundColor: '#434343',
    borderRadius: 10,
    padding: 16,
    marginBottom: 24,
  },
  taskTitle: {
    color: '#FFFFFF',
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold',
    marginBottom: 4,
  },
  taskSubtitle: {
    color: '#FFFFFF',
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
  },
  taskLevel: {
    color: '#FFFFFF',
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    marginTop: 8,
  },
  taskSection: {
    color: '#FFFFFF',
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    marginTop: 4,
  },
  progressBar: {
    height: 6,
    backgroundColor: '#D9D9D9',
    borderRadius: 10,
    marginTop: 16,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#FA697A',
    borderRadius: 10,
  },
  recommendedContainer: {
    flexDirection: 'row',
    marginBottom: 24,
  },
  recommendedCard: {
    width: 122,
    height: 93,
    borderRadius: 10,
    marginRight: 16,
    padding: 8,
    position: 'relative',
  },
  infoButton: {
    position: 'absolute',
    top: 5,
    right: 5,
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: 'rgba(73, 73, 73, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoIcon: {
    width: 10,
    height: 10,
  },
  recommendedImage: {
    width: '100%',
    height: '100%',
  },
  quoteCard: {
    backgroundColor: '#E9F9D4',
    borderRadius: 10,
    padding: 24,
    marginBottom: 24,
  },
  quoteText: {
    color: 'rgba(0, 0, 0, 0.7)',
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
    textAlign: 'center',
  },
}); 