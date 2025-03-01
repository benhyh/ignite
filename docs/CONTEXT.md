# Ignite: Spark Your Brain 🧠

## Overview
**Play. Improve. Share.**

Ignite is a brain training app designed to spark cognitive potential through quick, engaging, and scientifically-backed games. Our focus is on making brain training accessible, enjoyable, and part of your daily routine.

## Tech Stack
- Frontend: React Native with TypeScript, Expo and Expo Router
- Backend/Database: Supabase
- UI Framework: React Native Paper
- Paywall: Superwall
- AI Processing: DeepSeek

## Core Features

### 🎯 Quick Training Sessions
- 2-3 minute focused gameplay
- Perfect for busy schedules
- Scientifically designed for maximum impact

### 🧩 Training Categories
1. **Critical Thinking**
   - Pattern recognition
   - Logical reasoning
   - Problem-solving challenges

2. **Memory Enhancement**
   - Visual memory exercises
   - Sequence memorization
   - Working memory training

3. **Focus Building**
   - Attention training
   - Distraction management
   - Concentration exercises

4. **Speed Processing**
   - Quick reaction games
   - Information processing
   - Decision-making challenges

### 📊 Progress Tracking
- Daily Spark Score™
- Detailed performance analytics
- Personalized improvement recommendations

## Social Features

### 🏆 Competitive Elements
- Global leaderboards
- Friend challenges
- Achievement badges

### 🤝 Social Sharing
- Share progress milestones
- Challenge friends
- Daily streak celebrations

## Premium Features

### Ignite Pro
- Unlimited daily games
- Advanced analytics
- Personalized training programs
- Ad-free experience

### Training Packs
- Specialized focus areas
- Theme-based challenges
- Professional development modules

## Game Examples

### 🔢 Number Blitz
Quick arithmetic challenges testing mental math speed

### 🎯 Pattern Master
Visual pattern recognition with increasing complexity

### 🔤 Word Spark
Fast-paced word finding and vocabulary building

### 🧩 Memory Matrix
Grid-based memory challenges with progressive difficulty

## Technical Implementation

### Navigation System
- Expo Router for seamless navigation
- Stack-based navigation for main flows
- Protected routes for authenticated users
- Smooth transitions between screens

### Authentication Flow
- Multi-provider authentication (Apple, Google, Facebook, Email)
- Secure token management
- Persistent login state
- Password recovery system

### Data Management
- Local storage for offline functionality
- Cloud synchronization for progress
- Real-time leaderboard updates
- Efficient caching system

### Performance Optimization
- Lazy loading for heavy components
- Image optimization
- Memory management
- Battery efficiency

### Animation Libraries
- **React Native Reanimated** - High-performance animations that run on the UI thread
  - Perfect for complex, gesture-based animations
  - Seamless integration with Expo
  - Worklet-based architecture for smooth 60fps animations

- **React Native Animated** (built-in)
  - Core animation library included with React Native
  - Great for basic transitions, opacity, and transform animations
  - Supports native driver for optimal performance

- **Moti**
  - Built on top of Reanimated 2
  - Declarative API for common animations
  - Simplified syntax for transitions and micro-interactions

- **Lottie for React Native**
  - Support for Adobe After Effects animations
  - Perfect for complex illustrations and branded animations
  - Lightweight JSON-based animation files

- **React Native Skia**
  - High-performance 2D graphics rendering
  - Canvas-like API for custom drawings and animations
  - Great for data visualizations and custom UI elements

- **React Native Gesture Handler**
  - Complements animation libraries with precise gesture recognition
  - Native-driven gesture system
  - Essential for interactive animations

### Security Features
- End-to-end encryption for user data
- Secure API communications
- Regular security audits
- GDPR compliance

## Design Philosophy
- Clean, minimalist interface
- Dark mode optimized
- Intuitive navigation
- Focus on user engagement

## Future Roadmap
1. AI-powered difficulty adjustment
2. Integration with health apps
3. Corporate wellness programs
4. Educational institution partnerships
5. Multiplayer real-time challenges
6. Virtual coaching system
7. Brain health insights dashboard
8. Community-created challenges
## Database Schema

### Users Table
```sql
users (
  id: uuid primary key
  email: string unique
  username: string unique
  avatar_url: string nullable
  created_at: timestamp
  updated_at: timestamp
  last_login: timestamp
  is_premium: boolean
  streak_count: integer
  total_spark_score: integer
  settings: jsonb
)
```

