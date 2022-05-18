import React from 'react'

const Suggestion = () => {
   return (
      <div className="suggestions">
         <div className="userSuggestionsContainer">
            <div className="userProfileSuggestion">
               <div className="d-flex">
                  <div className="userProfileimg">
                     <img src="propic.jpeg" alt="Profile Pic" />
                  </div>
                  <div className="profiledisc">
                     <div className="userProfilename"><span>_khadija_5253</span></div>
                     <div className="seconderyColor profilediscseconderyfont userProfilemutename "> <span>Khadija Daudivohra</span> </div>
                  </div>
               </div>
               <a href="#" className="profilefollowlink" >
                  Switch
               </a>
            </div>
         </div>


         <div className="profileSuggestion">
            <div className="profileSuggestionTitle seconderyColor" >
               <div className="">
                  <div>Suggestions For You</div>
               </div>
               <a href="#">See All</a>
            </div>

            {[...Array(5)].map((e, i) => {
               return (
                  <div key={i} className="profileSuggestionDiv">
                     <div className="d-flex">
                        <div className="profilePic">
                           <img src="https://th.bing.com/th/id/OIP.Z306v3XdxhOaxBFGfHku7wHaHw?w=202&h=211&c=7&r=0&o=5&dpr=1.25&pid=1.7" alt="Profile Pic" />
                        </div>
                        <div className="profiledisc">
                           <div className="profilediscname"><span>_khadija_5253</span></div>
                           <div className="seconderyColor profilediscseconderyfont "> <span>New to Instagram</span> </div>
                        </div>
                     </div>
                     <a href="#" className="profilefollowlink" >
                        Follow
                     </a>
                  </div>
               )
            })}
         </div>

         <div className="footer">
            <div className="footerlinkContainer">
               <a href="#" className="footerlink "> <span> About     </span>  </a>
               <a href="#" className="footerlink "> <span> Help      </span>  </a>
               <a href="#" className="footerlink "> <span> Press     </span>  </a>
               <a href="#" className="footerlink "> <span> API       </span>  </a>
               <a href="#" className="footerlink "> <span> Jobs      </span>  </a>
               <a href="#" className="footerlink "> <span> Privacy   </span>  </a>
               <a href="#" className="footerlink "> <span> Terms     </span>  </a>
               <a href="#" className="footerlink "> <span> Locations </span>  </a>
               <a href="#" className="footerlink "> <span> Language  </span>  </a>
            </div>

            <span className="">
               © 2022 INSTAGRAM FROM META
            </span>
         </div>
      </div>

   )
}

export default Suggestion