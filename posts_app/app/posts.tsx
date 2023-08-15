import variables from "../app/variables.module.scss"
import {Avatar} from "@mui/material"
import FavoriteIcon from "@mui/icons-material/Favorite"
import CreatePost from "./CreatePost"

function createPost(p:PostData){
            return (
                <div className={variables.card}>
            <div className={variables.post_header}>
                <Avatar src= {p.userImageSource} alt="user's photot"></Avatar>

                <span>{p.userName}</span>
            </div>
            <div className={variables.post_img}>
                <img src={p.imgSource} alt="post of the user"></img>

                <h4 className={variables.title}>{p.title}</h4>

                <h3 className={variables.price}>{p.priceType} {p.price}</h3>
                
                <CreatePost {...p}/>

                <div style={{flexDirection: "row" , display: "flex", fontWeight: "bolder" , alignItems: "center"}}>

                    <FavoriteIcon style={{color : variables.blue_heart,marginLeft:5 }}/>

                    <span style={{color:"blue" , marginLeft:10}}> {p.numberOflikes} likes</span>
                </div>
            </div> 
            <div className={variables.footer}>
                
            <h6 style={{color: "grey",marginLeft:10}}>{p.description}</h6>

            <h6 style={{color:variables.blue_heart,marginLeft:10}}>{p.hashtagArray.join('  ')}</h6>
            </div>
        </div>
            )
        }

    function post(posts:PostData[]){
        
    const timeline = posts.map(p =>
        createPost(p)
    )
    return (
        <div className={variables.grid}>
            {timeline}
        </div>
    )
}
export {post,createPost};
