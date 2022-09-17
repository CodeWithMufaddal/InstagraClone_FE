import React, { useState } from 'react'
import './Chat.css'
import { useUserAuth } from "../../Context/UserAuthContext";
import ChatUser from './ChatUser';
import Messages from './Messages';

const Chat = () => {
   const { user } = useUserAuth();
   console.log("user in chat", user);
   document.title = 'Inbox • Chats'
   return (

      <div className="_a1bn  _9-f2 _9-f7 _9-fd _a8ww _9-fm" style={{ height: "100%", width: "100%" }}>
         <div className="_9zgw">
            <div className="_9-ej _9-el _a1bn  _9-f2 _9-f7 _9-ff _9-fi _9-fm _9-fp" style={{ height: "100%", width: "100%", maxWidth: "935px" }}>

               <div className="_9zgx">
                  <div className="_9_h_">
                     <div className="_9_i0">
                        <div className="_9_i4">
                           <div className="_a1bn  _9-f2 _9-f7 _9-fd _a8ww _9-fm" style={{ Width: '100%' }} >
                              <button type='button' aria-label="Switch Accounts - _khadija_5253" className="_9-93 _9-94 _9-98">
                                 <div className="_a1bn  _9-f2 _9-f5 _9-ff _9-fi _9-fm w-100">
                                    <div className="_9-d2">
                                       <div className="_9_68 _9_6c _9_6i _9_6j _9_6x _9_6_">{user.username}</div>
                                    </div>
                                 </div>
                              </button>
                           </div>
                        </div>
                     </div>


                  </div>
                  <div className="_a1bn  _9-f2 _9-f7 _9-fd _a8ww _9-fm _9-fp h-100 ">
                     <div className="_a1bn  _9-f2 _9-f7 _9-fd _a8ww _9-fl h-100 " >
                        <div className="_9-d4">
                           <div className="_9-d3" style={{ height: "100%", overflow: "hidden auto" }}>
                              <div style={{ flexDirection: "column", paddingBottom: "0px", paddingTop: "0px" }} >

                                 {[...Array(20)].map((e, i) => {
                                    return (
                                       < ChatUser key={i} className="" />
                                    )
                                 })}

                              </div>

                           </div>
                        </div>
                     </div>
                  </div>
               </div>


               <div className=" _9-es _a1bn  _9-f2 _9-f7 _9-fd _a8ww _9-fl" style={{ height: "100%" }}>
                  <div className="_a38-">
                     <div className="_9_h_">
                        <div className="_9_i0 _9_i1">
                           <div className="_9_i4">
                              <div className="_a1bn  _9-f2 _9-f5 _9-fd _9-fi _9-fm" style={{ height: "100%" }}>
                                 <div className="_a1bn  _9-f2 _9-f7 _9-fd _a8ww _9-fm  _9-gz">
                                    <button type="button" className="_9-93 _9-94 _9-98">
                                       <div className="_a1bn  _9-f2 _9-f4 _9-fe _9-fi _9-fm">
                                          <span className="_9_hw" role="link" tabIndex="-1" style={{ width: "24px", height: "24px" }}>
                                             <img src="/propic.jpeg" alt="abc profile picture" className="_9_hy" draggable="false" crossOrigin="anonymous" />
                                          </span>
                                       </div>
                                    </button>
                                 </div>

                                 <div className="_a1bn  _9-f2 _9-f7 _9-fd _a8ww _9-fn  _9-g-" style={{ minwidth: "0px" }}>
                                    <button className="_9-93 _9-94 _9-96 _9-99" type="button">
                                       <div className="_a1bn  _9-f2 _9-f3 _9-ff _a8ww _9-fm" style={{ height: "40px" }}>
                                          <div className="_a1bn  _9-f2 _9-f7 _9-fd _9-fi _9-fm">
                                             <div className="_9_68 _9_6c _9_6i _9_6j _9_6x">Manoharsinh sodha</div>
                                          </div>
                                          <div className="_a1bn  _9-f2 _9-f3 _9-fd _a8ww _9-fm  _9-hx">
                                             <div className="_9_68 _9_6a _9_6h _9_6k _9_6t">Active now</div>
                                          </div>
                                       </div>
                                    </button>
                                 </div>
                              </div>
                           </div>
                           <div className="_9_i2 _9_i5">
                              <button className="_9-mn" type="button">
                                 <div className="_9-mq">
                                    <svg aria-label="View Thread Details" className="_9zn7" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24">
                                       <circle className="" cx="12.001" cy="12.005" r="10.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" strokeLinejoin="round" />
                                       <circle cx="11.819" cy="7.709" r="1.25" />
                                       <line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="10.569" x2="13.432" y1="16.777" y2="16.777" />
                                       <polyline points="10.569 11.05 12 11.05 12 16.777" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" strokeLinejoin="round" />
                                    </svg>
                                 </div>
                              </button>
                           </div>
                        </div>

                     </div>

                  </div>

                  {/* ==== */}
                  <div className="_9-7j">
                     <div className="_9-7k _9-7l">

                        <div className="_a1bn  _9-f2 _9-f7 _9-fe _a8ww _9-fl" style={{ height: "100%", width: "100%" }}>
                           <div className="_9-7m _9-7o">
                              <div className="">
                                 <Messages />
                              </div>
                           </div>
                        </div>


                        <div className="_a1bn  _9-f2 _9-f7 _9-fd _a8ww _9-fm">
                           <div className="_a1bn  _9-f2 _9-f7 _9-fd _a8ww _9-fm  _9-fy _9-g8">
                              <div className="_9zlc">
                                 <div>
                                    <button className="_9-mn" type="button" >
                                       <div className="_9-mq">
                                          <svg aria-label="Emoji" className="_9zn7" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24" >
                                             <path d="M15.83 10.997a1.167 1.167 0 101.167 1.167 1.167 1.167 0 00-1.167-1.167zm-6.5 1.167a1.167 1.167 0 10-1.166 1.167 1.167 1.167 0 001.166-1.167zm5.163 3.24a3.406 3.406 0 01-4.982.007 1 1 0 10-1.557 1.256 5.397 5.397 0 008.09 0 1 1 0 00-1.55-1.263zM12 .503a11.5 11.5 0 1011.5 11.5A11.513 11.513 0 0012 .503zm0 21a9.5 9.5 0 119.5-9.5 9.51 9.51 0 01-9.5 9.5z" />
                                          </svg>
                                       </div>
                                    </button>
                                 </div>

                                 <div className="_a1bn  _9-f2 _9-f7 _9-fd _a8ww _9-fl  _9-he">
                                    <textarea name="" id="" style={{ height: "36px" }} className="" placeholder="Message..."></textarea>
                                 </div>

                                 <button className="_9-mn" type="button" >
                                    <div className="_9-mq">
                                       <svg aria-label="Add Photo or Video" className="_9zn7" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24" >
                                          <path d="M6.549 5.013A1.557 1.557 0 108.106 6.57a1.557 1.557 0 00-1.557-1.557z" fillRule="evenodd" />
                                          <path d="M2 18.605l3.901-3.9a.908.908 0 011.284 0l2.807 2.806a.908.908 0 001.283 0l5.534-5.534a.908.908 0 011.283 0l3.905 3.905" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                                          <path d="M18.44 2.004A3.56 3.56 0 0122 5.564h0v12.873a3.56 3.56 0 01-3.56 3.56H5.568a3.56 3.56 0 01-3.56-3.56V5.563a3.56 3.56 0 013.56-3.56z" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" strokeLinejoin="round" />
                                       </svg>
                                    </div>
                                 </button>

                                 <button className="_9-mn" type="button" >
                                    <div className="_9-mq">
                                       <svg aria-label="Like" className="_9zn7" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24" >
                                          <path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z" />
                                       </svg>
                                    </div>
                                 </button>
                              </div>
                           </div>
                        </div>

                     </div>
                  </div>

               </div>
            </div>
         </div>
      </div>
   )
}

export default Chat