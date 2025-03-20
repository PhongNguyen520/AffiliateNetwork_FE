import React, { useEffect, useState } from "react";
import styles from "./Register.module.scss";
import classNames from "classnames/bind";
import images from "../../../assets/images";
import { Eye, EyeOff, Calendar, CheckCircle } from "lucide-react";
import config from "../../../config";
import { Link, useNavigate } from "react-router-dom";
import requestsPrivate from "../../../utils/requests";

const cx = classNames.bind(styles);

const REGISTER_ADV_URL = "auth/register/advertiser";
const REGISTER_PUB_URL = "auth/register/publisher";

const Register = ({ toggleForm }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [userType, setUserType] = useState("publisher");
  const [errors, setErrors] = useState("");
  const [errorPhone, setErrorPhone] = useState({});
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (showSuccessPopup) {
      const redirectTimer = setTimeout(() => {
        navigate(config.routes.login);
      }, 3000);

      return () => clearTimeout(redirectTimer);
    }
  }, [showSuccessPopup, navigate]);

  const [formData, setFormData] = useState({
    userName: "",
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    dob: "",
    taxCode: "",
    campanyName: "",
    companyAddress: "",
    website: "",
    since: "",
    bussinessLicense: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      userName: formData.userName,
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phoneNumber: formData.phoneNumber,
      password: formData.password,
      dob: formData.dob,
    };

    if (userType === "publisher") {
      payload.publisherRequest = {
        taxCode: formData.taxCode,
      };
    } else if (userType === "advertiser") {
      payload.advertiserRequest = {
        campanyName: formData.campanyName,
        companyAddress: formData.companyAddress,
        website: formData.website,
        since: formData.since,
        bussinessLicense: formData.bussinessLicense,
      };
    }

    try {
      const url =
        userType === "publisher" ? REGISTER_PUB_URL : REGISTER_ADV_URL;
      const response = await requestsPrivate.post(url, payload);
      setShowSuccessPopup(true);
    } catch (error) {
      console.clear();
      if (error.response) {
        console.error("Error response data:", error.response.data.message);
        setErrors(error.response.data.message || "");
        setErrorPhone(error.response.data.errors || {});
      } else if (error.request) {
        console.error("No response received:", error.request);
      } else {
        console.error("Error setting up the request:", error.message);
      }
    }
  };

  return (
    <div className={cx("auth-container")}>
      {showSuccessPopup && (
        <div className={cx("success-popup-overlay")}>
          <div className={cx("success-popup")}>
            <div className={cx("success-icon")}>
              <CheckCircle size={60} />
            </div>
            <h2>Registration Successful!</h2>
            <p>Your account has been successfully created.</p>
            <p className={cx("redirect-message")}>
              Redirecting to the login page
              <span className={cx("loading-dots")}>
                <span>.</span>
                <span>.</span>
                <span>.</span>
              </span>
            </p>
          </div>
        </div>
      )}
      <div className={cx("form-layout")}>
        <div className={cx("form-content")}>
          <h1 className={cx("welcome-title")}>Create Account</h1>
          <p className={cx("subtitle")}>
            Join us today and unlock opportunities to grow your business.
          </p>

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

          <form className={cx("register-form")} onSubmit={handleSubmit}>
            <div className={cx("form-row")}>
              <div className={cx("form-group")}>
                <label>First Name*</label>
                <input
                  type="text"
                  placeholder="Enter your first name"
                  name="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                />
                {errors.FirstName && (
                  <div className={cx("field-error")}>{errors.FirstName[0]}</div>
                )}
              </div>

              <div className={cx("form-group")}>
                <label>Last Name*</label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Enter your last name"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                />
                {errors.LastName && (
                  <div className={cx("field-error")}>{errors.LastName[0]}</div>
                )}
              </div>
            </div>

            <div className={cx("form-group")}>
              <label>Email*</label>
              <input
                type="email"
                placeholder="example@email.com"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
              />
              {errors.Email && (
                <div className={cx("field-error")}>{errors.Email[0]}</div>
              )}
            </div>

            <div className={cx("form-group")}>
              <label>Phone Number*</label>
              <input
                type="tel"
                name="phoneNumber"
                placeholder="+1 (___) ___-____"
                required
                value={formData.phoneNumber}
                onChange={handleChange}
              />
              {errorPhone.PhoneNumber && (
                <div className={cx("field-error")}>
                  {errorPhone.PhoneNumber[0]}
                </div>
              )}
            </div>

            <div className={cx("form-group")}>
              <label>Date of Birth*</label>
              <div className={cx("date-input")}>
                <input
                  type="date"
                  required
                  value={formData.dob}
                  name="dob"
                  onChange={handleChange}
                />
                <Calendar size={20} className={cx("calendar-icon")} />
              </div>
            </div>

            <div className={cx("form-group")}>
              <label>UserName*</label>
              <input
                type="texttext"
                placeholder="Enter username"
                name="userName"
                required
                value={formData.userName}
                onChange={handleChange}
              />
            </div>

            <div className={cx("form-group")}>
              <label>Password*</label>
              <div className={cx("password-input")}>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="At least 8 characters"
                  required
                  value={formData.password}
                  onChange={handleChange}
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
              <p className={cx("password-hint")}>
                Password must be at least 8 characters long
              </p>
            </div>

            {userType === "publisher" && (
              <div className={cx("form-group")}>
                <label>
                  Tax Code <span className={cx("optional")}>(Optional)</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your tax code"
                  name="taxCode"
                  value={formData.taxCode}
                  onChange={handleChange}
                />
              </div>
            )}

            {userType === "advertiser" && (
              <>
                <div className={cx("form-group")}>
                  <label>Company Name*</label>
                  <input
                    type="text"
                    placeholder="Enter company name"
                    name="campanyName"
                    required
                    value={formData.campanyName}
                    onChange={handleChange}
                  />
                </div>

                <div className={cx("form-group")}>
                  <label>Company Address*</label>
                  <input
                    type="text"
                    placeholder="Enter company address"
                    name="companyAddress"
                    required
                    value={formData.companyAddress}
                    onChange={handleChange}
                  />
                </div>

                <div className={cx("form-group")}>
                  <label>Website*</label>
                  <input
                    type="url"
                    placeholder="https://example.com"
                    name="website"
                    required
                    value={formData.website}
                    onChange={handleChange}
                  />
                </div>

                <div className={cx("form-row")}>
                  <div className={cx("form-group")}>
                    <label>Since</label>
                    <div className={cx("date-input")}>
                      <input
                        type="date"
                        name="since"
                        value={formData.since}
                        onChange={handleChange}
                        required
                      />
                      <Calendar size={20} className={cx("calendar-icon")} />
                    </div>
                  </div>

                  <div className={cx("form-group")}>
                    <label>Business License </label>
                    <input
                      type="text"
                      placeholder="Enter business license number"
                      name="bussinessLicense"
                      value={formData.bussinessLicense}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </>
            )}

            <div className={cx("terms-agreement")}>
              <input type="checkbox" id="terms" required />
              <label htmlFor="terms">
                I agree to the <a href="#">Terms of Service</a> and{" "}
                <a href="#">Privacy Policy</a>
              </label>
            </div>

            {errors && <div className={cx("error-message")}>{errors}</div>}

            <button type="submit" className={cx("register-btn")}>
              Create Account
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
              Continue with Google
            </button>

            <div className={cx("login-prompt")}>
              Already have an account?{" "}
              <Link to={config.routes.login} className={cx("login-link")}>
                Log in
              </Link>
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
