import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useState } from 'react';
import { router } from 'expo-router';
import PostQuestionnaire from './post-questionnaire';

export default function Questionnaire() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showPostQuestionnaire, setShowPostQuestionnaire] = useState(false);

  const questions = [
    {
      image: '🧠',
      title: 'Sharpen your critical thinking',
    },
    {
      image: '🔍',
      title: 'Strengthen our logical reasoning',
    },
    {
      image: '💭',
      title: 'Enhance your memory skills',
    },
    {
      image: '👁️',
      title: 'Shapren your pattern recognition',
    },
    {
      image: '📚',
      title: 'Improve your vocabulary',
    },
    {
      image: '⚡',
      title: 'Increase your processing speed',
    },
  ];

  {/* Post-Questionnaire Screen */}
  if (showPostQuestionnaire) {
    return <PostQuestionnaire />;
  }

  return (
    <View style={styles.container}>
      {/* Illustration Container */}
      <View style={styles.illustrationContainer}>
        <Text style={styles.illustrationPlaceholder}>
          {questions[currentIndex].image}
        </Text>
      </View>
      
      {/* Questionnaire Title */}
      <Text style={styles.title}>{questions[currentIndex].title}</Text>
      
      {/* Questionnaire Buttons */}
      <View style={styles.buttonContainer}>
        <Pressable 
          style={styles.button}
          onPress={() => {
            if (currentIndex + 1 >= questions.length) {
              setShowPostQuestionnaire(true);
              setTimeout(() => {
                router.replace('/(tabs)/home');
              }, 3000);
              return;
            }
            setCurrentIndex(prev => prev + 1);
          }}
        >
          <Text style={styles.buttonText}>Yes</Text>
        </Pressable>
        
        <Pressable 
          style={styles.button}
          onPress={() => {
            if (currentIndex + 1 >= questions.length) {
              setShowPostQuestionnaire(true);
              setTimeout(() => {
                router.replace('/(tabs)/home');
              }, 3000);
              return;
            }
            setCurrentIndex(prev => prev + 1);
          }}
        >
          <Text style={styles.buttonText}>No</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2E2E2E',
    padding: 20,
  },
  illustrationContainer: {
    width: 370,
    height: 370,
    justifyContent: 'center',
    alignItems: 'center',
  },
  illustrationPlaceholder: {
    fontSize: 100, 
  },
  title: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 20,
  },
  button: {
    width: 120,
    height: 70,
    backgroundColor: '#D9D9D9',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    color: '#2E2E2E',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
