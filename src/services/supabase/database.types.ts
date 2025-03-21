export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      addresses: {
        Row: {
          city: string | null
          country: string | null
          created_at: string | null
          deletedat: string | null
          id: string
          is_deleted: boolean | null
          state: string | null
          street: string | null
          updated_at: string | null
          user_id: string | null
          zip_code: string | null
        }
        Insert: {
          city?: string | null
          country?: string | null
          created_at?: string | null
          deletedat?: string | null
          id?: string
          is_deleted?: boolean | null
          state?: string | null
          street?: string | null
          updated_at?: string | null
          user_id?: string | null
          zip_code?: string | null
        }
        Update: {
          city?: string | null
          country?: string | null
          created_at?: string | null
          deletedat?: string | null
          id?: string
          is_deleted?: boolean | null
          state?: string | null
          street?: string | null
          updated_at?: string | null
          user_id?: string | null
          zip_code?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "addresses_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      categories: {
        Row: {
          created_at: string | null
          deletedat: string | null
          id: string
          is_deleted: boolean | null
          name: string | null
          restaurant_id: string | null
          updatedat: string | null
        }
        Insert: {
          created_at?: string | null
          deletedat?: string | null
          id?: string
          is_deleted?: boolean | null
          name?: string | null
          restaurant_id?: string | null
          updatedat?: string | null
        }
        Update: {
          created_at?: string | null
          deletedat?: string | null
          id?: string
          is_deleted?: boolean | null
          name?: string | null
          restaurant_id?: string | null
          updatedat?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "categories_restaurant_id_fkey"
            columns: ["restaurant_id"]
            isOneToOne: false
            referencedRelation: "restaurant"
            referencedColumns: ["id"]
          },
        ]
      }
      favorites: {
        Row: {
          created_at: string
          id: string
          productId: string | null
          userId: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          productId?: string | null
          userId?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          productId?: string | null
          userId?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "favorites_productId_fkey"
            columns: ["productId"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "favorites_userId_fkey"
            columns: ["userId"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      modifier: {
        Row: {
          created_at: string | null
          deletedat: string | null
          id: string
          is_deleted: boolean | null
          name: string | null
          product_id: string | null
          updatedat: string | null
        }
        Insert: {
          created_at?: string | null
          deletedat?: string | null
          id?: string
          is_deleted?: boolean | null
          name?: string | null
          product_id?: string | null
          updatedat?: string | null
        }
        Update: {
          created_at?: string | null
          deletedat?: string | null
          id?: string
          is_deleted?: boolean | null
          name?: string | null
          product_id?: string | null
          updatedat?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "modifier_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      modifier_option: {
        Row: {
          created_at: string | null
          deletedat: string | null
          id: string
          is_deleted: boolean | null
          modifier_id: string | null
          option_name: string | null
          price: number | null
          updatedat: string | null
        }
        Insert: {
          created_at?: string | null
          deletedat?: string | null
          id?: string
          is_deleted?: boolean | null
          modifier_id?: string | null
          option_name?: string | null
          price?: number | null
          updatedat?: string | null
        }
        Update: {
          created_at?: string | null
          deletedat?: string | null
          id?: string
          is_deleted?: boolean | null
          modifier_id?: string | null
          option_name?: string | null
          price?: number | null
          updatedat?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "modifier_option_modifier_id_fkey"
            columns: ["modifier_id"]
            isOneToOne: false
            referencedRelation: "modifier"
            referencedColumns: ["id"]
          },
        ]
      }
      Order_Item_Option_Modifier: {
        Row: {
          created_at: string
          id: number
          modifier_id: string | null
          option_modifier_id: string | null
          order_id: string | null
          order_item_id: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          modifier_id?: string | null
          option_modifier_id?: string | null
          order_id?: string | null
          order_item_id?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          modifier_id?: string | null
          option_modifier_id?: string | null
          order_id?: string | null
          order_item_id?: string | null
        }
        Relationships: []
      }
      order_items: {
        Row: {
          created_at: string | null
          deletedat: string | null
          id: string
          imageurl: string | null
          is_deleted: boolean | null
          name: string | null
          notes: string | null
          order_id: string | null
          price: number | null
          product_id: string | null
          quantity: number | null
          updatedat: string | null
        }
        Insert: {
          created_at?: string | null
          deletedat?: string | null
          id?: string
          imageurl?: string | null
          is_deleted?: boolean | null
          name?: string | null
          notes?: string | null
          order_id?: string | null
          price?: number | null
          product_id?: string | null
          quantity?: number | null
          updatedat?: string | null
        }
        Update: {
          created_at?: string | null
          deletedat?: string | null
          id?: string
          imageurl?: string | null
          is_deleted?: boolean | null
          name?: string | null
          notes?: string | null
          order_id?: string | null
          price?: number | null
          product_id?: string | null
          quantity?: number | null
          updatedat?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "order_items_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "order_items_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      orders: {
        Row: {
          address_id: string | null
          created_at: string | null
          deletedat: string | null
          id: string
          is_deleted: boolean | null
          order_type: Database["public"]["Enums"]["ordertype"] | null
          payment_method_id: string | null
          status: Database["public"]["Enums"]["order_status"] | null
          totalamount: number | null
          totalquantity: number | null
          updatedat: string | null
          user_id: string | null
        }
        Insert: {
          address_id?: string | null
          created_at?: string | null
          deletedat?: string | null
          id?: string
          is_deleted?: boolean | null
          order_type?: Database["public"]["Enums"]["ordertype"] | null
          payment_method_id?: string | null
          status?: Database["public"]["Enums"]["order_status"] | null
          totalamount?: number | null
          totalquantity?: number | null
          updatedat?: string | null
          user_id?: string | null
        }
        Update: {
          address_id?: string | null
          created_at?: string | null
          deletedat?: string | null
          id?: string
          is_deleted?: boolean | null
          order_type?: Database["public"]["Enums"]["ordertype"] | null
          payment_method_id?: string | null
          status?: Database["public"]["Enums"]["order_status"] | null
          totalamount?: number | null
          totalquantity?: number | null
          updatedat?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "orders_address_id_fkey"
            columns: ["address_id"]
            isOneToOne: false
            referencedRelation: "addresses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "orders_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      payment_method: {
        Row: {
          acount_name: string | null
          card_cvc: string | null
          card_number: string | null
          created_at: string | null
          deletedat: string | null
          email: string | null
          expire_date: string | null
          id: string
          is_deleted: boolean | null
          method_type: Database["public"]["Enums"]["payment_type"] | null
          phone_number: string | null
          updatedat: string | null
          user_id: string | null
        }
        Insert: {
          acount_name?: string | null
          card_cvc?: string | null
          card_number?: string | null
          created_at?: string | null
          deletedat?: string | null
          email?: string | null
          expire_date?: string | null
          id?: string
          is_deleted?: boolean | null
          method_type?: Database["public"]["Enums"]["payment_type"] | null
          phone_number?: string | null
          updatedat?: string | null
          user_id?: string | null
        }
        Update: {
          acount_name?: string | null
          card_cvc?: string | null
          card_number?: string | null
          created_at?: string | null
          deletedat?: string | null
          email?: string | null
          expire_date?: string | null
          id?: string
          is_deleted?: boolean | null
          method_type?: Database["public"]["Enums"]["payment_type"] | null
          phone_number?: string | null
          updatedat?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "payment_method_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      products: {
        Row: {
          categoriy_id: string | null
          created_at: string | null
          deletedat: string | null
          description: string | null
          id: string
          imageurl: string | null
          is_deleted: boolean | null
          name: string | null
          price: number | null
          restaurant_id: string | null
          updatedat: string | null
        }
        Insert: {
          categoriy_id?: string | null
          created_at?: string | null
          deletedat?: string | null
          description?: string | null
          id?: string
          imageurl?: string | null
          is_deleted?: boolean | null
          name?: string | null
          price?: number | null
          restaurant_id?: string | null
          updatedat?: string | null
        }
        Update: {
          categoriy_id?: string | null
          created_at?: string | null
          deletedat?: string | null
          description?: string | null
          id?: string
          imageurl?: string | null
          is_deleted?: boolean | null
          name?: string | null
          price?: number | null
          restaurant_id?: string | null
          updatedat?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "products_categoriy_id_fkey"
            columns: ["categoriy_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "products_restaurant_id_fkey"
            columns: ["restaurant_id"]
            isOneToOne: false
            referencedRelation: "restaurant"
            referencedColumns: ["id"]
          },
        ]
      }
      restaurant: {
        Row: {
          address_id: string | null
          created_at: string | null
          deletedat: string | null
          id: string
          is_deleted: boolean | null
          name: string | null
          updatedat: string | null
        }
        Insert: {
          address_id?: string | null
          created_at?: string | null
          deletedat?: string | null
          id?: string
          is_deleted?: boolean | null
          name?: string | null
          updatedat?: string | null
        }
        Update: {
          address_id?: string | null
          created_at?: string | null
          deletedat?: string | null
          id?: string
          is_deleted?: boolean | null
          name?: string | null
          updatedat?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "restaurant_address_id_fkey"
            columns: ["address_id"]
            isOneToOne: false
            referencedRelation: "addresses"
            referencedColumns: ["id"]
          },
        ]
      }
      users: {
        Row: {
          auth_id: string | null
          created_at: string | null
          email: string
          id: string
          is_deleted: boolean | null
          name: string | null
          phone: string | null
          role: string | null
          updated_at: string | null
        }
        Insert: {
          auth_id?: string | null
          created_at?: string | null
          email: string
          id?: string
          is_deleted?: boolean | null
          name?: string | null
          phone?: string | null
          role?: string | null
          updated_at?: string | null
        }
        Update: {
          auth_id?: string | null
          created_at?: string | null
          email?: string
          id?: string
          is_deleted?: boolean | null
          name?: string | null
          phone?: string | null
          role?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      add_user_order_data: {
        Args: {
          order_data: Json
          user_id: string
        }
        Returns: string
      }
      create_order: {
        Args: {
          user_id: string
          cart_data: Json
        }
        Returns: undefined
      }
      insert_order_data: {
        Args: {
          order_data: Json
          user_id: string
        }
        Returns: undefined
      }
    }
    Enums: {
      order_status:
        | "pending"
        | "received"
        | "preparing"
        | "confirmed"
        | "cancelled"
        | "out for delivery"
      ordertype: "pick up" | "delivery"
      payment_type: "visa" | "super visa" | "paypal" | "cash"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
