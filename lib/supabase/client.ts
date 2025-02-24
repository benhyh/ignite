import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';
import { Database } from '../../types/supabase';
import { Platform } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import { makeRedirectUri } from 'expo-auth-session';

const customStorage = {
  getItem: async (key: string) => {
    try {
      if (typeof window !== 'undefined') {
        if (Platform.OS === 'web') {
          return window.localStorage.getItem(key);
        }
        return AsyncStorage.getItem(key);
      }
      return null; // Return null in server environment
    } catch (error) {
      console.warn('Storage getItem error:', error);
      return null;
    }
  },
  setItem: async (key: string, value: string) => {
    try {
      if (typeof window !== 'undefined') {
        if (Platform.OS === 'web') {
          window.localStorage.setItem(key, value);
        } else {
          await AsyncStorage.setItem(key, value);
        }
      }
    } catch (error) {
      console.warn('Storage setItem error:', error);
    }
  },
  removeItem: async (key: string) => {
    try {
      if (typeof window !== 'undefined') {
        if (Platform.OS === 'web') {
          window.localStorage.removeItem(key);
        } else {
          await AsyncStorage.removeItem(key);
        }
      }
    } catch (error) {
      console.warn('Storage removeItem error:', error);
    }
  },
};

// Initialize Supabase client
const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY!;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables. Please check your .env file.');
}

// Get the redirect URL for Expo
const redirectUrl = makeRedirectUri({
  scheme: 'com.brainhacks.ignite',
  path: 'auth/callback'
});

const supabaseConfig = {
  auth: {
    storage: customStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
};

// Mock client for server-side rendering
const createMockClient = () => ({
  auth: {
    getSession: async () => ({ data: { session: null }, error: null }),
    getUser: async () => ({ data: { user: null }, error: null }),
    signInWithPassword: async () => ({ data: { user: null, session: null }, error: null }),
    signUp: async () => ({ data: { user: null, session: null }, error: null }),
    signInWithOAuth: async () => ({ data: { provider: null, url: null }, error: null }),
    signOut: async () => ({ error: null }),
    setSession: async () => ({ data: { session: null }, error: null }),
    onAuthStateChange: () => ({
      data: { subscription: { unsubscribe: () => {} } },
      error: null,
    }),
  },
  from: () => ({
    select: () => Promise.resolve({ data: null, error: null }),
    insert: () => Promise.resolve({ data: null, error: null }),
    update: () => Promise.resolve({ data: null, error: null }),
    delete: () => Promise.resolve({ data: null, error: null }),
  }),
});

// Only create the Supabase client if we're in a browser or React Native environment
const createSupabaseClient = () => {
  if (typeof window === 'undefined') {
    return createMockClient();
  }
  return createClient<Database>(supabaseUrl, supabaseAnonKey, supabaseConfig);
};

export const supabase = createSupabaseClient();

// Auth helper functions
export const signInWithEmail = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  return { data, error };
};

export const signUpWithEmail = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });
  return { data, error };
};

export const signInWithOAuth = async (provider: 'google' | 'apple') => {
  try {
    console.log('Redirect URL:', redirectUrl);
    
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: redirectUrl,
        skipBrowserRedirect: true,
      },
    });

    if (error) throw error;

    if (data?.url) {
      const result = await WebBrowser.openAuthSessionAsync(
        data.url,
        redirectUrl,
        {
          showInRecents: true,
          preferEphemeralSession: true,
        }
      );

      if (result.type === 'success') {
        const { url } = result;
        if (url) {
          const params = new URLSearchParams(url.split('#')[1]);
          const access_token = params.get('access_token');
          const refresh_token = params.get('refresh_token');

          if (access_token && refresh_token) {
            await supabase.auth.setSession({
              access_token,
              refresh_token,
            });
            return { data, error: null };
          }
        }
      }
    }

    return { data: null, error: new Error('Authentication failed or was cancelled') };
  } catch (error) {
    console.error('OAuth error:', error);
    return { 
      data: null, 
      error: error instanceof Error ? error : new Error('An unknown error occurred') 
    };
  }
};

export const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  return { error };
};

export const getCurrentUser = async () => {
  const { data: { user }, error } = await supabase.auth.getUser();
  return { user, error };
}; 