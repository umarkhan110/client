import React from 'react'

const Login = () => {
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
            <h2 class="login-title">Sign in</h2>
            <form action="#!">
              <div class="form-group">
                <label for="email" class="sr-only">Email</label>
                <input type="email" name="email" id="email" class="form-control" placeholder="Email" />
              </div>
              <div class="form-group mb-3">
                <label for="password" class="sr-only">Password</label>
                <input type="password" name="password" id="password" class="form-control" placeholder="Password" />
              </div>
              <div class="d-flex justify-content-between align-items-center mb-5">
                <input name="login" id="login" class="btn login-btn" type="button" value="Login" />
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