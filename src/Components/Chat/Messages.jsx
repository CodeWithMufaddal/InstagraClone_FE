import React, { useState, useEffect } from 'react'
import './Chat.css'
// import { db } from '../../firebase'

const Messages = () => {

   const [message, setMessage] = useState([])

   // useEffect(() => {
   //    db.collection('messages').orderBy('createdAt', 'asc').limit(25).onSnapshot(snapshot => {
   //       setMessage(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })))
   //    })
   //    // onSnapshot(snapshot => {})
   // }, [])




   return (

      // message.map(({ id, message, photoURL }) => (
      [...Array(2)].map(() => (

         <div className="_a1bn  _9-f2 _9-f4 _9-fd _9-fi _9-fm">
            <div className="_a1bn  _9-f2 _9-f7 _9-fd _a8ww _9-fm  _9-gh _9-hf">
               <div className="_a1bn  _9-f2 _9-f7 _9-fd _a8ww _9-fm"  >
                  <a href="" className="oajrlxb2 gs1a9yip g5ia77u1 mtkw9kbi tlpljxtp qensuy8j ppp5ayq2 goun2846 ccm00jje s44p3ltw mk2mc5f4 rt8b4zig n8ej3o3l agehan2d sk4xxmp2 rq0escxv nhd2j8a9 j83agx80 mg4g778l cbu4d94t pfnyh3mw p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x tgvbjcpo hpfvmrgz jb3vyjys rz4wbd8a qt6c0cv9 a8nywdso l9j0dhe7 i1ao9s8h esuyzwwr f1sip0of du4w35lb lzcic4wl _9_hw _9_hx _9zo3 _a6hd" role="listbox" tabIndex="0" style={{ height: "24px", width: "24px" }} >
                     <img src="/propic.jpeg" alt="abc's profile picture" className="_9_hy" crossOrigin="anonymous" />
                  </a>

               </div>
            </div>



            <div className="_9-2i" role="listbox" tabIndex="0">
               <div className="">
                  <div className=" _a069 _a06a">
                     <div className="_9zmi _9zmj" role="listbox" tabIndex="0">
                        <div className=" _9-3x">
                           <div className=" _9-3_ _9-44">
                              <div className="_9_vs" role="button" tabIndex="-1">
                                 <div className="_a1bn  _9-f2 _9-f7 _9-ff _a8ww _9-fm  _9-fx _9-g7">
                                    <div className="_9_68 _9_6b _9_6h _9_6j _9_6w _9_70">
                                       <div className="_9_68 _9_6b _9_6h _9_6j _9_6t _9_6_">Ok as this is the massage will represent and as we will seeing hear is Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla ducimus iste, labore quia optio sunt odio possimus.</div>
                                    </div>
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
      )
   )

}

export default Messages