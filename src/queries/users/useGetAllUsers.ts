import { supabase } from "@/src/services/supabase/client"
import { useQuery } from "@tanstack/react-query"


export const useGetAllUsers=()=>{
    return useQuery({
        queryKey:['users'],
        queryFn:GetAllUsers
    })
}

const GetAllUsers=async() =>{
    try {
        const {data:User,error}=await supabase
        .from("users")
        .select("*")
        
        if(error) throw new Error("error in get users");
        return User;
    } catch (error:any) {
        console.error(error)
    }
}