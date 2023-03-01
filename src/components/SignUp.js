import React from 'react'
import { Link } from 'react-router-dom'
import leftArrow from"../images/left-arrow.svg"
import "./signUp.css"
const SignUp = () => {
  return (
   <div className='main'>
    <div className="container">
    <div className='content'>
    <h2 className='heading'>Register In Your Account</h2>
    <div>
        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item">
                <Link className="nav-link active" id="pills-vendor-tab" data-toggle="pill" href="#pills-vendor" role="tab" aria-controls="pills-home" aria-selected="true">Vendor</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link active" id="pills-user-tab" data-toggle="pill" href="#pills-user" role="tab" aria-controls="pills-profile" aria-selected="false">User</Link>
            </li>
        </ul>
        </div>
    <div class="tab-content" id="pills-tabContent">
    <div class="tab-pane fade show active" id="pills-vendor" role="tabpanel" aria-labelledby="pills-vendor-tab">
    <form method='POST' >
        <div className='inputDiv'>
        <input className="form-control" type="text" placeholder="Name"/>
        </div>
        <div className='inputDiv'>
        <input className="form-control" type="text" placeholder="Mobile Number"/>
        </div>
        <div className='inputDiv'>
        <input className="form-control" type="text" placeholder="Mail_Id"/>
        </div>
        <div className='inputDiv'>
        <input className="form-control" type="text" placeholder="Password"/>
        </div>
        <div className='inputDiv'>
        <input className="form-control" type="text" placeholder="Confirm Password"/>
        </div>
        <div className='BtnContainer'>
        <button type="submit" className="btn"style={{color:"#4E94F4"}}>Sign-In</button>
        <span>
            <button  className="btn" >
                <img src={leftArrow} alt="arrow" />
            </button>
            <button  className="btn btn-primary">Register</button>
        </span>
        </div>
    </form>
    </div>
    <div class="tab-pane fade" id="pills-user" role="tabpanel" aria-labelledby="pills-profile-tab">
    <form method='POST' >
        <div className='inputDiv'>
        <input className="form-control" type="text" placeholder="Name"/>
        </div>
        <div className='inputDiv'>
        <input className="form-control" type="text" placeholder="Mobile Number"/>
        </div>
        <div className='inputDiv'>
        <input className="form-control" type="text" placeholder="Mail_Id"/>
        </div>
        <div className='inputDiv'>
        <input className="form-control" type="text" placeholder="Password"/>
        </div>
        {/* <div className='inputDiv'>
        <input className="form-control" type="text" placeholder="Confirm Password"/>
        </div> */}
        <div className='BtnContainer'>
        <button type="submit" className="btn"style={{color:"#4E94F4"}}>Sign-In</button>
        <span>
            <button  className="btn" >
                <img src={leftArrow} alt="arrow" />
            </button>
            <button  className="btn btn-primary">Register</button>
        </span>
        </div>
    </form>
    </div>
    </div>
    </div>
   
   </div>
   </div>
  )
}

export default SignUp