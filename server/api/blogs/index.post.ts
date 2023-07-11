import {serverSupabaseClient} from '#supabase/server';
import {defineEventHandler} from 'h3';
import {Database} from "~/types/supabase";

export default defineEventHandler(async (event) => {
    const client = serverSupabaseClient<Database>(event)
    const body = await readBody(event)
    console.log(body)
    const payload: Database['public']['Tables']['blog']['Insert'] = {title: body.title, description: body.description}


    if (body) {
        // @ts-ignore
        const {data, error} = await client
            .from('blog')
            .insert(payload)
            .select()
    }


    return {
        req: body
    }
    // const { data, error } = await client.from('tasks').select('id, title, completed').eq('user', user.id).order('created_at')
    // if (error) {
    //     throw createError({ statusMessage: error.message })
    // }
    //
    // return data

})
