import React, { useState } from "react";
import styles from "./AuthPage.module.scss";
import classNames from "classnames/bind";
import { Eye } from "lucide-react";
import Register from "./Register/Register";

const cx = classNames.bind(styles);

const AuthPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className={cx("auth-page")}>
      <div className={cx("auth-container")}>
        <div className={cx("auth-image")}>
          <div className={cx("image-content")}>
            <h3>AffiLinker: Shaping the Future of Affiliate Marketing</h3>
            <div className={cx("dots")}>
              <div className={cx("dot")} />
              <div className={cx("dot")} />
              <div className={cx("dot", "active")} />
            </div>
          </div>
        </div>

        <div className={cx("auth-form")}>
          <div className={cx("header")}>
            <button className={cx("back-button")}>Back to website →</button>
          </div>

          {isLogin && (
            <div className={cx("form")}>
              <h1>Welcome back</h1>
              <p className={cx("login-text")}>
                Don't have an account?{" "}
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleForm();
                  }}
                >
                  Sign up
                </a>
              </p>

              <div className={cx("form-group")}>
                <input type="email" placeholder="Email" />
              </div>

              <div className={cx("form-group", "password")}>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                />
                <Eye
                  className={cx("eye-icon")}
                  onClick={() => setShowPassword(!showPassword)}
                  size={20}
                />
              </div>

              <button type="submit">Sign in</button>

              <div className={cx("forgot-password")}>
                Forgot your password? <a href="#">Reset it</a>
              </div>

              <div className={cx("divider")}>
                <span>Or sign in with</span>
              </div>

              <div className={cx("social-buttons")}>
                <button>
                  <img
                    src="https://cdn4.iconfinder.com/data/icons/logos-brands-7/512/google_logo-google_icongoogle-512.png"
                    alt="Google"
                  />
                  Google
                </button>
              </div>
            </div>
          )}

          {!isLogin && <Register toggleForm={toggleForm}/>}

        </div>
      </div>
    </div>
  );
};

export default AuthPage;
