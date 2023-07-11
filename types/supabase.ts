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
      blog: {
        Row: {
          created_at: string | null
          description: string | null
          id: number
          title: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: number
          title?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: number
          title?: string | null
        }
        Relationships: []
      }
      post: {
        Row: {
          content: Json | null
          createdat: string | null
          description: string | null
          id: number
          image: string | null
          imageblurhash: string | null
          published: boolean | null
          siteid: number | null
          slug: string | null
          title: string | null
          updatedat: string | null
        }
        Insert: {
          content?: Json | null
          createdat?: string | null
          description?: string | null
          id: number
          image?: string | null
          imageblurhash?: string | null
          published?: boolean | null
          siteid?: number | null
          slug?: string | null
          title?: string | null
          updatedat?: string | null
        }
        Update: {
          content?: Json | null
          createdat?: string | null
          description?: string | null
          id?: number
          image?: string | null
          imageblurhash?: string | null
          published?: boolean | null
          siteid?: number | null
          slug?: string | null
          title?: string | null
          updatedat?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "post_siteid_fkey"
            columns: ["siteid"]
            referencedRelation: "site"
            referencedColumns: ["id"]
          }
        ]
      }
      site: {
        Row: {
          createdat: string | null
          customdomain: string | null
          description: string | null
          id: number
          image: string | null
          imageblurhash: string | null
          logo: Json | null
          name: string | null
          posts: Json | null
          subdomain: string | null
          updatedat: string | null
          userid: string | null
        }
        Insert: {
          createdat?: string | null
          customdomain?: string | null
          description?: string | null
          id: number
          image?: string | null
          imageblurhash?: string | null
          logo?: Json | null
          name?: string | null
          posts?: Json | null
          subdomain?: string | null
          updatedat?: string | null
          userid?: string | null
        }
        Update: {
          createdat?: string | null
          customdomain?: string | null
          description?: string | null
          id?: number
          image?: string | null
          imageblurhash?: string | null
          logo?: Json | null
          name?: string | null
          posts?: Json | null
          subdomain?: string | null
          updatedat?: string | null
          userid?: string | null
        }
        Relationships: []
      }
      tasks: {
        Row: {
          completed: boolean | null
          created_at: string | null
          id: number
          title: string | null
          user: string | null
        }
        Insert: {
          completed?: boolean | null
          created_at?: string | null
          id?: number
          title?: string | null
          user?: string | null
        }
        Update: {
          completed?: boolean | null
          created_at?: string | null
          id?: number
          title?: string | null
          user?: string | null
        }
        Relationships: []
      }
      todo: {
        Row: {
          created_at: string | null
          id: number
          name: string | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          name?: string | null
        }
        Update: {
          created_at?: string | null
          id?: number
          name?: string | null
        }
        Relationships: []
      }
      users: {
        Row: {
          created_at: string | null
          email: string | null
          first_name: string | null
          id: string
          last_name: string | null
        }
        Insert: {
          created_at?: string | null
          email?: string | null
          first_name?: string | null
          id: string
          last_name?: string | null
        }
        Update: {
          created_at?: string | null
          email?: string | null
          first_name?: string | null
          id?: string
          last_name?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "users_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
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
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
