import  {post} from "./posts"
import BottomNav from './BottomNav'
import { Route, Router } from "react-router-dom";
const posts :PostData[] = [
    {
      userName: "Mazen Mohamed",
      userImageSource: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
      imgSource: "https://cdn.thewirecutter.com/wp-content/media/2021/01/iphone11cases-2048px-8143.jpg",
      title:"Blue iphone case",
      price: 320,
      priceType: "AED",
      numberOflikes: "32",
      description: "Good quailty... Fast Shipping...",
      hashtagArray: ["#phone","#phonecase","#iphone"]
    },
    {
      userName: "Mohamed Abdo",
      userImageSource: "https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg",
      imgSource: "https://cdn.britannica.com/73/182873-050-E1C686F4/Chris-Hemsworth-Thor-Thor-The-Dark-World.jpg",
      title:"Thor's Gray Hammer",
      price: 1000,
      priceType: "AED",
      numberOflikes: "40",
      description: "Good quailty... Fast Shipping...",
      hashtagArray: ["#phone","#phonecase","#iphone"]
    },
    {
      userName: "Basma Adel",
      userImageSource: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&w=1000&q=80",
      imgSource: "https://hips.hearstapps.com/hmg-prod/images/ghi-10bestphonecases-1663335912.jpg?resize=1200:*",
      title:"Pink iphone case",
      price: 320,
      priceType: "AED",
      numberOflikes: "60",
      description: "Good quailty... Fast Shipping...",
      hashtagArray: ["#phone","#phonecase","#iphone"]
    },
    {
      userName: "Maryam Mohamed",
      userImageSource: "https://image6.photobiz.com/2090/6_20200320132436_17431602_large.jpg",
      imgSource: "https://cdn.thewirecutter.com/wp-content/media/2021/12/iphonecases-2048px-6939.jpg",
      title:"Gray iphone case",
      price: 320,
      priceType: "AED",
      numberOflikes: "32",
      description: "Good quailty... Fast Shipping...",
      hashtagArray: ["#phone","#phonecase","#iphone"]
    },
    {
      userName: "Shahd Mohamed",
      userImageSource: "https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg",
      imgSource: "https://cdn.thewirecutter.com/wp-content/media/2021/12/iphonecases-2048px-6939.jpg",
      title:"Gray iphone case",
      price: 180,
      priceType: "AED",
      numberOflikes: "18",
      description: "Good quailty... Fast Shipping...",
      hashtagArray: ["#phone","#phonecase","#iphone"]
    }
    ,
    {
      userName: "Sama Mohamed",
      userImageSource: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu5v7sEZrHYCwRUY_wsCoNGnv2IbipToLW6pooYKga&s",
      imgSource: "https://cdn.thewirecutter.com/wp-content/media/2021/12/iphonecases-2048px-6939.jpg",
      title:"Gray iphone case",
      price: 400,
      priceType: "AED",
      numberOflikes: "80",
      description: "Good quailty... Fast Shipping...",
      hashtagArray: ["#phone","#phonecase","#iphone"]
    }
    ,
    {
      userName: "Maryam Mohamed",
      userImageSource: "https://image6.photobiz.com/2090/6_20200320132436_17431602_large.jpg",
      imgSource: "https://cdn.thewirecutter.com/wp-content/media/2021/12/iphonecases-2048px-6939.jpg",
      title:"Gray iphone case",
      price: 320,
      priceType: "AED",
      numberOflikes: "32",
      description: "Good quailty... Fast Shipping...",
      hashtagArray: ["#phone","#phonecase","#iphone"]
    }
    ,
    {
      userName: "Maryam Mohamed",
      userImageSource: "https://image6.photobiz.com/2090/6_20200320132436_17431602_large.jpg",
      imgSource: "https://cdn.thewirecutter.com/wp-content/media/2021/12/iphonecases-2048px-6939.jpg",
      title:"Gray iphone case",
      price: 320,
      priceType: "AED",
      numberOflikes: "32",
      description: "Good quailty... Fast Shipping...",
      hashtagArray: ["#phone","#phonecase","#iphone"]
    }
    ,
    {
      userName: "Maryam Mohamed",
      userImageSource: "https://image6.photobiz.com/2090/6_20200320132436_17431602_large.jpg",
      imgSource: "https://cdn.thewirecutter.com/wp-content/media/2021/12/iphonecases-2048px-6939.jpg",
      title:"Pink iphone case",
      price: 320,
      priceType: "AED",
      numberOflikes: "32",
      description: "Good quailty... Fast Shipping...",
      hashtagArray: ["#phone","#phonecase","#iphone"]
    }
    ,
    {
      userName: "Maryam Mohamed",
      userImageSource: "https://image6.photobiz.com/2090/6_20200320132436_17431602_large.jpg",
      imgSource: "https://cdn.thewirecutter.com/wp-content/media/2021/12/iphonecases-2048px-6939.jpg",
      title:"Pink iphone case",
      price: 320,
      priceType: "AED",
      numberOflikes: "32",
      description: "Good quailty... Fast Shipping...",
      hashtagArray: ["#phone","#phonecase","#iphone"]
    }
    ,
    {
      userName: "Maryam Mohamed",
      userImageSource: "https://image6.photobiz.com/2090/6_20200320132436_17431602_large.jpg",
      imgSource: "https://cdn.thewirecutter.com/wp-content/media/2021/12/iphonecases-2048px-6939.jpg",
      title:"Pink iphone case",
      price: 320,
      priceType: "AED",
      numberOflikes: "32",
      description: "Good quailty... Fast Shipping...",
      hashtagArray: ["#phone","#phonecase","#iphone"]
    }
    ,
    {
      userName: "Maryam Mohamed",
      userImageSource: "https://image6.photobiz.com/2090/6_20200320132436_17431602_large.jpg",
      imgSource: "https://cdn.thewirecutter.com/wp-content/media/2021/12/iphonecases-2048px-6939.jpg",
      title:"Pink iphone case",
      price: 320,
      priceType: "AED",
      numberOflikes: "32",
      description: "Good quailty... Fast Shipping...",
      hashtagArray: ["#phone","#phonecase","#iphone"]
    }
    ,
    {
      userName: "Maryam Mohamed",
      userImageSource: "https://image6.photobiz.com/2090/6_20200320132436_17431602_large.jpg",
      imgSource: "https://cdn.thewirecutter.com/wp-content/media/2021/12/iphonecases-2048px-6939.jpg",
      title:"Pink iphone case",
      price: 320,
      priceType: "AED",
      numberOflikes: "32",
      description: "Good quailty... Fast Shipping...",
      hashtagArray: ["#phone","#phonecase","#iphone"]
    }
    ,
    {
      userName: "Maryam Mohamed",
      userImageSource: "https://image6.photobiz.com/2090/6_20200320132436_17431602_large.jpg",
      imgSource: "https://cdn.thewirecutter.com/wp-content/media/2021/12/iphonecases-2048px-6939.jpg",
      title:"Pink iphone case",
      price: 320,
      priceType: "AED",
      numberOflikes: "32",
      description: "Good quailty... Fast Shipping...",
      hashtagArray: ["#phone","#phonecase","#iphone"]
    }
    ,
    {
      userName: "Maryam Mohamed",
      userImageSource: "https://image6.photobiz.com/2090/6_20200320132436_17431602_large.jpg",
      imgSource: "https://cdn.thewirecutter.com/wp-content/media/2021/12/iphonecases-2048px-6939.jpg",
      title:"Pink iphone case",
      price: 320,
      priceType: "AED",
      numberOflikes: "32",
      description: "Good quailty... Fast Shipping...",
      hashtagArray: ["#phone","#phonecase","#iphone"]
    }
  ];

export default function Home(){
  return (
      <div>
        <BottomNav />
        {post(posts)}
      </div>
  )
}
