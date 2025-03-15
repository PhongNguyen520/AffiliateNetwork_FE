import React, { useState } from "react";
import styles from "./Register.module.scss";
import classNames from "classnames/bind";
import images from "../../../assets/images";
import { Eye, EyeOff, Calendar } from "lucide-react";
import config from "../../../config";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

const Register = ({ toggleForm }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [userType, setUserType] = useState("publisher"); 

  return (
    <div className={cx("auth-container")}>
      <div className={cx("form-layout")}>
        <div className={cx("form-content")}>
          <h1 className={cx("welcome-title")}>Create Account</h1>
          <p className={cx("subtitle")}>Join us today and unlock opportunities to grow your business.</p>
          
          <div className={cx("user-type-toggle")}>
            <button 
              className={cx("type-btn", { active: userType === "publisher" })}
              onClick={() => setUserType("publisher")}
            >
              Publisher
            </button>
            <button 
              className={cx("type-btn", { active: userType === "advertiser" })}
              onClick={() => setUserType("advertiser")}
            >
              Advertiser
            </button>
          </div>
          
          <form className={cx("register-form")}>
            <div className={cx("form-row")}>
              <div className={cx("form-group")}>
                <label>First Name*</label>
                <input type="text" placeholder="Enter your first name" required />
              </div>
              
              <div className={cx("form-group")}>
                <label>Last Name*</label>
                <input type="text" placeholder="Enter your last name" required />
              </div>
            </div>
            
            <div className={cx("form-group")}>
              <label>Email*</label>
              <input type="email" placeholder="example@email.com" required />
            </div>
            
            <div className={cx("form-group")}>
              <label>Phone Number*</label>
              <input type="tel" placeholder="+1 (___) ___-____" required />
            </div>
            
            <div className={cx("form-group")}>
              <label>Date of Birth*</label>
              <div className={cx("date-input")}>
                <input type="date" required />
                <Calendar size={20} className={cx("calendar-icon")} />
              </div>
            </div>

            <div className={cx("form-group")}>
              <label>UserName*</label>
              <input type="texttext" placeholder="Enter username" required />
            </div>
            
            <div className={cx("form-group")}>
              <label>Password*</label>
              <div className={cx("password-input")}>
                <input 
                  type={showPassword ? "text" : "password"} 
                  placeholder="At least 8 characters"
                  required
                />
                {showPassword ? (
                  <EyeOff 
                    className={cx("eye-icon")} 
                    onClick={() => setShowPassword(false)} 
                    size={20}
                  />
                ) : (
                  <Eye 
                    className={cx("eye-icon")} 
                    onClick={() => setShowPassword(true)} 
                    size={20}
                  />
                )}
              </div>
              <p className={cx("password-hint")}>Password must be at least 8 characters long</p>
            </div>
            
            {userType === "publisher" && (
              <div className={cx("form-group")}>
                <label>Tax Code <span className={cx("optional")}>(Optional)</span></label>
                <input type="text" placeholder="Enter your tax code" />
              </div>
            )}
            
            {userType === "advertiser" && (
              <>
                <div className={cx("form-group")}>
                  <label>Company Name*</label>
                  <input type="text" placeholder="Enter company name" required />
                </div>
                
                <div className={cx("form-group")}>
                  <label>Company Address*</label>
                  <input type="text" placeholder="Enter company address" required />
                </div>
                
                <div className={cx("form-group")}>
                  <label>Website*</label>
                  <input type="url" placeholder="https://example.com" required />
                </div>
                
                <div className={cx("form-row")}>
                  <div className={cx("form-group")}>
                    <label>Since <span className={cx("optional")}>(Optional)</span></label>
                    <div className={cx("date-input")}>
                      <input type="date" />
                      <Calendar size={20} className={cx("calendar-icon")} />
                    </div>
                  </div>
                  
                  <div className={cx("form-group")}>
                    <label>Business License <span className={cx("optional")}>(Optional)</span></label>
                    <input type="text" placeholder="Enter business license number" />
                  </div>
                </div>
              </>
            )}
            
            <div className={cx("terms-agreement")}>
              <input type="checkbox" id="terms" required />
              <label htmlFor="terms">
                I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>
              </label>
            </div>
            
            <button type="submit" className={cx("register-btn")}>Create Account</button>
            
            <div className={cx("divider")}>
              <span>Or</span>
            </div>
            
            <button type="button" className={cx("google-btn")}>
              <img src={images.google || "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"} alt="Google" />
              Continue with Google
            </button>
            
            <div className={cx("login-prompt")}>
              Already have an account? <Link to={config.routes.login} className={cx("login-link")}>Log in</Link>
            </div>
          </form>
        </div>
      </div>
      
      <div className={cx("image-layout")}>
        <div className={cx("auth-image")}>
          <div className={cx("floral-image")}>
            <img src={images.login} alt="Floral Background" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;