### Games Table
```sql
games (
  id: uuid primary key
  name: string
  category: enum('CRITICAL_THINKING', 'MEMORY', 'FOCUS', 'SPEED')
  difficulty: enum('BEGINNER', 'INTERMEDIATE', 'ADVANCED')
  description: text
  instructions: text
  thumbnail_url: string
  is_premium: boolean
  created_at: timestamp
  updated_at: timestamp
)
```

### UserGameProgress Table
```sql
user_game_progress (
  id: uuid primary key
  user_id: uuid foreign key refs users(id)
  game_id: uuid foreign key refs games(id)
  highest_score: integer
  games_played: integer
  total_time_spent: integer
  last_played_at: timestamp
  created_at: timestamp
  updated_at: timestamp
)
```

### GameSessions Table
```sql
game_sessions (
  id: uuid primary key
  user_id: uuid foreign key refs users(id)
  game_id: uuid foreign key refs games(id)
  score: integer
  duration: integer
  completed_at: timestamp
  performance_data: jsonb
  created_at: timestamp
)
```

### Achievements Table
```sql
achievements (
  id: uuid primary key
  name: string
  description: text
  icon_url: string
  category: string
  points: integer
  created_at: timestamp
)
```

### UserAchievements Table
```sql
user_achievements (
  id: uuid primary key
  user_id: uuid foreign key refs users(id)
  achievement_id: uuid foreign key refs achievements(id)
  unlocked_at: timestamp
  created_at: timestamp
)
```

### Friends Table
```sql
friends (
  id: uuid primary key
  user_id: uuid foreign key refs users(id)
  friend_id: uuid foreign key refs users(id)
  status: enum('PENDING', 'ACCEPTED', 'BLOCKED')
  created_at: timestamp
  updated_at: timestamp
)
```

### Challenges Table
```sql
challenges (
  id: uuid primary key
  creator_id: uuid foreign key refs users(id)
  game_id: uuid foreign key refs games(id)
  title: string
  description: text
  start_date: timestamp
  end_date: timestamp
  reward_points: integer
  status: enum('ACTIVE', 'COMPLETED', 'CANCELLED')
  created_at: timestamp
  updated_at: timestamp
)
```

### UserChallenges Table
```sql
user_challenges (
  id: uuid primary key
  user_id: uuid foreign key refs users(id)
  challenge_id: uuid foreign key refs challenges(id)
  score: integer
  completed_at: timestamp nullable
  created_at: timestamp
)
```

### Subscriptions Table
```sql
subscriptions (
  id: uuid primary key
  user_id: uuid foreign key refs users(id)
  plan_type: enum('MONTHLY', 'YEARLY')
  status: enum('ACTIVE', 'CANCELLED', 'EXPIRED')
  start_date: timestamp
  end_date: timestamp
  payment_status: enum('PAID', 'PENDING', 'FAILED')
  created_at: timestamp
  updated_at: timestamp
)
```

## Project Structure
```
ignite/
├── app/                      # Main application code
│   ├── _layout.tsx          # Root layout component
│   ├── index.tsx            # Home screen
│   ├── (auth)/              # Authentication routes
│   │   ├── sign-in.tsx
│   │   ├── sign-up.tsx
│   │   └── forgot-password.tsx
│   ├── (games)/             # Game routes
│   │   ├── _layout.tsx
│   │   ├── index.tsx        # Games list
│   │   └── [gameId]/        # Individual game routes
│   ├── (profile)/           # Profile routes
│   │   ├── _layout.tsx
│   │   ├── index.tsx
│   │   └── settings.tsx
│   └── (social)/            # Social features
│       ├── friends.tsx
│       ├── leaderboard.tsx
│       └── challenges.tsx
├── assets/                   # Static assets
│   ├── images/
│   ├── fonts/
│   └── animations/
├── components/               # Reusable components
│   ├── common/              # Shared components
│   ├── games/               # Game-specific components
│   ├── layout/              # Layout components
│   └── ui/                  # UI components
├── constants/               # App constants
│   ├── theme.ts
│   ├── config.ts
│   └── api.ts
├── hooks/                   # Custom React hooks
├── lib/                     # Utility libraries
│   ├── api/                # API integration
│   ├── supabase/           # Supabase client
│   └── analytics/          # Analytics integration
├── services/               # Business logic
│   ├── auth/
│   ├── games/
│   └── storage/
├── store/                  # State management
│   ├── atoms/
│   └── selectors/
├── types/                  # TypeScript types
├── utils/                  # Helper functions
├── docs/                   # Documentation
│   └── CONTEXT.md
├── .env.example           # Environment variables template
├── app.json               # Expo config
├── package.json           # Dependencies
└── tsconfig.json          # TypeScript config
```

```