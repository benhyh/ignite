export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          email: string
          username: string
          avatar_url: string | null
          created_at: string
          updated_at: string
          last_login: string
          is_premium: boolean
          streak_count: number
          total_spark_score: number
          settings: Json
        }
        Insert: {
          id?: string
          email: string
          username: string
          avatar_url?: string | null
          created_at?: string
          updated_at?: string
          last_login?: string
          is_premium?: boolean
          streak_count?: number
          total_spark_score?: number
          settings?: Json
        }
        Update: {
          id?: string
          email?: string
          username?: string
          avatar_url?: string | null
          created_at?: string
          updated_at?: string
          last_login?: string
          is_premium?: boolean
          streak_count?: number
          total_spark_score?: number
          settings?: Json
        }
      }
      // Add other table types as needed
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
} 