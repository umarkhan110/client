import React from 'react'
import Table from '../components/Table'
import { columns } from "../tableData/UserData";

const Dashboard = () => {
    const data = [
        {
          id: "1",
          fullName: "Umar",
          email: "jhkujk",
          userStatusDescription: "Paid",
        },
        {
          id: "2",
          fullName: "Umar",
          email: "jhkujk",
          userStatusDescription: "UnPaid",
        },
        {
          id: "3",
          fullName: "Umar",
          email: "jhkujk",
          userStatusDescription: "Paid",
        },
      ];
  return (
    <div>
    <div class="header shadow-sm bg-white position-relative">
    <div class="header__left">
      <i id="menu" class="material-icons actives menu-icon">menu</i>
      <h5 class="username">US</h5>
      <nav class="mt-3 ms-4"
       aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item active" aria-current="page">
            Username
          </li>
          <li class="breadcrumb-item"><a href="/">Home</a></li>
        </ol>
      </nav>
    </div>
    <div class="header__icons">
      {/* <span  class="nav  nav-pills btn btn-primary text-white p-0 m-0" id="v-pills-tab" role="tablist" aria-orientation="vertical">        
          <button class="nav-link btn btn-primary text-white pb-0" id="v-pills-get-tab" data-bs-toggle="pill"
        data-bs-target="#v-pills-get" type="button" role="tab" aria-controls="v-pills-get"
        aria-selected="false">
        + Get Video  
      </button></span>
      <span class="mx-1"><i class="material-icons">contact_support</i></span> */}
      <span class="mx-1"><i class="material-icons">account_circle</i></span>
    </div>
    </div>
    <div class="mainBody">
            <div class="sidebar settings-sidebar">
            <div class="sidebar__categories">
                <div class="nav flex-column nav-pills " id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <button class="nav-link active p-0 m-0" id="v-pills-home-tab" data-bs-toggle="pill"
                    data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">
                    <div class="sidebar__category pe-0  ">
                    <i class="material-icons">
                    people
                    </i>
                    <br />
                    <span>Providers</span>
                    </div>
                </button>
                {/* <button class="nav-link p-0 m-0" id="v-pills-profile-tab" data-bs-toggle="pill"
                    data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile"
                    aria-selected="false">
                    <div class="sidebar__category pe-0">
                    <i class="material-icons">assignment</i>
                    <br />
                    <span>Tasks</span>
                    </div>

                </button>
                <button class="nav-link p-0 m-0" id="v-pills-messages-tab" data-bs-toggle="pill"
                    data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages"
                    aria-selected="false">
                    <div class="sidebar__category pe-0">
                    <i class="material-icons">people</i>
                    <br />
                    <span>Creators</span>
                    </div>

                </button>
                <button class="nav-link p-0 m-0" id="v-pills-settings-tab" data-bs-toggle="pill"
                    data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings"
                    aria-selected="false">
                    <div class="sidebar__category pe-0">
                    <i class="material-icons">local_shipping</i>
                    <br />
                    <span>Delivery</span>
                    </div>
                </button>
                <button class="nav-link p-0 m-0" id="v-pills-Delivery-tab" data-bs-toggle="pill"
                    data-bs-target="#v-pills-Delivery" type="button" role="tab" aria-controls="v-pills-Delivery"
                    aria-selected="false">
                    <div class="sidebar__category pe-0">
                    <i class="material-icons">collections</i>
                    <br />
                    <span>Content</span>
                    </div>
                </button>
                <button class="nav-link p-0 m-0" id="v-pills-Brand-tab" data-bs-toggle="pill" data-bs-target="#v-pills-Brand"
                    type="button" role="tab" aria-controls="v-pills-Brand" aria-selected="false">
                    <div class="sidebar__category pe-0">
                    <i class="material-icons">work_outline</i>
                    <br />
                    <span>Brand</span>
                    </div>
                </button>
                <button class="nav-link p-0 m-0" id="v-pills-myBrand-tab" data-bs-toggle="pill"
                    data-bs-target="#v-pills-myBrand" type="button" role="tab" aria-controls="v-pills-myBrand"
                    aria-selected="false">
                    <div class="sidebar__category pe-0">
                    <i class="material-icons">menu</i>
                    <br />
                    <span>My Brands</span>
                    </div>
                </button> */}
                </div>
            </div>
            </div>
            <div class="settings">
            <div class="settings-tabs-content">
                <div class="tab-content" id="v-pills-tabContent">
                <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                <Table columns={columns(data)} incomingData={data} />
                    {/* <section class="creators my-3">
                    <div class="container">
                        <div class="row">
                        <div class="col-md-2 col-6 my-2 px-2">
                            <div class="creator-box  h-100 p-3 shadow-sm bg-white rounded">
                            <h6 class="mt-2 mb-0">Creators</h6>
                            <h4 class="mb-5">0</h4>
                            </div>
                        </div>
                        <div class="col-md-2 col-6 my-2 px-2">
                            <div class="creator-box  h-100 p-3 shadow-sm bg-white rounded">
                            <h6 class="mt-2 mb-0">Task <span class="float-end"><i class="material-icons">add_circle</i></span>
                            </h6>
                            <h4 class="mb-5">0</h4>

                            </div>
                        </div>
                        <div class="col-md-2 col-6 my-2 px-2">
                            <div class="creator-box  h-100 p-3 shadow-sm bg-white rounded">
                            <h6 class="mt-2 mb-0">Content</h6>
                            <h4 class="mb-5">0</h4>
                            </div>
                        </div>
                        <div class="col-md-2 col-6 my-2 px-2">
                            <div class="creator-box  h-100 p-3 shadow-sm bg-white rounded">
                            <h6 class="mt-2 mb-0">Total Spent</h6>
                            <h4 class="mb-5">$0.00</h4>
                            </div>
                        </div>
                        </div>
                        <div class="row">
                        <div class="col-md-4">
                            <div class="create-task bg-white h-100 p-3 my-2 shadow-sm">
                            <h6>Approve creators</h6>
                            <div class="text-center my-5 py-5">
                                <h2>Create a task for creators to apply</h2>
                                <button class="btn btn-primary pb-0">Create a task </button>
                            </div>
                            </div>
                        </div>

                        <div class="col-md-4 my-lg-0 my-md-3 my-sm-3">
                            <div class="create-task bg-white h-100 p-3 my-2 shadow-sm">
                            <h6>Ship products</h6>
                            <div class="text-center my-5 py-5">
                                <h2>No products to ship</h2>
                                <p>Something shows up here once you approve the creators you wanna work with ✌️</p>
                            </div>
                            </div>
                        </div>

                        <div class="col-md-4">
                            <div class="create-task bg-white h-100 p-3 my-2 shadow-sm">
                            <h6>Approve videos
                            </h6>
                            <div class="text-center my-5 py-5">
                                <h2 class="font-weight-bold">No videos to approve</h2>
                                <p>Something shows up here once the creator uploads a video.
                                Stay tuned 👀</p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </section> */}
                </div>
                {/* <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">

                    <section class="task my-4"></section>
                    <div class="container">
                    <ul class="nav nav-pills mb-3" role="tablist">
                        <li class="nav-item mx-1" role="presentation">
                        <button class="nav-link active" data-bs-toggle="pill" type="button" role="tab"
                            aria-selected="true">Newest</button>
                        </li>
                        <li class="nav-item mx-1" role="presentation">
                        <button class="nav-link" data-bs-toggle="pill" type="button" role="tab"
                            aria-selected="false">Oldest</button>
                        </li>

                    </ul>

                    <div class="data-table">
                        <table id="responsive-data-table" class="table dt-responsive nowrap " style={{width:"100%"}}>
                        <thead>
                            <tr>
                            <th>Task</th>
                            <th>Status</th>
                            <th>Videos</th>
                            <th>Price</th>
                            <th>Creators</th>
                            <th>Shipping</th>
                            <th>Videos approved</th>

                            </tr>
                        </thead>

                        <tbody></tbody>
                        </table>
                    </div>

                    </div>


                </div>
                <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">

                    <div class="no-data my-4">
                    <div class="container">
                        <div class="d-flex bg-white px-3 py-4 shadow-sm rounded">
                        <div class="icon">
                            <i class="material-icons">info</i>
                        </div>
                        <div class="no-content mt-4 ms-2">
                            <h6>No applications available. Yet!</h6>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">

                    <div class="container mt-4">
                    <ul class="nav nav-pills mb-2" role="tablist">
                        <li class="nav-item mx-1" role="presentation">
                        <button class="nav-link pb-0 pt-1 px-2 active" data-bs-toggle="pill" type="button" role="tab"
                            aria-selected="true">Due to ship <span
                            class="mx-1 px-2 pt-1 pb-0 rounded-circle bg-white">0</span></button>
                        </li>
                        <li class="nav-item mx-1" role="presentation">
                        <button class="nav-link pb-0 pt-1 px-2" data-bs-toggle="pill" type="button" role="tab"
                            aria-selected="false">Shipped <span
                            class="mx-1 px-2 pt-1 pb-0 rounded-circle bg-white">0</span></button>
                        </li>
                        <li class="nav-item mx-1" role="presentation">
                        <button class="nav-link pb-0 pt-1 px-2" data-bs-toggle="pill" type="button" role="tab"
                            aria-selected="false">All Shipments <span
                            class="mx-1 px-2 pt-1 pb-0 rounded-circle bg-white">0</span></button>
                        </li>
                    </ul>
                    </div>
                    <hr class="mt-0" />

                    <div class="no-data my-4">
                    <div class="container">
                        <div class="d-flex bg-white px-3 py-4 shadow-sm rounded">
                        <div class="icon">
                            <i class="material-icons">local_shipping</i>
                        </div>
                        <div class="no-content mt-4 ms-2">
                            <h6>No tasks requiring delivery.</h6>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="v-pills-Delivery" role="tabpanel" aria-labelledby="v-pills-Delivery-tab">


                    <div class="approval-list">
                    <ul class="nav nav-tabs bg-white shadow-sm" id="myTab" role="tablist">
                        <li class="nav-item" role="presentation">
                        <button class="nav-link active d-flex" id="approval-tab" data-bs-toggle="tab"
                            data-bs-target="#approval" type="button" role="tab" aria-controls="approval" aria-selected="true"><i
                            class="material-icons">checklist_rtl</i> <span>Waitting For Approval</span></button>
                        </li>
                        <li class="nav-item" role="presentation">
                        <button class="nav-link d-flex" id="Content-tab" data-bs-toggle="tab" data-bs-target="#Content"
                            type="button" role="tab" aria-controls="Content" aria-selected="false"><i
                            class="material-icons">toc</i> <span>My Content</span></button>
                        </li>

                    </ul>
                    </div>
                    <section class="content-approval">





                    <div class="tab-content" id="myTabContent">
                        <div class="tab-pane fade show active" id="approval" role="tabpanel" aria-labelledby="approval-tab">
                        <div class="no-data my-4">
                            <div class="container">
                            <div class="d-flex bg-white px-3 py-4 shadow-sm rounded">
                                <div class="icon">
                                <i class="material-icons">info</i>
                                </div>
                                <div class="no-content mt-4 ms-2">
                                <h6>Nothing to approve yet.</h6>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div class="tab-pane fade" id="Content" role="tabpanel" aria-labelledby="Content-tab">
                        <div class="no-data my-4">
                            <div class="container">
                            <div class="d-flex bg-white px-3 py-4 shadow-sm rounded">
                                <div class="icon">
                                <i class="material-icons">info</i>
                                </div>
                                <div class="no-content mt-4 ms-2">
                                <h6>Nothing completed. Yet!</h6>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>

                    </div>





                    </section>











                </div>
                <div class="tab-pane fade" id="v-pills-Brand" role="tabpanel" aria-labelledby="v-pills-Brand-tab">

                    <div class="approval-list">
                    <ul class="nav nav-tabs bg-white shadow-sm" id="myTab" role="tablist">
                        <li class="nav-item" role="presentation">
                        <button class="nav-link active d-flex" id="brand-tab" data-bs-toggle="tab" data-bs-target="#brand"
                            type="button" role="tab" aria-controls="brand" aria-selected="true"><i
                            class="material-icons">subject</i> <span>Brand Details</span></button>
                        </li>
                        <li class="nav-item" role="presentation">
                        <button class="nav-link d-flex" id="product-tab" data-bs-toggle="tab" data-bs-target="#product"
                            type="button" role="tab" aria-controls="product" aria-selected="false"><i
                            class="material-icons">content_paste</i> <span>Products</span></button>
                        </li>
                        <li class="nav-item" role="presentation">
                        <button class="nav-link d-flex" id="users-tab" data-bs-toggle="tab" data-bs-target="#users"
                            type="button" role="tab" aria-controls="users" aria-selected="false"><i
                            class="material-icons">people</i> <span>User</span></button>
                        </li>
                        <li class="nav-item" role="presentation">
                        <button class="nav-link d-flex" id="billing-tab" data-bs-toggle="tab" data-bs-target="#billing"
                            type="button" role="tab" aria-controls="billing" aria-selected="false"><i
                            class="material-icons">credit_card</i> <span>Billing</span></button>
                        </li>
                    </ul>
                    </div>

                    <section class="content-approval">





                    <div class="tab-content" id="myTabContent">
                        <div class="tab-pane fade show active" id="brand" role="tabpanel" aria-labelledby="brand-tab">


                        <section class="brand-details my-4">
                            <div class="container shadow-sm bg-white py-3">
                            <div class="row">
                                <div class="col-lg-4 col-md-6 col-12">
                                <label for="">Logo:</label>
                                <div class="wrapper-dashboard">
                                    <div class="box">
                                    <div class="js--image-preview"></div>
                                    <div class="upload-options">
                                        <label>
                                        <input type="file" class="image-upload" accept="image/*" />
                                        </label>
                                    </div>
                                    </div>



                                </div>
                                </div>
                                <div class="col-lg-1"></div>
                                <div class="col-lg-4 col-md-6 col-12">
                                <label for="">Cover Image:</label>
                                <div class="wrapper-dashboard">
                                    <div class="box rounded w-100">
                                    <div class="js--image-preview"></div>
                                    <div class="upload-options">
                                        <label>
                                        <input type="file" class="image-upload" accept="image/*" />
                                        </label>
                                    </div>
                                    </div>



                                </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                <form action="">
                                    <label class="small-lable" for="">Name:</label>
                                    <input type="text" placeholder="Enter your name" value="Username" class="form-control"
                                    name="" id="" />
                                </form>
                                </div>
                                <div class="col-md-6">
                                <form class="mt-1" action="">
                                    <label class="small-lable" for="">Type:</label>
                                    <select name="" class="form-select " id="">
                                    <option value="">Not Set</option>
                                    <option value="">Agency</option>
                                    <option value="">Physical Products</option>
                                    <option value="">Digital Products</option>
                                    </select>
                                </form>
                                </div>
                                <div class="col-md-6">
                                <form class="mt-1" action="">
                                    <label class="small-lable" for="">Category:</label>
                                    <select name="" class="form-select " id="">
                                    <option value="">Not Set</option>
                                    <option value="">Apparel</option>
                                    <option value="">Automotive</option>
                                    <option value="">Games</option>
                                    <option value="">Entertainment</option>
                                    <option value="">Software</option>
                                    <option value="">Services</option>
                                    <option value="">Sports</option>
                                    <option value="">Retail</option>
                                    <option value="">Home</option>
                                    <option value="">Pets</option>
                                    <option value="">Other</option>
                                    </select>
                                </form>
                                </div>
                                <div class="col-md-12">
                                <form class="mt-1" action="">
                                    <label class="small-lable" for="">Brand Country:</label>
                                    <select name="" class="form-select " id="">
                                    <option value="">Pakistan</option>
                                    <option value="">India</option>
                                    <option value="">Iran</option>
                                    <option value="">Iraq</option>
                                    <option value="">China</option>
                                    <option value="">Srilanka</option>
                                    <option value="">United States America</option>
                                    <option value="">England</option>
                                    </select>
                                </form>
                                </div>
                                <div class="col-md-12">
                                <form class="mt-1" action="">
                                    <label class="small-lable" for="">Brand Country:</label>
                                    <input type="text" class="form-control" placeholder="Enter homepage"
                                    value="www.example.com" />
                                </form>
                                </div>
                                <div class="col-md-12">
                                <form class="mt-1" action="">
                                    <label class="small-lable" for="">Brand Description:</label>
                                    <input type="text" class="form-control" placeholder="Enter Brand Description" />
                                </form>
                                </div>
                                <div class="col-md-6">
                                <form class="mt-1" action="">
                                    <label class="small-lable" for="">Facebook:</label>
                                    <input type="url" class="form-control" placeholder="Facebook Url" />
                                </form>
                                </div>
                                <div class="col-md-6">
                                <form class="mt-1" action="">
                                    <label class="small-lable" for="">Instagram:</label>
                                    <input type="url" class="form-control" placeholder="Instagram Url" />
                                </form>
                                </div>
                            </div>
                            <div class="save-info mt-3">
                                <button class=" mx-1  pb-0 btn btn-primary px-3">Save</button>
                                <button class=" mx-1 pb-0 btn btn-Danger px-3">Cancel</button>
                            </div>
                            </div>
                        </section>

                        </div>
                        <div class="tab-pane fade" id="product" role="tabpanel" aria-labelledby="product-tab">
                        <div class="no-data my-4">
                            <div class="container">
                            <div class="d-flex bg-white px-3 py-4 shadow-sm rounded">
                                <div class="icon">
                                <i class="material-icons">info</i>
                                </div>
                                <div class="no-content mt-4 ms-2">
                                <h6>No products found!</h6>
                                </div>
                                <div class="create-product ms-auto">
                                
                                <button type="button" class="btn btn-primary pb-0 mx-2 mt-3" data-bs-toggle="modal"
                                    data-bs-target="#exampleModal">
                                    Create
                                </button>

                               
                                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                                    aria-hidden="true">
                                    <div class="modal-dialog modal-lg">
                                    <div class="modal-content">
                                        <div class="modal-header border-0">
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body border-0">
                                        <div class="approval-list">
                                            <ul class="nav nav-tabs bg-white shadow-sm" id="myTab" role="tablist">
                                            <li class="nav-item mx-1" role="presentation">
                                                <button class="nav-link active d-flex" id="Create1-tab" data-bs-toggle="tab"
                                                data-bs-target="#Create1" type="button" role="tab" aria-controls="Create1"
                                                aria-selected="true"> <span>Product Details</span></button>
                                            </li>
                                            <li class="nav-item mx-1" role="presentation">
                                                <button class="nav-link d-flex" id="Create2-tab" data-bs-toggle="tab"
                                                data-bs-target="#Create2" type="button" role="tab" aria-controls="Create2"
                                                aria-selected="false">
                                                <span>Product Preferences Form</span></button>
                                            </li>

                                            </ul>



                                            <div class="tab-content" id="myTabContent">


                                            <div class="tab-pane fade show active" id="Create1" role="tabpanel"
                                                aria-labelledby="Create1-tab">

                                                <p class="mb-0 mt-4">Product Type</p>

                                                <section class="task">
                                                <div class="container">
                                                    <ul class="nav nav-pills mb-3" role="tablist">
                                                    <li class="nav-item mx-1" role="presentation">
                                                        <button class="d-flex nav-link active pt-1 pt-0 border"
                                                        data-bs-toggle="pill" type="button" role="tab" aria-selected="true"><i
                                                            class="material-icons mx-1 ">local_offer</i> Physical Product
                                                        </button>
                                                    </li>
                                                    <li class="nav-item mx-1" role="presentation">
                                                        <button class="d-flex nav-link pt-1 pb-0 border" data-bs-toggle="pill"
                                                        type="button" role="tab" aria-selected="false"><i
                                                            class="material-icons mx-1 ">devices</i> Digital Product Or
                                                        Services</button>
                                                    </li>
                                                    </ul>
                                                </div>
                                                </section>

                                                <p class="mb-1">Product Name</p>
                                                <input type="text" class="form-control" />

                                                <p class="mt-3 mb-1">Product Description</p>
                                                <textarea class="form-control" name="" id="" cols="30" rows="3"></textarea>

                                                <p class="mb-1 mt-3">Product Name</p>
                                                <small>Record how to pronounce your brand & product names so the creator can say
                                                them correctly when shooting a video</small>
                                                <div class="d-flex bg-light px-3 py-2 rounded">
                                                <button class="border-0 mx-1"><i class="material-icons">mic</i></button>
                                                <span class="mt-1 fs-6 mx-1">00:00</span>
                                                </div>
                                                <p class="mt-3 mb-1">Product Image</p>
                                                <div class="upload-btn-wrapper w-100">
                                                <button class="btn bg-light py-2 px-2 rounded w-100"> <i
                                                    class="material-icons fs-1">file_upload</i> <br /> Upload a file</button>
                                                <input type="file" name="myfile" />
                                                </div>
                                                <p class="mt-3 mb-1">Product Homepage</p>
                                                <input type="url" class="form-control" placeholder="homepage url" />

                                                <p class="mt-3 mb-1">Product Homepage</p>
                                                <input type="text" class="form-control" value="0" />
                                            </div>
                                            <div class="tab-pane fade" id="Create2" role="tabpanel"
                                                aria-labelledby="Create2-tab">

                                                <p class="mt-3">Create a list of questions so the creators can define their
                                                product preferences, such as the size, color or other product options they'd
                                                like to receive.</p>
                                                <button class="border-0 bg-white " style={{color:"#7649FC"}}>+ Add
                                                Question</button>


                                            </div>

                                            </div>
                                        </div>
                                        </div>
                                        <div class="modal-footer">
                                        <button class="me-auto pb-0 btn btn-primary">Create Product</button>
                                        <button type="button" class="btn btn-secondary pb-0"
                                            data-bs-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-primary pb-0">Save changes</button>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div class="tab-pane fade" id="users" role="tabpanel" aria-labelledby="users-tab">
                        <div class="invite mt-3">
                            <div class="container">
                        <button type="button" class="btn btn-primary d-flex pb-0 " data-bs-toggle="modal" data-bs-target="#exampleModal2">
                            <i class="material-icons text-white mx-1">send</i> <span class="mt-1 fs-6 text-white">Invite</span>
                        </button>

                     
                        <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel"
                            aria-hidden="true">
                            <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                <h5 class="modal-title">Invite your team member</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body border-0">
                                <label for="">Email Address</label>
                                <input type="email" class="form-control" />
                                </div>
                                <div class="modal-footer">
                                <button type="button" class="btn btn-secondary pb-0" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary pb-0">Send Invite</button>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div class="table bg-white p-2 my-3">
                            <table class="w-100">
                            <tr >
                                <td>ID</td>
                                <td>Name</td>
                                <td>Email</td>
                                <td>Brand Role</td>
                            </tr>
                            <tr>
                            <td> <p class="my-2">No Data Available</p></td>
                            </tr>
                            </table>
                        </div>
                        </div>
                        </div>
                        </div>


                        <div class="tab-pane fade" id="billing" role="tabpanel" aria-labelledby="billing-tab">

                        <div class="container">
                            <div class="billing-info ">
                            <div class="col-lg-8 bg-white shadow-sm p-4 mt-3 rounded shadow-sm">
                                <h5>Billing Info</h5>
                                <div class="row">
                                <div class="col-md-6 ">
                                <div class="my-2">
                                <label for="">Company Name</label>
                                <input class="form-control" type="text" value="Example Company" name="" id="" />
                                </div>
                                <div class="my-2">
                                <label for="">Company Address</label>
                                <input class="form-control" type="text" value="Address Company" name="" id="" />
                                </div>
                                <div class="my-2">
                                <label for="">Registration Code</label>
                                <input class="form-control" type="text" value="12345" name="" id="" />
                                </div>
                                </div>
                                <div class="col-md-6">
                                <div class="my-2">
                                <label for="">VAT</label>
                                <input class="form-control" type="text" value="123456" name="" id="" />
                                </div>
                                <div class="my-2">
                                <label for="">Email Address</label>
                                <input class="form-control" type="text" value="example@example.com" name="" id="" />
                                </div>
                                <div class="my-2">
                                <label for="">Phone Number</label>
                                <input class="form-control" type="text" value="+1234567890" name="" id="" />
                                </div>
                                </div>
                            </div>
                            <div class="save-btns mt-3">
                                <button class="mx-1 btn btn-primary pb-0">Save</button>
                                <button class="mx-1 btn btn-danger pb-0">Cancel</button>
                            </div>
                            </div>
                            <div class="col-lg-8 bg-white shadow-sm p-4 mt-3 rounded shadow-sm">
                                <h5>Payment Infos</h5>
                                <span class="fs-6 mt-3 mb-4">No payment information associated.</span>
                                <br />
                                <button class="border-0 bg-white d-flex" > <i class="material-icons" style={{color:"#7649FC"}}>edit</i> <span class="mx-1 mt-1 fs-6" style={{color:"#7649FC"}}>Edit Payment Method</span></button>
                            </div>
                            </div>
                        </div>

                        </div>
                    </div>





                    </section>
                </div>
                <div class="tab-pane fade" id="v-pills-myBrand" role="tabpanel" aria-labelledby="v-pills-myBrand-tab">
                    <div class="invite mt-3">
                    <div class="container">

                    <button type="button" class="btn btn-primary d-flex pb-0 " data-bs-toggle="modal" data-bs-target="#exampleModal5">
                    Create
                    </button>

                    <div class="modal fade" id="exampleModal5" tabindex="-1" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Create a brand</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body border-0">
                            
                            <input type="email" class="form-control" /> 
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary pb-0" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary pb-0">Create</button>
                        </div>
                        </div>
                    </div>
                    </div>
                    <hr />
                    
                    <nav aria-label="...">
                        <ul class="pagination justify-content-center">
                        <li class="page-item disabled">
                            <a class="page-link" href='/'><i class="material-icons">chevron_left</i></a>
                        </li>
                        <li class="page-item"><a class="page-link" href="/">1</a></li>

                        <li class="page-item">
                            <a class="page-link" href="/"><i class="material-icons">chevron_right</i></a>
                        </li>
                        </ul>
                    </nav>

                    <div class="table bg-white p-2 my-3">
                    <table cellpadding="10px" class="w-100">
                        <tr >
                        <td class="p-2">Brand Name</td>
                        <td  class="p-2">Country</td>
                        <td  class="p-2">Content Units Ordered</td>
                        <td  class="p-2">Content Units Completed</td>
                        <td  class="p-2">Date Created</td>
                        </tr>
                        <tr >
                        <td  class="p-2">Example Name</td>
                        <td  class="p-2">Pakistan</td>
                        <td  class="p-2">3</td>
                        <td  class="p-2">6</td>
                        <td  class="p-2">2022-04-20</td>
                        </tr>
                    </table>
                    </div>
                    </div>
                </div>

                </div>
                <div class="tab-pane fade" id="v-pills-get" role="tabpanel" aria-labelledby="v-pills-get-tab">
                    
                    <div class="video-scrollspy row mt-4 mb-5 pb-5">
                    <div class="col-md-3">
                    <div id="list-example" class="list-group">
                    <a class="list-group-item list-group-item-action" href="#list-item-1">Product</a>
                    <a class="list-group-item list-group-item-action" href="#list-item-2">Video Type</a>
                    <a class="list-group-item list-group-item-action" href="#list-item-3">Model Type</a>
                    <a class="list-group-item list-group-item-action" href="#list-item-4">Video Duration</a>
                    <a class="list-group-item list-group-item-action" href="#list-item-5">Scenario</a>
                    <a class="list-group-item list-group-item-action" href="#list-item-6">Mentions</a>
                    <a class="list-group-item list-group-item-action" href="#list-item-7">Video Format</a>
                    <a class="list-group-item list-group-item-action" href="#list-item-8">Number of Videos</a>
                    <a class="list-group-item list-group-item-action" href="#list-item-9">Order Summary</a>
                    <a class="list-group-item list-group-item-action" href="#list-item-10">Schedule</a>
                    </div>
                </div>
                <div class="col-md-9">
                    <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-offset="0" class="scrollspy-example bg-white shadow-sm rounded px-2 py-3" tabindex="0">
                    <h5 id="list-item-1">Your Product</h5>
                    <div class="spy-content s">
                        <div class="create-product ms-auto">
                        
                        <button type="button" class="text-center mx-3 shadow-sm rounded bg-white border-0 p-4" data-bs-toggle="modal"
                            data-bs-target="#exampleModal10">
                            <i class="material-icons fs-1">add_circle_outline</i>
                            <br />
                            <span class="fs-5">Create a new product</span>
                        </button>
                        <hr />
                        
                        <div class="modal fade" id="exampleModal10" tabindex="-1" aria-labelledby="exampleModalLabel"
                            aria-hidden="true">
                            <div class="modal-dialog modal-lg">
                            <div class="modal-content">
                                <div class="modal-header border-0">
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                                </div>
                                <div class="modal-body border-0">
                                <div class="approval-list">
                                    <ul class="nav nav-tabs bg-white shadow-sm" id="myTab" role="tablist">
                                    <li class="nav-item mx-1" role="presentation">
                                        <button class="nav-link active d-flex" id="Create5-tab" data-bs-toggle="tab"
                                        data-bs-target="#Create5" type="button" role="tab" aria-controls="Create5"
                                        aria-selected="true"> <span>Product Details</span></button>
                                    </li>
                                    <li class="nav-item mx-1" role="presentation">
                                        <button class="nav-link d-flex" id="Create3-tab" data-bs-toggle="tab"
                                        data-bs-target="#Create3" type="button" role="tab" aria-controls="Create3"
                                        aria-selected="false">
                                        <span>Product Preferences Form</span></button>
                                    </li>

                                    </ul>



                                    <div class="tab-content" id="myTabContent">


                                    <div class="tab-pane fade show active" id="Create5" role="tabpanel"
                                        aria-labelledby="Create5-tab">

                                        <p class="mb-0 mt-4">Product Type</p>

                                        <section class="task">
                                        <div class="container">
                                            <ul class="nav nav-pills mb-3" role="tablist">
                                            <li class="nav-item mx-1" role="presentation">
                                                <button class="d-flex nav-link active pt-1 pt-0 border"
                                                data-bs-toggle="pill" type="button" role="tab" aria-selected="true"><i
                                                    class="material-icons mx-1 ">local_offer</i> Physical Product
                                                </button>
                                            </li>
                                            <li class="nav-item mx-1" role="presentation">
                                                <button class="d-flex nav-link pt-1 pb-0 border" data-bs-toggle="pill"
                                                type="button" role="tab" aria-selected="false"><i
                                                    class="material-icons mx-1 ">devices</i> Digital Product Or
                                                Services</button>
                                            </li>
                                            </ul>
                                        </div>
                                        </section>

                                        <p class="mb-1">Product Name</p>
                                        <input type="text" class="form-control" />

                                        <p class="mt-3 mb-1">Product Description</p>
                                        <textarea class="form-control" name="" id="" cols="30" rows="3"></textarea>

                                        <p class="mb-1 mt-3">Product Name</p>
                                        <small>Record how to pronounce your brand & product names so the creator can say
                                        them correctly when shooting a video</small>
                                        <div class="d-flex bg-light px-3 py-2 rounded">
                                        <button class="border-0 mx-1"><i class="material-icons">mic</i></button>
                                        <span class="mt-1 fs-6 mx-1">00:00</span>
                                        </div>
                                        <p class="mt-3 mb-1">Product Image</p>
                                        <div class="upload-btn-wrapper w-100">
                                        <button class="btn bg-light py-2 px-2 rounded w-100"> <i
                                            class="material-icons fs-1">file_upload</i> <br /> Upload a file</button>
                                        <input type="file" name="myfile" />
                                        </div>
                                        <p class="mt-3 mb-1">Product Homepage</p>
                                        <input type="url" class="form-control" placeholder="homepage url" />

                                        <p class="mt-3 mb-1">Product Homepage</p>
                                        <input type="text" class="form-control" value="0"/>
                                    </div>
                                    <div class="tab-pane fade" id="Create3" role="tabpanel"
                                        aria-labelledby="Create3-tab">

                                        <p class="mt-3">Create a list of questions so the creators can define their
                                        product preferences, such as the size, color or other product options they'd
                                        like to receive.</p>
                                        <button class="border-0 bg-white " style={{color:"#7649FC"}}>+ Add
                                        Question</button>


                                    </div>

                                    </div>
                                </div>
                                </div>
                                <div class="modal-footer">
                                <button class="me-auto pb-0 btn btn-primary">Create Product</button>
                                <button type="button" class="btn btn-secondary pb-0"
                                    data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary pb-0">Save changes</button>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <h5 id="list-item-2">Video Type</h5>
                    <div class="spy-content">
                        <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li class="nav-item m-1" role="presentation">
                            <button class="nav-link active rounded text-start p-3" id="pills-type1-tab" data-bs-toggle="pill" data-bs-target="#pills-type1" type="button" role="tab" aria-controls="pills-type1" aria-selected="true">
                            <h5>Video Ad</h5>
                            <span>Best ads on Facebook, Instagram, Youtube, Tiktok etc.</span>
                            </button>
                        </li>
                        <li class="nav-item m-1" role="presentation">
                            <button class="nav-link rounded text-start p-3" id="pills-type2-tab" data-bs-toggle="pill" data-bs-target="#pills-type2" type="button" role="tab" aria-controls="pills-type2" aria-selected="false">
                            <h5>Testimonial</h5>
                            <span>Highlights your product Benefits.</span>
                            </button>
                        </li>
                        <li class="nav-item m-1 " role="presentation">
                            <button class="nav-link rounded text-start p-3" id="pills-type3-tab" data-bs-toggle="pill" data-bs-target="#pills-type3" type="button" role="tab" aria-controls="pills-type3" aria-selected="false">
                            <h5>How To</h5>
                            <span>Explainer video for your product</span>
                            </button>
                        </li>
                        <li class="nav-item m-1 " role="presentation">
                            <button class="nav-link rounded text-start p-3" id="pills-type4-tab" data-bs-toggle="pill" data-bs-target="#pills-type4" type="button" role="tab" aria-controls="pills-type4" aria-selected="false">
                            <h5>Unboxing</h5>
                            <span>Display the unboxing experience of your product.</span>
                            </button>
                        </li>
                        <li class="nav-item m-1 " role="presentation">
                            <button class="nav-link rounded text-start p-3" id="pills-type5-tab" data-bs-toggle="pill" data-bs-target="#pills-type5" type="button" role="tab" aria-controls="pills-type5" aria-selected="false">
                            <h5>360 Showcase</h5>
                            <span>Show your product from every angle.</span>
                            </button>
                        </li>
                        </ul>
                        
                    </div>
                    <hr />
                    <h5 id="list-item-3">Model Type</h5>
                    <div class="spy-content">
                        <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li class="nav-item m-1" role="presentation">
                            <button class="nav-link active rounded text-center p-3" id="pills-type6-tab" data-bs-toggle="pill" data-bs-target="#pills-type6" type="button" role="tab" aria-controls="pills-type6" aria-selected="true">
                            <i class="material-icons">waving_hand</i>
                            <br />
                            <span>Hands-only</span>
                            </button>
                        </li>
                        <li class="nav-item m-1" role="presentation">
                            <button class="nav-link rounded text-start p-3" id="pills-type2-tab" data-bs-toggle="pill" data-bs-target="#pills-type2" type="button" role="tab" aria-controls="pills-type2" aria-selected="false">
                            <i class="material-icons">accessibility</i>
                            <br />
                            <span>Body</span>
                            </button>
                        </li>
                        <li class="nav-item m-1" role="presentation">
                            <button class="nav-link rounded text-center p-3" id="pills-type8-tab" data-bs-toggle="pill" data-bs-target="#pills-type8" type="button" role="tab" aria-controls="pills-type8" aria-selected="false">
                            <i class="material-icons">do_not_disturb</i>
                            <br />
                            <span>No model</span>
                            </button>
                        </li>

                        </ul>
                        <div class="bg-light p-3 rounded">
                        <span><a href="/">Learn More</a></span>
                        <span>about model types</span>
                        </div>
                        
                    </div>
                        <hr />
                    <h5 id="list-item-4">Video Duration</h5>
                    <div class="spy-content">
                        <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li class="nav-item m-1" role="presentation">
                            <button class="nav-link active rounded text-center p-3" id="pills-type6-tab" data-bs-toggle="pill" data-bs-target="#pills-type6" type="button" role="tab" aria-controls="pills-type6" aria-selected="true">
                            <i class="material-icons">schedule</i>
                            <br />
                            
                            <span>15 Seconds</span>
                            <br />
                            <span class="fs-4">$80</span>
                            <br />
                            <span>$5.00/sec</span>
                            </button>
                        </li>
                        <li class="nav-item m-1" role="presentation">
                            <button class="nav-link rounded text-center p-3" id="pills-type2-tab" data-bs-toggle="pill" data-bs-target="#pills-type2" type="button" role="tab" aria-controls="pills-type2" aria-selected="false">
                            <i class="material-icons">schedule</i>
                            <br />
                            
                            <span>15 Seconds</span>
                            <br />
                            <span class="fs-4">$80</span>
                            <br />
                            <span>$5.00/sec</span>
                            </button>
                        </li>
                        <li class="nav-item m-1" role="presentation">
                            <button class="nav-link rounded text-center p-3" id="pills-type8-tab" data-bs-toggle="pill" data-bs-target="#pills-type8" type="button" role="tab" aria-controls="pills-type8" aria-selected="false">
                            <i class="material-icons">schedule</i>
                            <br />
                            
                            <span>15 Seconds</span>
                            <br />
                            <span class="fs-4">$80</span>
                            <br />
                            <span>$5.00/sec</span>
                            </button>
                        </li>

                        </ul>
                    
                        
                    </div>
                        <hr />
                        <h5 id="list-item-5">Scenario</h5>
                        <h6>Scenes</h6>
                        <p class="fs-6 mb-0">Scenes describe what can be seen in a video. <a href="/">See Tips & Example.</a></p>
                        <div class="spy-content">
                        <div class="alert d-flex alert-dismissible py-1 fade show" role="alert">
                            <input type="text" class="form-control" value="Describe the main benefit" name="" id="" />
                            <button type="button" class="bg-white border-0" data-bs-dismiss="alert" aria-label="Close"><i class="material-icons">delete</i></button>
                        </div>
                        <div class="alert d-flex alert-dismissible py-1 fade show" role="alert">
                            <input type="text" class="form-control" value="Describe the main benefit" name="" id="" />
                            <button type="button" class="bg-white border-0" data-bs-dismiss="alert" aria-label="Close"><i class="material-icons">delete</i></button>
                        </div>
                        <div class="alert d-flex alert-dismissible py-1 fade show" role="alert">
                            <input type="text" class="form-control" value="Describe the main benefit" name="" id="" />
                            <button type="button" class="bg-white border-0" data-bs-dismiss="alert" aria-label="Close"><i class="material-icons">delete</i></button>
                        </div>
                        <button class=" mx-3 bg-white p-0 border-0" style={{color:"#7649FC"}}>+ Add Scene</button>
                        </div>
                        <hr />
                        <h5 id="list-item-6">Mentions</h5>

                        <p class="fs-6 ">Anything the creator should mention or highlight.</p>
                        <div class="spy-content">
                        <ul class="nav nav-pills mb-3" role="tablist">
                            <li class="nav-item mx-1" role="presentation">
                            <button class="nav-link active" data-bs-toggle="pill" type="button" role="tab"
                                aria-selected="true">Brand & Product</button>
                            </li>
                            <li class="nav-item mx-1" role="presentation">
                            <button class="nav-link" data-bs-toggle="pill" type="button" role="tab"
                                aria-selected="false">Product Features</button>
                            </li>
                            <li class="nav-item mx-1" role="presentation">
                            <button class="nav-link" data-bs-toggle="pill" type="button" role="tab"
                                aria-selected="false">Promo</button>
                            </li>
                            <li class="nav-item mx-1" role="presentation">
                            <button class="nav-link" data-bs-toggle="pill" type="button" role="tab"
                                aria-selected="false">Call to action</button>
                            </li>
            
                        </ul>
                        <ul class="nav nav-pills mb-3" role="tablist">
                            <li class="nav-item mx-1" role="presentation">
                            <button class="nav-link d-flex active" data-bs-toggle="pill" type="button" role="tab"
                                aria-selected="true"><i class="material-icons me-2">add_circle_outline</i> <span class="mt-1 fs-6">Username</span> </button>
                            </li>
                            <li class="nav-item mx-1" role="presentation">
                            <button class="nav-link d-flex" data-bs-toggle="pill" type="button" role="tab"
                                aria-selected="false"><i class="material-icons me-2">add_circle_outline</i> <span class="mt-1 fs-6">Username</span></button>
                            </li>
            
                        </ul>
                        <div class="alert d-flex alert-dismissible py-1 fade show" role="alert">
                            <input type="text" class="form-control" value="Describe the main benefit" name="" id="" />
                            <button type="button" class="bg-white border-0" data-bs-dismiss="alert" aria-label="Close"><i class="material-icons">delete</i></button>
                        </div>
                        <button class=" mx-3 mb-3 bg-white p-0 border-0" style={{color:"#7649FC"}}>+ Add Mention</button>
                        <p>Additional Details</p>
                        <span>Visible to approved creators only</span>
                        <textarea name="" id="" cols="30" class="form-control" rows="4"></textarea>
                        </div>
                            <hr />
                            <h5 id="list-item-7">Choose Video Format</h5>
                            <div class="spy-content">
                            <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                <li class="nav-item m-1" role="presentation">
                                <button class="nav-link active rounded text-center px-4 py-3" id="pills-type6-tab" data-bs-toggle="pill" data-bs-target="#pills-type6" type="button" role="tab" aria-controls="pills-type6" aria-selected="true">
                                    <i class="material-icons fs-1">crop_16_9</i>
                                    <br />
                                    <span>16:9</span>
                                    <br />
                                    <span>Horizontal</span>
                                </button>
                                </li>
                                <li class="nav-item m-1" role="presentation">
                                <button class="nav-link rounded text-center px-4 py-3" id="pills-type2-tab" data-bs-toggle="pill" data-bs-target="#pills-type2" type="button" role="tab" aria-controls="pills-type2" aria-selected="false">
                                    <i class="material-icons fs-1">crop_square</i>
                                    <br />
                                    <span>1:1</span>
                                    <br />
                                    <span>Square</span>
                                </button>
                                </li>
                                <li class="nav-item m-1" role="presentation">
                                <button class="nav-link rounded text-center px-4 py-3" id="pills-type2-tab" data-bs-toggle="pill" data-bs-target="#pills-type2" type="button" role="tab" aria-controls="pills-type2" aria-selected="false">
                                    <i class="material-icons fs-1">crop_5_4</i>
                                    <br />
                                    <span>4:5</span>
                                    <br />
                                    <span>Vertical</span>
                                </button>
                                </li>
            
                                <li class="nav-item m-1" role="presentation">
                                <button class="nav-link rounded text-center px-4 py-3" id="pills-type2-tab" data-bs-toggle="pill" data-bs-target="#pills-type2" type="button" role="tab" aria-controls="pills-type2" aria-selected="false">
                                    <i class="material-icons fs-1">crop_portrait</i>
                                    <br />
                                    <span>9:16</span>
                                    <br />
                                    <span>Vertical</span>
                                </button>
                                </li>
                            </ul>
                            
                            
                            </div>
                            <hr />
                            <h5 id="list-item-8">Number of videos</h5>
                            <div class="spy-content">
                            <div class="row">
                            <div class="col-md-3">
                                <div class="p-3 shadow-sm rounded text-center justify-content-center">
                                <span class="fs-5">How many videos you'd like to order?</span>
                                <div class="d-flex mx-auto justify-content-center">
                                    <button class="bg-white p-0 border-0" onclick="increment()"><i class="material-icons fs-2">add_circle</i></button>
                                    <input  id="demoInput"  value="0" class="border-0 px-0 text-center" type="number" min="0" max="110" />
                                    <button class="bg-white p-0 border-0" onclick="decrement()"><i class="material-icons fs-2">remove_circle</i></button>
                                
                                </div>
                            </div>
                            </div>
                            <div class="col-md-9">
                                <div class="video-content p-3 bg-light">
                                <p class="">Order will be carried out by <a href="/"> 3 creators</a></p>
                                <h5>Your Product Shipping</h5>
                                <span>Note that  <u>you will have to send one product to each creator producing the video (as a giveaway).</u> </span>
                                <br />
                                <span>The faster you ship products to approved creators, the faster you can expect to receive the final videos.</span>

                                </div>
                            </div>
                            </div>
                            </div>
                            <hr />
                            <h5 id="list-item-9">Order Summary</h5>
                            <div class="spy-content">
                            <div class="row">
                                <div class="col-md-4">
                                <div class="video-ads p-3 border rounded">
                                    <h5>3x Video-ads <span class="fs-6">[$99 / Video ]</span></h5>
                                    <ul class="nav nav-pills mb-2" role="tablist">
                                    <li class="nav-item mx-1" role="presentation">
                                        <button class="nav-link d-flex active" data-bs-toggle="pill" type="button" role="tab"
                                        aria-selected="true"> Facebook </button>
                                    </li>
                                    <li class="nav-item mx-1" role="presentation">
                                        <button class="nav-link d-flex" data-bs-toggle="pill" type="button" role="tab"
                                        aria-selected="false"> 30s </button>
                                    </li>
                                    <li class="nav-item mx-1" role="presentation">
                                        <button class="nav-link d-flex" data-bs-toggle="pill" type="button" role="tab"
                                        aria-selected="false"> 16:9 </button>
                                    </li>
                                    </ul>
                                    <p class="mb-1">Promocode</p>
                                    <div class="d-flex">
                                    <input type="text" class="form-control" name="" id="" />
                                    <button class="btn btn-primary pb-0">Apply</button>
                                    </div>
                                </div>
                                </div>
                                <div class="col-md-8 shadow-sm bg-light">
                                <div class="float-end mt-5 me-2">
                                <span>Total:</span>
                                <br />
                                <h3>$300.00</h3>
                                </div>
                                </div>
                            </div>
                            </div>
                            <hr />
                            <h5 id="list-item-10">Estimated video delivery</h5>
                            <div class="spy-content">
                            <button class="btn btn-primary  px-5 py-2 mb-3">June 5</button>
                            <br />
                            <a href="/">See Delivery Breakdown</a>
                            <p class="mt-3"> <input type="checkbox" class="mx-1" name="" id="" /> I agree with these terms. I understand that there may be a delay caused by product logistics, my approvals or edit requests. </p>
                            </div>
                            <div class="fixed-bottom bg-white pt-3">
                            <div class="mx-5 px-5">
                                <button class="btn btn-primary">Save Draft</button>
                                <div class="float-end d-flex">
                                <div class="mx-1">
                                <h6>3x Video-ads x $99</h6>
                                <h6>Total : $100</h6>
                                </div>
                                <div class="mx-1">
                                <button class="btn btn-primary pb-0">Checkout</button>

                                </div>
                                </div>
                            </div>
                            </div>
                    </div>
                </div>

                </div>
                </div> */}
                </div>
            </div>
            </div>

    </div>
    </div>
  )
}

export default Dashboard