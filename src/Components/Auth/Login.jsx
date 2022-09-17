import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login-SignUp.css";
import { useUserAuth } from "../../Context/UserAuthContext";
import { setDoc, doc, Timestamp } from "firebase/firestore";
import { auth, db } from "../../firebase";
import ErrorBox from "../Home/ErrorBox";



const Login = () => {

  //   Fire Base Authentication

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn, setProgress, signUp } = useUserAuth();
  const navigate = useNavigate();
  // const ifquery = ;

  let ifquery = email === "" || password === "" || error !== "" ? true : false

  useEffect(() => {

    setTimeout(() => {
      setError("")
    }, 3000);
  }, [error])



  const handleSubmit = async (e) => {
    e.preventDefault();
    setProgress(10);
    setError("");
    setProgress(20);
    try {

      setProgress(50);
      await logIn(email, password);
      setProgress(100);
      navigate("/home");
    } catch (err) {
      setProgress(100);
      if (err.message) {
        setError("Invalid Credentials Emali / Password ");
      }
      else {
        setError(err.message);
      }

    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    setProgress(10);

    try {
      setProgress(50);
      const GoogleLogIn = await googleSignIn();
      console.log(GoogleLogIn.user.email, "at g login email");
      console.log(GoogleLogIn.user.accessToken, "at login token");
      // try {
        await signUp(GoogleLogIn.user.email, GoogleLogIn.user.accessToken);
      // } catch (error) {
      //   await signUp(GoogleLogIn.user.email, GoogleLogIn.user.accessToken)
      // }

      setProgress(100);
      navigate("/home");
    } catch (error) {
      setProgress(100);
      console.log("This is error msg", error);
    }
  };

  return (
    <section className="LoginSection">
      {error && <ErrorBox msg={error} />}

      <main className="mainLoginPage">
        <article className="pageCenter">

          <div className="Login">
            <div className="LoginContainer">


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
                  <div className="formContainer">
                    <div className="formInnerDiv ">
                      <div className="FormInputDiv">
                        <input
                          aria-label="Phone number, username, or email"
                          aria-required="true"
                          autoCapitalize="off"
                          autoCorrect="off"
                          maxLength="75"
                          name="username"
                          type="email"
                          className=""
                          id="exampleInputEmail1"
                          placeholder="Phone number, username, or email"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="formInnerDiv">
                      <div className="FormInputDiv">
                        <input
                          type="password"
                          className=""
                          id="exampleInputPassword1"
                          placeholder="Password"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="LogInContainer">
                      <button type="submit" className={`LogInBtn basicbtn ${ifquery ? '' : 'activebtn'}`}
                        disabled={ifquery}
                      >
                        Log In
                      </button>
                    </div>

                    <div className="LogInContainer hrOrDividerContainer">
                      <hr className=" hrOrDivider" />
                      <div className="or">OR</div>
                      <hr className=" hrOrDivider" />
                    </div>

                    <div className="LogInContainer LoginbtnDiv">
                      <button type="button" className="btn btn-primary  basicbtn logInoption FBLogIn" >
                        <span className="LoginfbbtnImg">
                        </span>
                        <span className="btn btn-primary  basicbtn LoginfbbtnText LoginbtnText">
                          Log In With facebook
                        </span>
                      </button>
                    </div>

                    <div className="LogInContainer LoginbtnDiv">
                      <button type="button" className="btn btn-danger basicbtn logInoption GoogleLogIn" onClick={handleGoogleSignIn} >
                        <span className="LoginGbtnImg"></span>
                        <span className=" LoginGbtnText LoginbtnText">
                          Log In With Google
                        </span>
                      </button>
                    </div>
                  </div>

                  <a
                    className="forgotPass"
                    href="/accounts/password/reset/"
                    tabIndex="0"
                  >
                    Forgot password?
                  </a>

                </form>

              </div>
            </div>


            {/* ==== 2 ==== */}

            <div className="LoginContainer ">
              <div className="DontHaveAc">
                <p>Don't have an account?
                  <Link to="/accounts/signup" tabIndex="0">
                    <span> Sign up</span>
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
  );
};

export default Login;
