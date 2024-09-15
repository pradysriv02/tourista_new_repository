import React, { useState, useContext, useEffect } from "react";
import axios from "axios";

import LocationPicker from './LocationPicker'
import Test from './Test'
import background from "./bg.jpg";

const MerchantRegister = () => {

    const RegisterForm = {
      
      //backgroundImage: `url(${background})`,
      background:"#e8f0fa",
        maxWidth: "500px",
        padding: "15px",
        margin: "auto",
        marginTop: "50px",
      };
      const [name, setName] = useState("");
      const [email, setEmail] = useState("");
      const [phone, setPhone] = useState("");
      const [city, setCity] = useState("");
      const [state, setState] = useState("");
      const [pincode, setPincode] = useState("");
      const [address, setAddress] = useState("");
      const [business, setBusiness] = useState("");
      const [description, setDescription] = useState("");
      const [latitude, setLatitude] = useState("");
      const [longitude, setLongitude] = useState("");
      const [image, setImage] = useState(null);
      const [url, setUrl] = useState("");

      const [merchant, setMerchant] = useState({
        name: "",
        email: "",
        phone:"",
        city:"",
        state:"",
        pincode:"",
        address:"",
        business:"",
        description:"",
        latitude:"",
        longitude:"",
        url:""
      });

      const [lng, setLng] = useState("");
      const [lat, setLat] = useState("");
      
      const abcd  = (coordinates) => {
        console.log(coordinates)
        setLatitude(coordinates.lat);
        setLongitude(coordinates.lng);
      } 
    
      const onChange1 = (e) =>{
          setName(e.target.value);
      }
      const onChange2 = (e) =>{
        setEmail(e.target.value);
    }
    const onChange3 = (e) =>{
      setPhone(e.target.value);
  }
  const onChange4 = (e) =>{
    setCity(e.target.value);
}
const onChange5 = (e) =>{
  setState(e.target.value);
}
const onChange6 = (e) =>{
  setPincode(e.target.value);
}
 
const onChange7 = (e) =>{
  setAddress(e.target.value);
}

const onChange8 = (e) =>{
  setBusiness(e.target.value);
}

const onChange9 = (e) =>{
  setDescription(e.target.value);
}

const onChange10 = event => {
  //event.preventDefault();
  setImage(event.target.files[0]);
  //console.log('baseimg',image)
  uploadImage(event.target.files[0]);
  // let url = uploadImage(event.target.files[0]);
  // console.log(url);
  // setUrl(url)
  //setImagesUploaded(imagesUploaded++);
  //console.log('baseimg-end', imagesUploaded)
};

function uploadImage(image){
  const data = new FormData()
  data.append("file", image)
  data.append("upload_preset", "hackpose")
  data.append("cloud_name","ddtoohmjx")
  console.log(data)
  fetch("https://api.cloudinary.com/v1_1/ddtoohmjx/image/upload",{
    method:"post",
    body: data
  })
  .then(res => res.json())
  .then(json => {
    setUrl(json.url)
    console.log(json)
    console.log(json.url)
    return json.url
  })
  .catch(err => console.log(err));
   return null
}

      const onSubmit = async (e) => {
        e.preventDefault();
        const config = {
            headers: {
              "Content-Type": "application/json",
            },
          };
          try {
            const res = await axios.post(
              "http://localhost:5000/api/merchant/register",
              {name: name, email: email, phone: phone, city: city, state: state, pincode: pincode, address: address, business: business, description: description, latitude: latitude, longitude: longitude, url: url},
              config
            );
            console.log(res);
          } catch (err) {
            console.log(err);
          }
        }

    return (
      <>
        <div style={RegisterForm}>
          <h1 style={{ textAlign: "center" }}>
            Merchant <span className="text-primary">Register</span>
          </h1>
          <form >
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                class="form-control"
                type="text"
                name="name"
                value={name}
                onChange={onChange1}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                class="form-control"
                id="email"
                type="email"
                name="email"
                value={email}
                onChange={onChange2}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Contact Number</label>
              <input
                class="form-control"
                id="phone"
                type="text"
                name="phone"
                value={phone}
                onChange={onChange3}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="city">City</label>
              <input
                class="form-control"
                id="city"
                type="text"
                name="city"
                value={city}
                onChange={onChange4}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="state">State</label>
              <input
                class="form-control"
                id="state"
                type="text"
                name="state"
                value={state}
                onChange={onChange5}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="pincode">Pincode</label>
              <input
                class="form-control"
                id="pincode"
                type="text"
                name="pincode"
                value={pincode }
                onChange={onChange6}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input
                class="form-control"
                id="address"
                type="text"
                name="address"
                value={address}
                onChange={onChange7}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="business">Business Name</label>
              <input
                class="form-control"
                id="business"
                type="text"
                name="business"
                value={business}
                onChange={onChange8}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                rows={5}
                class="form-control"
                id="description"
                type="text"
                name="description"
                value={description}
                onChange={onChange9}
                required
              />
            </div>
            <br/>
            <div className="form-group">
             
              <input type='file' 
              onChange={onChange10} 
              style={{}} 
              id="url"
              name="url"
             
              required/>
            
              
            </div>
            
            
            <button type="submit" className="btn btn-primary mt-3" value="Register" onClick={onSubmit}>
              Register
            </button>
          </form>

          {/* Map Location Picker
          */}
          {/* <LocationPicker latitude = {latitude} longitude = {longitude}/> */}
          <br/>
          <div className="form-group">
              <label htmlFor="description"><h3>Locate your business here:</h3></label>
             
            </div>
        </div>
        <Test abcd={abcd}/>
        </>
      );
}

export default MerchantRegister

