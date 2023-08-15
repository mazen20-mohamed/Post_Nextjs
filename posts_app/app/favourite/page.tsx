import variables from "../variables.module.scss"
import { createPost } from "../posts"
import { cookies } from 'next/headers'
import BottomNav from '../BottomNav'
export default async function Favourites() {
return (

  <div>
    <BottomNav />
    <div className={variables.grid}>
      {
        cookies().getAll().map(p=> createPost(JSON.parse(p.value)))
      }
    </div>
  </div>
 
  )
}
