"use server"
import { cookies } from 'next/headers'
    const Loved = async function getLoved(post:PostData){
            cookies().set(post.userName+post.title,JSON.stringify(post))
        }

    export default async function CheckLoved(post:PostData){
        const cok = cookies().get(post.userName+post.title)
        if(cok?.value ==undefined){
            return true;
        }
        return false;
        
    }
    
export {Loved};
