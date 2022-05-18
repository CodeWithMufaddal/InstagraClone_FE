import React, { useEffect, useState } from 'react'
import './Main.css'
import Stories from './Stories'
import Post from './Post/Post'
import Suggestion from './Suggestion'

const Main = () => {





   //  ________________________________________________________________________________________________

   return (
      <div className="main page-center">
         <div className="sliderContainer">


            <Stories />

            <div className="postContainer">
               <div className="post__ProfilePic">
                  {[...Array(50)].map((e, i) => {
                     return (
                        < Post key={i} className="" />
                     )
                  })}


               </div>
            </div>

         </div>
         <Suggestion />

      </div >
   )
}

export default Main