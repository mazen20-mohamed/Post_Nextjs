"use client"
import variables from "../app/variables.module.scss"
import {Avatar} from "@mui/material"
import FavoriteIcon from "@mui/icons-material/Favorite"
import {Loved} from "./handlingLovedPosts"
import CheckLoved from "./handlingLovedPosts"
import { use } from "react"
export default function CreatePost(p:PostData){
    // const res = use(CheckLoved(p));
        return (
            <FavoriteIcon className={variables.favorite} onClick={()=>Loved(p)} />
        )
}
