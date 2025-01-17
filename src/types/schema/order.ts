import { Enum } from "@/src/services/supabase/enum.types"
import { Row } from "@/src/services/supabase/table.types"

 
export type orderType=Enum<"ordertype">
export type orderStatus=Enum<"Enum_Status">
export type orders=Row<"Orders">