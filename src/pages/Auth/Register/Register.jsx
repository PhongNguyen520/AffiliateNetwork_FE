import React, { useState } from "react";
import styles from "./Register.module.scss";
import classNames from "classnames/bind";
import { Eye } from "lucide-react";
const cx = classNames.bind(styles);

function Register({ toggleForm }) {
  const [userType, setUserType] = useState("publisher");
  const [showPassword, setShowPassword] = useState(false);

  const handleUserTypeChange = (type) => {
    setUserType(type);
  };

  return (
    <div className={cx("form-signup")}>
      <h1>Create an account</h1>
      <div className={cx("user-type-buttons")}>
        <button
          className={cx("user-type-button", {
            active: userType === "advertiser",
          })}
          onClick={() => handleUserTypeChange("advertiser")}
        >
          Advertiser
        </button>

        <button
          className={cx("user-type-button", {
            active: userType === "publisher",
          })}
          onClick={() => handleUserTypeChange("publisher")}
        >
          Publisher
        </button>
      </div>

      {userType === "publisher" && (
        <div className={cx("form-publisher")}>
          <div className={cx("name-fields")}>
            <div className={cx("form-group")}>
              <input type="text" placeholder="First name" />
            </div>
            <div className={cx("form-group")}>
              <input type="text" placeholder="Last name" />
            </div>
          </div>

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

          <div className={cx("terms")}>
            <input type="checkbox" />
            <span>
              I agree to the <a href="#">Terms & Conditions</a>
            </span>
          </div>

          <button type="submit">Create account</button>
        </div>
      )}

      {userType === "advertiser" && (
        <div className={cx("form-advertiser")}>
            <div className={cx("form-group")}>
              <input type="text" placeholder="FullName" />
            </div>

          {/* Tên công ty */}
          <div className={cx("form-group")}>
            <input type="text" placeholder="Company name" />
          </div>

          {/* Website */}
          <div className={cx("form-group")}>
            <input type="text" placeholder="Website" />
          </div>
           
          <div className={cx("form-group-select")}>
            <select>
              <option value="">Industry</option>
              <option value="technology">Technology</option>
              <option value="healthcare">Healthcare</option>
              <option value="finance">Finance</option>
              <option value="education">Education</option>
              <option value="retail">Retail</option>
              <option value="other">Other</option>
            </select>

            <select>
              <option value="">Company Size</option>
              <option value="1-10">1-10 employees</option>
              <option value="11-50">11-50 employees</option>
              <option value="51-200">51-200 employees</option>
              <option value="201-500">201-500 employees</option>
              <option value="501+">501+ employees</option>
            </select>
          </div>

          <div className={cx("form-group")}>
            <input type="email" placeholder="Email" />
          </div>

          {/* Số điện thoại */}
          <div className={cx("form-group")}>
            <input type="tel" placeholder="Phone number" />
          </div>

        

          {/* Lĩnh vực hoạt động */}
         

          {/* Quy mô nhân sự */}
         

          {/* Nút đăng ký */}
          <button type="submit">Create Account</button>

          {/* Liên kết chuyển đổi sang đăng nhập */}
         
        </div>
      )}
       <p className={cx("login-text")}>
            Already have an account?{" "}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                toggleForm();
              }}
            >
              Log in
            </a>
          </p>
    </div>
  );
}

export default Register;
