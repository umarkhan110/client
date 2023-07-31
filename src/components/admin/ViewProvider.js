import React, { useEffect, useState } from 'react'
import AdminDashboardService from '../../api/admindashboard';
import { useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const ViewProvider = () => {
  const path = useLocation()
  const id = path.pathname.split("/")[3]
  const adminDashboardService = new AdminDashboardService()
  const [provider, setProvider] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    formState,
  } = useForm({ defaultValues: { password: "" } });

  const onSubmit = async (fData) => {
    const data = {
      password: fData.password,
    };
    try {
      const resp = await adminDashboardService.updatePassword(id, data);
      if (resp?.status === 200) {
        console.log("Password is updated",)
        
        alert("Password is generated successfully!")
      } 
    } catch (error) {
        console.log(error);
    }
  };

  useEffect(()=>{
    const getProviderDetail = async ()=>{
      const res = await adminDashboardService.viewById(id);
      if(res.status === 200){
        //   console.log(res.data)
          setProvider(res.data)
      }
    }
    getProviderDetail()
  })
  React.useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ password: '' });
    }
  }, [formState, reset]);
  return (
    <div class="container rounded bg-white">
    <div class="row">
        
        <div class="col-md-12 border-right">
            <div class="p-3 py-5">
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <h4 class="text-right">Provider Detail</h4>
                </div>
                <div class="row mt-2">
                    <div class="col-md-6"><label class="labels">Name</label><input type="text" class="form-control"  value={provider?.fullname} disabled/></div>
                    <div class="col-md-6"><label class="labels">Email</label><input type="email" class="form-control" value={provider?.email} disabled/></div>
                    
                </div>
                <div class="row mt-3">
                
                    <div class="col-md-6"><label class="labels">Expertise</label><input type="text" class="form-control" disabled value={provider?.expertise} /></div>
                    <div class="col-md-6"><label class="labels">Nearest</label><input type="text" class="form-control" disabled value={provider?.nearest} /></div>
                    <div class="col-md-6"><label class="labels">Years of experience</label><input type="text" class="form-control" disabled value={provider?.years_of_experience} /></div>
                    <div class="col-md-6"><label class="labels">Highest level of training</label><input type="text" class="form-control" disabled value={provider?.highest_level_of_training} /></div>
                    <div class="col-md-3"><label class="labels">Certified</label><input type="text" class="form-control"  value={provider?.certified} disabled/></div>
                    <div class="col-md-3"><label class="labels">Liability</label><input type="text" class="form-control" disabled value={provider?.liability} /></div>
                    <div class="col-md-3"><label class="labels">Gender</label><input type="text" class="form-control" value={provider?.gender} disabled/></div>
                <div class="col-md-3"><label class="labels">Phone</label><input type="text" class="form-control"  value={provider?.phone} disabled/></div>
                    

            </div>
            </div>
        </div>
        <div class="col-md-6">
            <div class="p-3 py-5">
                <div class="d-flex justify-content-between align-items-center experience"><span>Generate Password</span></div><br />
                <form onSubmit={handleSubmit(onSubmit)} >
                <div class="col-md-12"><label class="labels">Generate Password for Provider</label>
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
                </div> <br/>
                <button class="btn btn-primary profile-button" type="submit">Generate</button>
                </form>
            </div>
        </div>
        <div class="col-md-6 ">
            <div class="d-flex flex-column align-items-center text-center "><img class="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" alt=''/></div>
        </div>
    </div>
</div>

  )
}

export default ViewProvider