import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Items from "./DataSet"
import HomeStyle from "./HomePage.module.scss"
import RegisterStyle from "../RegisterPage/Register.module.scss"
import Button from '../Common/Button';
import WarningImg from "../../Assets/warning.png"

const Home = () => {
    const navigate = useNavigate()
    const [selected , setSelected] = useState([]);
    const [warning , setWarning] = useState(false);

    console.log(selected)
  useEffect(() => {
    if (!localStorage.getItem('registrationData')) {
        navigate("/register")
    }
  }, []);

  const HandleClick = (item) => {
    setWarning(false)
    if(selected.includes(item)){
      const filter = selected.filter((element) => element !== item);
      setSelected([...filter]);
    }
    else{
      setSelected([...selected , item]);
    }
    // console.log(selected)
  }

  const removeItem = (item) => {
      setWarning(false)
      const filter = selected.filter((element) => element !== item);
      setSelected([...filter]);
  }

  const handleSubmit = () => {
    console.log("ubais")
    if(selected.length < 3){
      setWarning(true);
    }
    else{
      localStorage.setItem("selected", selected);
      navigate("/page")
    }
  }


  return (
    <div className={HomeStyle.container}>
      <div className={HomeStyle.main}>
          <div className={HomeStyle.textcontainer}>
            <p className={HomeStyle.title}>Super App</p>
            <p className={HomeStyle.txt}>
              Choose your entertainment category
            </p>
            <div className={HomeStyle.selectedContainer}>
              {
                selected.map((item,index)=>(
                  <div key={index} className={HomeStyle.bgofitem}>
                    <p className={HomeStyle.showitem}>{item}</p>
                    <p className={HomeStyle.x} onClick={() => removeItem(item)}>X</p>                 
                  </div>
                  
                ))
              }
            </div>
            <div className={HomeStyle.warningContainer}>
            {
              warning && (
                <span className={HomeStyle.warningmsg} >
              <img src={WarningImg} alt="WarningImage" className={HomeStyle.warningimage}/>
              Minimum 3 category required</span>
              )
            }
            </div>
            
          </div>
          <div className={HomeStyle.category}>
              {
                Items.map((item) => (
                  <div 
                    key={item.id} 
                    style={{backgroundColor:item.bgColor}}                  
                    className={selected.includes(item.name) ? `${HomeStyle.border}` : `${HomeStyle.imgbox}`}                   
                    onClick={() => HandleClick(item.name)}
                  >
                    <p className={HomeStyle.imgpara}>
                      {item.name}
                    </p>
                    <img src={item.image} alt={item.image} className={HomeStyle.img}/>
                  </div>
                ))
              }
          </div>
      </div>
      <div className={HomeStyle.btn} >
        <Button Text={"Next Page"} parentfunction={handleSubmit}/>
      </div>
    </div>
  );
}

export default Home;
