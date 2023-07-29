import React, { useState } from "react";

const BecomeProvider = () => {
  const [input, setInput] = useState({
    fullname:"",
    email:"",
    phone:"",
    gender:"",
    nearest:"",
    certified:"",
    expertise:"",
    liability:"",
    image:"",
    highest_level_of_training:"",
    years_of_experience:"",
    password:""
  })
  const handleChange = (event) => {
    const { name, value } = event.target;
    setInput((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const handleChangeI = (event) => {
    setInput({ ...input, image: event.target.files[0] })
  }
  const handleClick = async (event) => {
    const formData = new FormData();
    formData.append('fullname', input.fullname);
    formData.append('email', input.email);
    formData.append('phone', input.phone );
    formData.append('gender', input.gender );
    formData.append('nearest', input.nearest );
    formData.append('certified', input.certified );
    formData.append('expertise', input.expertise );
    formData.append('liability', input.liability );
    formData.append('highest_level_of_training', input.highest_level_of_training );
    formData.append('years_of_experience', input.years_of_experience );
    formData.append('password', input.password);
    formData.append('image', input.image, input.image.name);
    event.preventDefault();
    debugger
    const res = await fetch("http://localhost:5000/provider/apply_provider", {
      method: "POST",
      body: formData,

    });
    const data = await res.json();
    console.log(data)
    // if (res.status === 422 || !data) {
    //   notify("error", data.message)
    // } else {
    //   router.push("/login");
    // }
  }
  return (
    <>
      <div class="preloades" style={{ display: "none" }}>
        <div class="spinner">
          <div class="bounce1"></div>
          <div class="bounce2"></div>
          <div class="bounce3"></div>
        </div>
      </div>

      <div
        class="wrapper"
        data-url="https://www.bigtoe.yoga/booking/session"
        data-crt="index.html"
      >
        <div class="banner center-view bap-section">
          <div class="container">
            <div class="row">
              <div class="col-sm-6 col-xs-12 hiddenxs">
                <div class="content-view fadeInLeft">
                  <h2>Become A Partner Provider</h2>
                  <a href="/" class="com-btn-view w-25">
                    Apply now
                  </a>
                  <h1>
                    <span>
                      <a
                        href="/"
                        class="typewrite"
                        data-period="500"
                        data-type='["Massage on Demand","Private Yoga Classes"]'
                      >
                        <span class="wrap"></span>
                      </a>
                    </span>
                  </h1>
                  {/* <h1>in seconds</h1> */}
                </div>
              </div>

              <div class="col-sm-6 col-xs-12 main-video-box">
                <img
                  class="bap-img"
                  src="/assets/images/bap-img.png"
                  width={"100%"}
                  alt=""
                />
              </div>

              <div class="col-sm-6 col-xs-12">
                {/* <img class="bap-img"  src="/assets/images/bap-img.png" width={"100%"} alt="" /> */}
              </div>
            </div>
          </div>
        </div>
        <div class="steps">
          <div class="container">
            <h1 class="text-center">
              Calling all massage therapists and yoga teachers
            </h1>
            <p class="text-center">
              Our platform connects the clients directly with massage therapists
              and yoga teachers
            </p>
            <div class="row">
              <div class="col-md-4">
                <div class="bop-step-box text-center">
                  <div class="bop-step-icon">
                    <i class="fa fa-calendar" aria-hidden="true"></i>
                  </div>
                  <div class="bop-step-text">
                    <h3>Work on your schedule</h3>
                    <p>
                      Respond only to requests that work with your availability.
                      Get paid fast.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="bop-step-box text-center">
                  <div class="bop-step-icon">
                    <i class="fa fa-code-fork" aria-hidden="true"></i>
                  </div>
                  <div class="bop-step-text">
                    <h3>Provider app</h3>
                    <p>
                      Manage requests and bookings in one place, on Bigtoe
                      provider app
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="bop-step-box text-center">
                  <div class="bop-step-icon">
                    <i class="fa fa-cubes" aria-hidden="true"></i>
                  </div>
                  <div class="bop-step-text">
                    <h3>Seamless experience</h3>
                    <p>
                      We take care of payments, late cancellation fees and
                      tipping for you
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="bop-form">
          <div class="container">
            <h1 class="text-center">Become a Partner Provider</h1>
            <p class="text-center">
              This contents of this form will be used to verify you and to set
              up your account in our system.
            </p>
            <div class="row">
              <div class="col-md-7">
                <form method="POST">
                <div class="form-details">
                  <div class="row">
                    <div class="col-md-6">
                      <label>Full Name:</label>
                      <input class="form-control" type="text" placeholder="Name" name="fullname" value={input.fullname} onChange={handleChange}/>
                    </div>
                    <div class="col-md-6">
                      <label>Email:</label>
                      <input class="form-control" type="email" placeholder="Email" name="email" value={input.email} onChange={handleChange}/>
                    </div>
                    <div class="col-md-6">
                      <label>Phone No:</label>
                      <input class="form-control" type="text" placeholder="Phone Number" name="phone" value={input.phone} onChange={handleChange}/>
                    </div>

                    <div class="col-md-6">
                      <label>Your Gender:</label>
                      <select class="form-control" name="gender" value={input.gender} onChange={handleChange}>
                      <option selected="true" disabled="disabled" value="">Select Option</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Shemale</option>
                        <option>Rather Not Say</option>
                      </select>
                    </div>
                    <div class="col-md-6">
                      <label>Nearest City*:</label>
                      <input class="form-control" type="text" placeholder="Nearest City" name="nearest" value={input.nearest} onChange={handleChange}/>
                    </div>
                    <div class="col-md-6">
                      <label>Your primary expertise *:</label>
                      <select class="form-control" name="expertise" value={input.expertise} onChange={handleChange}>
                      <option selected="true" disabled="disabled" value="">Select Option</option>
                        <option>Massage</option>
                        <option>Yoga</option>
                      </select>
                    </div>
                    <div class="col-md-6">
                      <label>Are you liability insured?</label>
                      <select class="form-control" name="liability" value={input.liability} onChange={handleChange}>
                      <option selected="true" disabled="disabled" value="">Select Option</option>
                        <option>Yes</option>
                        <option>No</option>
                      </select>
                    </div>
                    <div class="col-md-6">
                      <label>Certificate</label>
                      <input onChange={handleChangeI} type="file" className="form-control" name="image" id="image" placeholder="Select a Photo" />
                    </div>
                    <div class="col-md-12">
                      <label>Are you certified/licensed in your primary expertise?</label>
                      <select class="form-control" name="certified" value={input.certified} onChange={handleChange}>
                      <option selected="true" disabled="disabled" value="">Select Option</option>
                      <option>Yes</option>
                        <option>No</option>
                      </select>
                    </div>

                    <div class="col-md-12">
                      <label>What's your highest level of training (if any) in the primary expertise?</label>
                      <input class="form-control" type="text" placeholder="Your level" name="highest_level_of_training" value={input.highest_level_of_training} onChange={handleChange}/>
                    </div>
                    <div class="col-md-12">
                      <label>Approx. how many years of experience do you have in your primary expertise as a provider? *</label>
                      <input class="form-control" type="text" placeholder="Years of experience" name="years_of_experience" value={input.years_of_experience} onChange={handleChange}/>
                    </div>
                  </div>
                  <button class="com-btn-view bop-form-btn" onClick={handleClick}>Apply now</button>
                </div>
                </form>
              </div>

              <div class="col-md-5">
                <img
                  class="bap-img-form"
                  src="/assets/images/yoga-a-3.jpg"
                  width={"100%"}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BecomeProvider;
