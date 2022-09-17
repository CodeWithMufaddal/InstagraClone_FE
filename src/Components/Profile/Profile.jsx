import React, { useState, useEffect } from "react";
import Camera from "../svg/Camera";
import Img from "../../image1.jpg";
import { storage, db, auth } from "../../firebase";
import { Link, useNavigate } from 'react-router-dom'
import {
   ref,
   getDownloadURL,
   uploadBytes,
   deleteObject,
} from "firebase/storage";
import { getDoc, doc, updateDoc } from "firebase/firestore";
import Delete from "../svg/Delete";
import { useUserAuth } from "../../Context/UserAuthContext";
import './Profile.css';
import ProfilePosts from "./ProfilePosts";






const Profile = () => {


   let randomImg = [
      "https://images.unsplash.com/photo-1651578496177-1b4605f13fe9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=428&q=80",

      "https://images.unsplash.com/photo-1649134360198-fca0efb8b6f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
      "https://images.unsplash.com/photo-1651578403332-65e82b38b045?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1651578852608-0200168d48f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1651578852608-0200168d48f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1651505329704-60cccba159bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1651548000238-f2e184717614?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      "https://images.unsplash.com/photo-1651580355755-8df5fa080f57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1651486315610-45c3590f6abb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      "https://images.unsplash.com/photo-1651581003788-4282f89a64e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",

   ]
   let ab = randomImg.length / 3

   const [img, setImg] = useState("");
   const { user, setUser } = useUserAuth();
   const Navigate = useNavigate();

   // useEffect(() => {
   //    getDoc(doc(db, "Users", user.uid)).then((docSnap) => {
   //       if (docSnap.exists) {
   //          setUser(docSnap.data());
   //       }
   //    });

   //    if (img) {
   //       const uploadImg = async () => {
   //          const imgRef = ref(
   //             storage,
   //             `avatar/${new Date().getTime()} - ${img.name}`
   //          );
   //          try {
   //             if (user.avatarPath) {
   //                await deleteObject(ref(storage, user.avatarPath));
   //             }
   //             const snap = await uploadBytes(imgRef, img);
   //             const url = await getDownloadURL(ref(storage, snap.ref.fullPath));

   //             await updateDoc(doc(db, "Users", user.uid), {
   //                avatar: url,
   //                avatarPath: snap.ref.fullPath,
   //             });

   //             setImg("");
   //          } catch (err) {
   //             console.log(err.message);
   //          }
   //       };
   //       uploadImg();
   //    }
   // }, [img]);

   const deleteImage = async () => {
      try {
         const confirm = window.confirm("Delete avatar?");
         if (confirm) {
            await deleteObject(ref(storage, user.avatarPath));

            await updateDoc(doc(db, "Users", user.uid), {
               avatar: "",
               avatarPath: "",
            });
            Navigate("/")
         }
      } catch (err) {
         console.log(err.message);
      }
   };
   return user ? (
      <main className="_a993 _a995">
         <div className="_aa_y _aa_z _aa_-">
            <header className="_aa_h">
               <div className="profileimgA">
                  <div className="profileimgB">
                     <div className="profileimgC">
                        <button className="profileimgD" type="button" >
                           <img src={user.photoURL ? user.photoURL : "./propic.jpeg"} alt={`${user.displayName}'s profile Photo`} className="profileimgE" />
                        </button>
                     </div>
                  </div>
               </div>
               <section className="profileinfo">
                  <div className="profileinfoA">
                     <h2 className="profileinfoA1" tabIndex="-1">{user.username}_mufaddal_M_</h2>
                     <div className="profileinfoA2">
                        <div className="profileinfoA2a">
                           <Link to="/">

                           </Link>
                        </div>
                     </div>
                     <div className="profileinfoA3">
                        <div className="profileinfoA3a">

                        </div>
                     </div>
                  </div>

                  <ul className="profileinfoB">
                     <li className="profileinfoB1"></li>
                     <li className="profileinfoB2"></li>
                     <li className="profileinfoB3"></li>
                  </ul>

                  <div className="profileinfoC"></div>
               </section>
            </header>


            <div className="profile_container">
               <div className="img_container">
                  <div className="_a1bn  _9-f2 _9-f7 _9-fd _a8ww _9-fm  _9-gz">
                     <button type="button" className="_9-93 _9-94 _9-98">
                        <div className="_a1bn  _9-f2 _9-f4 _9-fe _9-fi _9-fm">
                           <span className="_9_hw" role="link" tabIndex="-1" style={{ width: "24px", height: "24px" }}>
                              <img src={user.photoURL ? user.photoURL : "./propic.jpeg"} alt={`${user.displayName}'s profile Photo`} className="_9_hy" draggable="false" crossOrigin="anonymous" />
                           </span>
                        </div>
                     </button>
                  </div>
                  <div className="overlay">
                     <div>
                        <label htmlFor="photo">
                           <Camera />
                        </label>

                        {user.avatar ? <Delete deleteImage={deleteImage} /> : null}
                        <input
                           type="file"
                           accept="image/*"
                           style={{ display: "none" }}
                           id="photo"
                           onChange={(e) => setImg(e.target.files[0])}
                        />
                     </div>
                  </div>
               </div>
               <div className="text_container">
                  <h3>{user.displayName}</h3>
                  <p>{user.email}</p>
                  <hr />
                  {/* <small>Joined on: {user.createdAt.toDate().toDateString()}dd</small> */}
               </div>
               <div className="boxcontainer">

                  {randomImg.map((img, i) => {
                     return (
                        <ProfilePosts key={i} img={img} />
                     )
                  })}
               </div>



            </div>


         </div>
      </main>
   ) : Navigate("/accounts/login");
};


export default Profile;
