import { useForm } from "react-hook-form";
import { useState } from "react";
//import countryCodes from "../components/CountryCode";
import "../../assets/css/Register.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmVisible, setConfirmVisible] = useState(false);

  const onSubmit = async (data) => {
    try {
      const response = await fetch("http://localhost:28991/api/Auth/Register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to register. Please try again.");
      }

      const result = await response.json();
      alert(result.message || "Registration successful!");
    } catch (error) {
      alert("Registration failed: " + error.message);
    }
  };

  return (
    <div className="registration-wrapper">
      <form className="registration-form" onSubmit={handleSubmit(onSubmit)}>
        <h1>User Registration</h1>
        <label>
          First Name:
          <input
            type="text"
            {...register("firstName", { required: "First name is required" })}
          />
          {errors.firstName && (
            <p className="error">{errors.firstName.message}</p>
          )}
        </label>

        <label>
          Last Name:
          <input
            type="text"
            {...register("lastName", { required: "Last name is required" })}
          />
          {errors.lastName && (
            <p className="error">{errors.lastName.message}</p>
          )}
        </label>

        <label>
          Date of Birth:
          <input
            type="date"
            {...register("dob", { required: "Date of birth is required" })}
          />
          {errors.dob && <p className="error">{errors.dob.message}</p>}
        </label>

        <label>
          Gender:
          <select {...register("gender", { required: "Gender is required" })}>
            <option value="">--Select--</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          {errors.gender && <p className="error">{errors.gender.message}</p>}
        </label>

        <label>
          Email:
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address",
              },
            })}
            placeholder="Enter Email Address"
          />
          {errors.email && <p className="error">{errors.email.message}</p>}
        </label>

        <label>
          Mobile Number:
          <div className="phone-field-wrapper">
            <input
              type="tel"
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9]{7,14}$/,
                  message: "Invalid phone number",
                },
              })}
              className="phone-number-input"
              placeholder="Enter phone number with Country code (+91)"
            />
          </div>
          {errors.countryCode && (
            <p className="error">{errors.countryCode.message}</p>
          )}
          {errors.phone && <p className="error">{errors.phone.message}</p>}
        </label>

        <label>
          Password:
          <div style={{ position: "relative" }}>
            <input
              type={passwordVisible ? "text" : "password"}
              {...register("password", {
                required: "Password is required",
                pattern: {
                  value:
                    /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
                  message:
                    "Password must be at least 8 characters, include an uppercase letter, a number, and a special character",
                },
              })}
              placeholder="Enter password"
              style={{ width: "100%", paddingRight: "2.5rem" }}
            />
            <span
              onClick={() => setPasswordVisible(!passwordVisible)}
              style={{
                position: "absolute",
                top: "50%",
                right: "10px",
                transform: "translateY(-50%)",
                cursor: "pointer",
                color: "#666",
              }}
            >
              {passwordVisible ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          {errors.password && (
            <p className="error">{errors.password.message}</p>
          )}
        </label>

        <label>
          Confirm Password:
          <div style={{ position: "relative" }}>
            <input
              type={confirmVisible ? "text" : "password"}
              {...register("confirmPassword", {
                required: "Please confirm your password",
                validate: (value) =>
                  value === watch("password") || "Passwords do not match",
              })}
              placeholder="Confirm password"
              style={{ width: "100%", paddingRight: "2.5rem" }}
            />
            <span
              onClick={() => setConfirmVisible(!confirmVisible)}
              style={{
                position: "absolute",
                top: "50%",
                right: "10px",
                transform: "translateY(-50%)",
                cursor: "pointer",
                color: "#666",
              }}
            >
              {confirmVisible ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          {errors.confirmPassword && (
            <p className="error">{errors.confirmPassword.message}</p>
          )}
        </label>

        <button className="button" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
