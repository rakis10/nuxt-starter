import { defineEventHandler } from 'h3';
import {serverSupabaseClient} from "#supabase/server";
import {Database} from "~/types/supabase";
export default defineEventHandler(async (event) => {
    const client = serverSupabaseClient<Database>(event)
    const query = getQuery(event)
    if (query){

        const { data: blog, error } = await client
            .from('blog')
            .select('*').like('title',`${query.name}%`)
        return {
            blog
        }
    }else{
        const { data } = await client
            .from('blog')
            .select('*')
        return {
            data
        }
    }

    // const client = serverSupabaseClient<Database>(event)
    // const { data, error } = await client.from('tasks').select('id, title, completed').eq('user', user.id).order('created_at')
    // if (error) {
    //     throw createError({ statusMessage: error.message })
    // }
    //
    // return data

})
