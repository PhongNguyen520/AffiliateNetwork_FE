import React, { useContext, useState } from "react";
import styles from "./Login.module.scss";
import classNames from "classnames/bind";
import images from "../../../assets/images";
import requestsPrivate from "../../../utils/requests";
import { AuthContext } from "../../../providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import config from "../../../config";

const cx = classNames.bind(styles);
const LOGIN_URL = "auth/login";

const Login = () => {
  const { setAuth } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      return;
    }

    try {
      const response = await requestsPrivate.post(LOGIN_URL, {
        userName: username,
        password: password,
      });

      Cookies.set("access_token", response.data.data.accessToken, {
        expires: 7,
      });

      let token = Cookies.get("access_token");

      const decodedToken = jwtDecode(token);
      console.log(decodedToken);
      
      setAuth({
        isLoggedIn: true,
        userId: decodedToken.nameid,
        roleName: decodedToken.role,
        avatar: decodedToken.Avatar,
        fullName: decodedToken.FullName
      });

      if (decodedToken.role === "Publisher") {
        navigate(config.routes.home);
      } else if (decodedToken.role === "Advertiser") {
        navigate(config.routes.overviewAdvertiser);
      } else {
        navigate(config.routes.overviewAdmin);
      }
    } catch (err) {
      console.error("Login error:", err.response.data.message);
      setError(err.response.data.message);
      Cookies.remove("access_token");
    } finally {
    }
  };

  return (
    <div className={cx("auth-page")}>
      <div className={cx("auth-container")}>
        <div className={cx("auth-form")}>
          <div className={cx("form-content")}>
            <h1 className={cx("welcome-title")}>
              Welcome Back <span className={cx("wave-emoji")}>👋</span>
            </h1>
            <p className={cx("subtitle")}>
              Today is a new day. It's your day. You shape it.
              <br />
              Sign in to join AffiLinker.
            </p>

            <form className={cx("login-form")} onSubmit={handleSubmit}>
              <div className={cx("form-group")}>
                <label>UserName</label>
                <input
                  type="text"
                  placeholder="PhongNguyen203"
                  value={username}
                  onChange={(e) => setUserName(e.target.value)}
                  required
                />
              </div>

              <div className={cx("form-group")}>
                <label>Password</label>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="At least 8 characters"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <div className={cx("forgot-password")}>
                <a href="#">Forgot Password?</a>
              </div>

              {error && <div className={cx("error-message")}>{error}</div>}

              <button type="submit" className={cx("sign-in-btn")}>
                Sign in
              </button>

              <div className={cx("divider")}>
                <span>Or</span>
              </div>

              <button type="button" className={cx("google-btn")}>
                <img
                  src={
                    images.google ||
                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
                  }
                  alt="Google"
                />
                Sign in with Google
              </button>

              <button type="button" className={cx("facebook-btn")}>
                <img
                  src={
                    images.facebook ||
                    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg"
                  }
                  alt="Facebook"
                />
                Sign in with Facebook
              </button>

              <div className={cx("signup-prompt")}>
                Don't you have an account?{" "}
                <Link
                  to={cx(config.routes.register)}
                  className={cx("signup-link")}
                >
                  Sign up
                </Link>
              </div>
            </form>
          </div>
        </div>

        <div className={cx("auth-image")}>
          <div className={cx("floral-image")}>
            <img src={images.login} alt="Floral Background" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
