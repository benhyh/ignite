import { useFonts, Poppins_700Bold } from '@expo-google-fonts/poppins';
import { Image, View, Animated, TouchableOpacity, Text, StyleSheet, Modal, Dimensions, Alert } from "react-native";
import { useEffect, useState, useRef } from "react";
import { router } from 'expo-router';
import { useAuth } from '../lib/context/auth';
import { signInWithOAuth } from '../lib/supabase/client';

const slides = [
  {
    image: require('@/assets/illustrations/science.png'),
    text: "Science-backed brain games for shaper minds"
  },
  {
    image: require('@/assets/illustrations/memory.png'),
    text: "Boost memory, focus and speed fast"
  },
  {
    image: require('@/assets/illustrations/training.png'),
    text: "Personalized training to unlock brainpower"
  },
  {
    image: require('@/assets/illustrations/up.png'),
    text: "Turn downtime into brainpower gains"
  }
];

export default function Index() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const { user } = useAuth();
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const slideAnim = useRef(new Animated.Value(0)).current;
  
  const [fontsLoaded] = useFonts({
    'Poppins-Bold': Poppins_700Bold,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }).start(() => {
        setIsLoading(false);
      });
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoading && user) {
      // Check if the user has completed the questionnaire
      // If not, redirect to questionnaire
      router.replace('/questionnaire');
    }
  }, [isLoading, user]);

  useEffect(() => {
    if (!isLoading) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        Animated.sequence([
          Animated.timing(slideAnim, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
          }),
          Animated.timing(slideAnim, {
            toValue: 0,
            duration: 0,
            useNativeDriver: true,
          }),
        ]).start();
      }, 4000);

      return () => clearInterval(interval);
    }
  }, [isLoading]);

  const handleGoogleSignIn = async () => {
    try {
      const { error } = await signInWithOAuth('google');
      
      if (error) { 
        Alert.alert('Error', 'Failed to sign in with Google. Please try again.');
      } else {
        // Redirect to questionnaire page after successful login
        router.replace('/questionnaire');
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to sign in with Google');
    }
  };

  if (!fontsLoaded) return null;

  if (isLoading) {
    return (
      <View style={styles.container}>
        <Animated.View style={{ opacity: fadeAnim }}>
          <Image source={require('@/assets/images/logo-2.png')} />
        </Animated.View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Animated.View 
        style={[
          styles.slideContainer,
          {
            opacity: slideAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [1, 0],
            }),
            transform: [
              {
                translateY: slideAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, -10],
                }),
              },
            ],
          },
        ]}
      >
        <Image 
          source={slides[currentSlide].image}
          style={styles.slideImage}
          resizeMode="contain"
        />
        <Text style={styles.slideText}>{slides[currentSlide].text}</Text>
      </Animated.View>

      <View style={styles.dotsContainer}>
        {slides.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              index === currentSlide ? styles.activeDot : styles.inactiveDot,
            ]}
          />
        ))}
      </View>

      <TouchableOpacity 
        style={styles.googleButton}
        onPress={handleGoogleSignIn}
      >
        <Image 
          source={require('@/assets/icons/google.png')}
          style={styles.googleIcon}
        />
        <Text style={styles.googleButtonText}>Continue with Google</Text>
      </TouchableOpacity>
      

      <TouchableOpacity 
        style={styles.moreOptionsButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.moreOptionsText}>More options?</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity
              style={styles.modalOption}
              onPress={() => {
                setModalVisible(false);
                router.push('/(auth)/email-login');
              }}
            >
              <Text style={styles.modalOptionText}>Sign in with Email</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.modalOption, styles.modalOptionCancel]}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.modalOptionCancelText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2E2E2E",
    justifyContent: "center",
    alignItems: "center",
  },
  slideContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  slideImage: {
    width: width * 0.9,
    height: height * 0.4,
    marginBottom: 20,
  },
  slideText: {
    color: '#FFFFFF',
    fontSize: 24,
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  dotsContainer: {
    flexDirection: 'row',
    marginBottom: 40,
  },
  dot: {
    width: 5,
    height: 5,
    borderRadius: 2.5,
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#FA697A',
  },
  inactiveDot: {
    backgroundColor: '#D9D9D9',
  },
  googleButton: {
    flexDirection: 'row',
    backgroundColor: '#7D7D7D',
    width: width * 0.85,
    height: 65,
    borderRadius: 45,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  googleIcon: {
    width: 25,
    height: 25,
    marginRight: 15,
  },
  googleButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
  },
  moreOptionsButton: {
    padding: 10,
  },
  moreOptionsText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#2E2E2E',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  modalOption: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#3E3E3E',
  },
  modalOptionText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
  },
  modalOptionCancel: {
    borderBottomWidth: 0,
    marginTop: 10,
  },
  modalOptionCancelText: {
    color: '#FA697A',
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
  },
});
