import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import SigninService from '../api/signin';
import { useForm } from 'react-hook-form';
const Login = () => {
  const signinService = new SigninService()
  let location = useLocation();
  const path = location.pathname.split("/")[1]
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (fData) => {
    const data = {
      email: fData.email,
      password: fData.password,
    };
    try {
      const resp = await signinService.signin(path, data);
      if (resp?.status === 200) {
        // dispatch(setUserState({userlogin: true, UserDetail: resp?.data?.data?.user}))
        localStorage.setItem("massage-token", resp.data.data.token)
        localStorage.setItem("role", resp.data.data.emailExist.role)
        console.log("User has been logged in!",)
        setTimeout(() => {
          navigate("/dashboard");
        }, 1500);
      } else {
        
        // Swal.fire({
        //   title: resp?.data?.message || "Something went wrong!",
        //   timer: 1500,
        //   icon: "error",
        //   showConfirmButton: false,
        // });
      }
    } catch (error) {
      // Swal.fire({
      //   title: "Something went wrong!",
      //   timer: 1500,
      //   icon: "error",
      //   showConfirmButton: false,
      // });
    }
    // setLoader(false);
  };
  return (
<div class="container-fluid">
      <div class="row">
        <div class="col-sm-6 col-md-7 intro-section">
          <div class="brand-wrapper">
            <h1><a href="/">Body Workers</a></h1>
          </div>
          <div class="intro-content-wrapper">
            <h1 class="intro-title">Welcome to website !</h1>
            <p class="intro-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna</p>
            <a href="#!" class="btn btn-read-more">Read more</a>
          </div>
          <div class="intro-section-footer">
            <na class="footer-nav">
              <a href="#!">Facebook</a>
              <a href="#!">Twitter</a>
              <a href="#!">Gmail</a>
            </na>
          </div>
        </div>
        <div class="col-sm-6 col-md-5 form-section">
          <div class="login-wrapper">
            <h2 class="login-title">Sign in as {location.pathname.split("/")}</h2>
            <form onSubmit={handleSubmit(onSubmit)} >
              <div class="form-group">
                <label for="email" class="sr-only">Email</label>
                <input type="email" name="email" id="email" class="form-control" placeholder="Email" 
                {...register("email", { required: true , pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Entered value does not match email format"
                } })}
                />
                {errors.email && (
                        errors.email.message ? <span className="eror">{errors.email.message}</span> :
                        <span className="eror">This field is required</span>
                )}
              </div>
              <div class="form-group mb-3">
                <label for="password" class="sr-only">Password</label>
                <input type="password" name="password" id="password" class="form-control" placeholder="Password" 
                {...register("password", { required: true  ,pattern: {
                  value: /(?=[A-Za-z0-9@#$%^&+!()'=]+$)(?=.*[0-9])(?=.{8,}).*$/,
                  message: "Enter password at least 8 characters and 1 number."
                } })}
                />
                {errors.password && (
                        errors.password.message ? <span className="eror">{errors.password.message}</span> :
                        <span className="eror">This field is required</span>
                       )}
              </div>
              <div class="d-flex justify-content-between align-items-center mb-5">
                <button id="login" class="btn login-btn" type="submit" ></button>
                <a href="#!" class="forgot-password-link">Password?</a>
              </div>
            </form>           
            <p class="login-wrapper-footer-text">Need an account? <a href="/signup" class="text-reset">Signup here</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login