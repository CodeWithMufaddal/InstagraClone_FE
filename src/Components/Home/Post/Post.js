import React from 'react'
import './Post.css'
import Card from '../Card.tsx';
import Footer from './Footer';

const Post = () => {
   return (
      <article className="post" role="presentation" tabIndex="-1">
         <div className="postBox">

            <div className="postUpperContainer">
               <div className="postUpper">
                  <header className="postUpperHeader">
                     <div className="userStories ">
                        <button className="storiesbtn">
                           <div className="Storieprofile " style={{ width: "40px", height: "40px" }}>
                              <span style={{ width: "36px", height: "36px" }}>
                                 <img
                                    className="storieprofilePic"
                                    src="propic.jpeg"
                                    alt="stories Profilepic"
                                    draggable="false"
                                 />
                              </span>
                           </div>
                        </button>
                     </div>
                     <div className="postUpperUsername">
                        <div className="stories__userName seconderyColor">
                           <span className="postUpperUsernameSpan">
                              <a className="postUpperUsernameLink" href="www.instagram.com/_khadija_5253" role="link" tabIndex="0" >
                                 _khadija_5253
                              </a>
                           </span>
                        </div>
                     </div>

                  </header>


                  <button className="postUppermenubtn">
                     <svg aria-label="More options" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24" >
                        <circle cx="12" cy="12" r="1.5"></circle>
                        <circle cx="6" cy="12" r="1.5"></circle>
                        <circle cx="18" cy="12" r="1.5"></circle>
                     </svg>
                  </button>
               </div>
            </div>


            <div className="postMiddel">
               <button>
                  <div className="postMiddel__image">
                     <img src="propic.jpeg" alt="post image" />
                  </div>
               </button>
            </div>

            <Footer />

         </div>
      </article>
   )
}

export default Post