import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../../Context/UserAuthContext";
import "./Login-SignUp.css";

const SignUp = () => {

  const [email, setEmail] = useState("");
  const [fullname, setFullName] = useState("");
  const [username, setUserName] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = useUserAuth();
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password, username, fullname);
      navigate("/");
    } catch (err) {
      setError(err.message);

      console.log(err.message)
    }
  };








  return <section className="LoginSection">
    <main className="mainLoginPage">
      <article className="pageCenter">
        {/* <div className="loginAdImg">
        <div className="loginAdImgInner">
          {LoginSideImg.map((img, index) => {
            <img
              id="login-side-img"
              className="loginImg"
              key={index}
              src={img}
              alt
            />;
          })}
        </div>
      </div> */}

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
                    <button type="button" className="btn btn-danger basicbtn logInoption GoogleLogIn" >
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
                        aria-label="Mobile Number or email"
                        aria-required="true"
                        autoCapitalize="off"
                        autoCorrect="off"
                        maxLength="75"
                        name="username"
                        type="text"
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
                        name="username"
                        type="text"
                        className=""
                        id="exampleInputEmail1"
                        placeholder="Username"
                        onChange={(e) => setUserName(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="formInnerDiv">
                    <div className="FormInputDiv">
                      <input
                        type="password"
                        minLength='5'
                        className=""
                        id="exampleInputPassword1"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="LogInContainer">
                    <button type="submit" className="  LogInBtn basicbtn   " >
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
