import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import SigninService from '../api/signin';
import { useNavigate } from 'react-router-dom';
import ToastMessage from '../components/Toast';
import ButtonLoadingSpinner from "../components/buttonLoadingSpinner"

const Signup = () => {
  const signinService = new SigninService()
  const navigate = useNavigate()
  const [loader, setLoader] = useState(false)

  const notify = React.useCallback((type, message) => {
    ToastMessage({ type, message });
  }, []);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (fData) => {
    const data = {
      name: fData.name,
      phone: fData.phone,
      email: fData.email,
      password: fData.password,
    };
    try {
      const resp = await signinService.signup(data);
      if (resp?.status === 200) {
        notify("success", resp.data.message)
          navigate("/client");
      } else {
        notify("error", resp.data.message)
      }
    } catch (error) {
      console.log(error)
    }
    setLoader(false);
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
            <h2 class="login-title">Sign up</h2>
            <form onSubmit={handleSubmit(onSubmit)} >
            <div class="form-group">
                <label for="name" class="sr-only">Name</label>
                <input type="text" name="name" id="name" class="form-control" placeholder="User Name"
                {...register("name", { required: true})}
                />
                {errors.name && (
                        errors.name.message ? <span className="eror">{errors.name.message}</span> :
                        <span className="eror">This field is required</span>
                )}
              </div>
              <div class="form-group">
                <label for="phone" class="sr-only">Phone</label>
                <input type="text" name="phone" id="phone" class="form-control" placeholder="Phone"
                {...register("phone", { required: true})}
                />
                {errors.phone && (
                        errors.phone.message ? <span classphone="eror">{errors.phone.message}</span> :
                        <span className="eror">This field is required</span>
                )}
              </div>
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
                <button id="login" class="btn login-btn" type="submit">
                {loader && (
                  <ButtonLoadingSpinner ClassStyle="btn inline w-4 h-4 mr-3 align-self-center text-white spinner-border" role="status" />
                )}
                Signup</button>
              </div>
            </form>           
            <p class="login-wrapper-footer-text">Already have an account? <a href="/client" class="text-reset">Signin here</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup