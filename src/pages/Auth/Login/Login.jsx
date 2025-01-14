import React, { useState } from 'react'
import styles from "./Login.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function Login() {
      const [showPassword, setShowPassword] = useState(false);
    
  return (
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
                  <img src="/api/placeholder/20/20" alt="Google" />
                  Google
                </button>
                <button>
                  <img src="/api/placeholder/20/20" alt="Apple" />
                  Apple
                </button>
              </div>
            </div>
  )
}

export default Login