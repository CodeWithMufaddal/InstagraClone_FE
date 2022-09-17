import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login-SignUp.css";
import { setDoc, doc, Timestamp } from "firebase/firestore";
import { auth, db } from "../../firebase";
import ErrorBox from "../Home/ErrorBox";
import { useUserAuth } from "../../Context/UserAuthContext";


const SignUp = () => {
  
  const { signUp, setProgress, googleSignIn } = useUserAuth();
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [fullname, setFullName] = useState("");
  const [username, setUserName] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const noSpace = username.match(/^\S*$/)  ? true : false;
  const ifquery = email === "" || fullname === "" || username === "" || password.length <= 5 || error !== "" || !noSpace;



  useEffect(() => {
    let timer = setTimeout(() => {
      setError("")
    }, 3000);
    return () => clearTimeout(timer);
  }, [error])

  const handleSubmit = async (e) => {
    setProgress(10)
    e.preventDefault();
    setProgress(20)
    setError("");
    setProgress(30)
    try {

      const result = await signUp(email, password);
      console.log("signup1", result)
      await setDoc(doc(db, 'Users', result.user.uid),
        {
          uid: result.user.uid,
          email: email,
          fullname: fullname,
          username: username,
          password: password,
          createdAt: Timestamp.fromDate(new Date()),
          isOnline: true,
        })
      console.log("signup2", result)
      setEmail("");
      setFullName("");
      setUserName("");
      setPassword("");
      setError("");
      setProgress(100)
      navigate("/");
    } catch (err) {
      setProgress(100)
      setError(err.message);

      console.log(err.message)
    }
  };




  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    setProgress(10);

    try {
      setProgress(50);
      const result = await googleSignIn();
      console.log("User Data sign up ", result.user)
      await setDoc(doc(db, 'Users', result.user.uid),
        {
          uid: result.user.uid,
          email: result.user.email,
          fullname: result.user.displayName,
          photoURL: result.user.photoURL,
          username: username,
          password: password,
          createdAt: result.user.metadata.creationTime,
          lastLogin: result.user.metadata.lastSignInTime,
          isOnline: true,
        })

      setProgress(100);
      navigate("/home");
    } catch (error) {
      setProgress(100);
      console.log(error.message);
    }
  };




  return <section className="LoginSection">
    {error && <ErrorBox msg={error} />}
    <main className="mainLoginPage">
      <article className="pageCenter">


        <div className="Login">
          <div className="LoginContainer">
            {/* <div className="LoginMainPage"> */}

            <div className="TopIcon">
              <div
                aria-disabled="false"
                role="button"
                tabIndex="0"
                style={{ cursor: "pointer" }}
              >
                <img
                  src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"
                  srcSet="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"
                  alt="Instagram"
                  className="TopIconImg"
                />
              </div>
            </div>

            <div className="LoginFormContainer">

              <form
                action=""
                method="POST"
                id="loginForm"
                className="d-flex flex-column"
                onSubmit={handleSubmit}
              >
                <div className="formContainer SignUpFormContainer">

                  <h2 className="funTexth2" >Sign up to see photos and videos from your friends.</h2>

                  <div className="LogInContainer LoginbtnDiv">
                    <button type="button" className=" btn btn-primary basicbtn logInoption FBSignIn" >
                      <span className="LoginfbbtnImg">

                      </span>
                      <span className=" LoginfbbtnText LoginbtnText">
                        Sign Up With facebook
                      </span>
                    </button>
                  </div>

                  <div className="LogInContainer LoginbtnDiv">
                    <button type="button" className="btn btn-danger basicbtn logInoption GoogleLogIn" onClick={handleGoogleSignIn} >
                      <span className="LoginGbtnImg"></span>
                      <span className="LoginGbtnText LoginbtnText">
                        Sign Up With Google
                      </span>
                    </button>
                  </div>

                  <div className="LogInContainer hrOrDividerContainer">
                    <hr className=" hrOrDivider" />
                    <div className="or">OR</div>
                    <hr className=" hrOrDivider" />
                  </div>


                  <div className="formInnerDiv ">
                    <div className="FormInputDiv">
                      <input
                        aria-label="email"
                        aria-required="true"
                        autoCapitalize="off"
                        autoCorrect="off"
                        name="username"
                        type="email"
                        className=""
                        id="exampleInputEmail1"
                        placeholder=" email"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="formInnerDiv ">
                    <div className="FormInputDiv">
                      <input
                        aria-label="Full Name"
                        aria-required="true"
                        autoCapitalize="off"
                        autoCorrect="off"
                        maxLength="75"
                        name="username"
                        type="text"
                        className=""
                        id="exampleInputEmail1"
                        placeholder="Full Name"
                        onChange={(e) => setFullName(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="formInnerDiv ">
                    <div className="FormInputDiv">
                      <input
                        aria-label="Username"
                        aria-required="true"
                        autoCapitalize="off"
                        autoCorrect="off"
                        maxLength="75"
                        name="Username"
                        type="text"
                        className=""
                        id="exampleInputEmail1"
                        placeholder="Username"
                        onChange={(e) => {
                          setUserName(e.target.value)

                          noSpace ? setError("") : setError("Username can't contain spaces")
                        }}
                      />
                    </div>
                  </div>

                  <div className="formInnerDiv">
                    <div className="FormInputDiv">
                      <input
                        type="password"
                        minLength='6'
                        className=""
                        id="exampleInputPassword1"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="LogInContainer">
                    <button type="submit" className={`  LogInBtn basicbtn  ${ifquery ? '' : 'activebtn'} `} disabled={ifquery} >
                      Sign Up
                    </button>
                  </div>



                </div>



              </form>

            </div>
          </div>


          {/* ==== 2 ==== */}

          <div className="LoginContainer ">
            <div className="DontHaveAc">
              <p>Have an account?
                <Link to="/accounts/login" tabIndex="0">
                  <span> Log in</span>
                </Link>
              </p>
            </div>
          </div>

          <div className="GetTheApp">
            <p className="GetTheAppP">Get the app</p>
            <div className="GetTheAppIcons">
              <a
                aria-label="Download on the App Store"
                href="https://apps.apple.com/app/instagram/id389801252?vt=lo"
                tabIndex="0"
                target="_blank"
              >
                <img
                  alt="Download on the App Store"
                  src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png"
                />
              </a>

              <a
                aria-label="Download on the App Store"
                href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3D8344EB8C-2DD3-400A-9A5A-BEA486C18AEC%26utm_content%3Dlo%26utm_medium%3Dbadge"
                tabIndex="0"
                target="_blank"
              >
                <img
                  alt="Download on the App Store"
                  src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png"
                />
              </a>
            </div>
          </div>
        </div>
      </article>
    </main>

  </section>
};

export default SignUp;
