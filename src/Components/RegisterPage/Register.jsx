import React, { useEffect, useState } from "react";
import RegisterImage from "../../Assets/login_img.png";
import RegisterStyle from "./Register.module.scss";
import Button from "../Common/Button";
import { useNavigate } from "react-router-dom";


const Register = () => {
    const navigate = useNavigate();

    const [formData , setFormData] = useState({
        name:"",
        userName:"",
        email:"",
        mobile:"",
        checkbox:false,
    })
    

    const [errors , setErrors] = useState({})
    // console.log("error",errors)

    const handleOnChange = (e) => {
        const {name , value , type , checked} = e.target;
        const newValue = type === 'checkbox' ? checked : value;
        setFormData({...formData, [name]: newValue});
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        if(isValidForm()){
            console.log("valid from" , formData);
            setFormData({
                name:"",
                userName:"",
                email:"",
                mobile:"",
                checkbox:false
            })
            localStorage.setItem("registrationData" , JSON.stringify(formData));
            navigate("/");
        }
    }

    //  checking the registration data is present in the local storage or not
    useEffect(() => {
        if (localStorage.getItem('registrationData')) {
            navigate("/")
        }
      }, []);

    // validation
    const isValidForm = () => {
        const newErrors = {};
        if(!formData.name.trim()){
            newErrors.name = 'Name is required';
        }

        if(!formData.userName.trim()){
            newErrors.userName = 'Username is required';
        }

        if(!formData.email.trim()){
            newErrors.email = 'Email is required';
        }

        if(!formData.mobile){
            newErrors.mobile = 'Number is required';
        }

        if(!formData.checkbox){
            newErrors.checkbox = "Check this box if you want to proceed";
        }

        if(Object.keys(newErrors).length){
            setErrors(newErrors);
            console.log("checkbox:" ,formData.checkbox)
        }
        else
            return true;
    }

  return (
    <div className={RegisterStyle.container}>
      <div className={RegisterStyle.image}>
        <img src={RegisterImage} alt="Image" />
        <p className={RegisterStyle.imageText}>Discover new things on Superapp</p>
      </div>
      <div className={RegisterStyle.formContainer}>
        <div className={RegisterStyle.formMain}>
          <div className={RegisterStyle.textdata}>
            <p className={RegisterStyle.title}>Super App</p>
            <p className={RegisterStyle.description}>Create your new account</p>
          </div>
          <form onSubmit={handleOnSubmit}>

            <input 
                type="text" 
                placeholder="Name"
                name="name"
                onChange={handleOnChange}
                value={formData.name}
                className={errors.name ? `${RegisterStyle.errorBorder}` : ` ${RegisterStyle.inputbox}`}
            />
            <span className={RegisterStyle.errors}>{errors.name}</span>

            <input 
                type="text" 
                placeholder="UserName"
                name="userName"
                onChange={handleOnChange}
                value={formData.userName}
                className={errors.userName ? `${RegisterStyle.errorBorder}` : ` ${RegisterStyle.inputbox}`}
            />
            <span className={RegisterStyle.errors}>{errors.userName}</span>

            <input 
                type="email"
                 placeholder="Email"
                 name="email"
                 onChange={handleOnChange}
                 value={formData.email}
                 className={errors.email ? `${RegisterStyle.errorBorder}` : ` ${RegisterStyle.inputbox}`}
            />
            <span className={RegisterStyle.errors}>{errors.email}</span>

            <input 
                type="text" 
                placeholder="Mobile"
                name="mobile"
                onChange={handleOnChange}
                value={formData.mobile}
                className={errors.mobile ? `${RegisterStyle.errorBorder}` : ` ${RegisterStyle.inputbox}`}
            />
            <span className={RegisterStyle.errors}>{errors.mobile}</span>

            <div className={RegisterStyle.checkboxContainer}>
                <div className={RegisterStyle.checkbox}>
                    <input 
                        type="checkbox"
                        name="checkbox"
                        onChange={handleOnChange}
                        value={formData.checkbox}
                    />
                    <p>Share my registration data with Superapp</p>
                </div>
                    <span className={RegisterStyle.errors}>
                        {errors.checkbox}
                    </span>
                
            </div>

            <Button Text={"SIGN UP"}/>

          </form>
          <div className={RegisterStyle.terms}>
            <p className={RegisterStyle.termsPara}>By clicking on Sign up. you agree to Superapp <span className={RegisterStyle.terms}>Terms and Conditions of Use</span></p>
            <p className={RegisterStyle.termsPara}>To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp <span className={RegisterStyle.terms}>Privacy Policy</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
