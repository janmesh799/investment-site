import { useEffect, useState } from 'react'
import users from "../static/images/users.png"
import Mail from "../static/images/Mail.png"
import phone from "../static/images/phone.png"
import LinkedIn from "../static/images/LinkedIn.png"
import Country from "../static/images/Country.png"
import State from "../static/images/State.png"
import City from "../static/images/City.png"
import PinCode from "../static/images/PinCode.png"
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { signup } from '../store/auth/authSlice'
import { useNavigate } from 'react-router-dom'

const style = {
  formStyle: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignContent: "center",
    width: "30vw"
  },
  atributeContainer: {
    backgroundColor: "#EBFFF7",
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    padding: "0.25rem 0rem 0.25rem 1rem",
    borderRadius: "0.5rem",
    margin: "0.5rem 0rem"
  },
  icon: {
    width: "2.5rem",
    height: "2.5rem",
    justifySelf: "flex-start",
    margin: "auto 2rem auto 0rem"
  },
  inputParent: {
    display: "flex",
    flexDirection: "column"
  },
  label: {
    margin: "auto 0rem 0.25rem 0rem",
    fontFamily: 'Poppins',
    color: "#005642",
    fontSize: "0.75rem"
  },
  input: {
    height: "2rem",
    fontSize: "1.25rem",
    fontFamily: 'Poppins',
    backgroundColor: "#EBFFF7",
    border: "none",
    color: "#191919"
  },
  nextButton: {
    width: "8rem",
    height: "2.5rem",
    backgroundColor: "#005642",
    border: "none",
    borderRadius: "0.5rem",
    color: "white",
  }
}
function checkObjectAttributes(obj) {
  for (let key in obj) {
    if (!obj.hasOwnProperty(key)) {
      continue; // Skip inherited properties
    }

    const value = obj[key];
    if (value === null || value === undefined || value === '') {
      return false; // Attribute is null, undefined, or empty string
    }
  }

  return true; // All attributes are valid
}


const SignupForm = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    Linkedin: "",
    country: "",
    state: "",
    city: "",
    pincode: ""
  })
  const [isChecked, setIsChecked] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { isLoggedIn } = useSelector(state => state.auth)
  useEffect(() => {
    if (isLoggedIn) {
      navigate('/profile')
    }
  })

  const onChangeHandler = (e) => {
    // alert(e.target.id, e.target.value)
    setData({ ...data, [e.target.id]: e.target.value });
  }

  const submitHandler = (e) => {
    e.preventDefault();
    if (isChecked === false) {
      toast.error("Please accept terms and conditons")
      return;
    }
    const isEmpty = !checkObjectAttributes(data);
    if (isEmpty) {
      toast.error('please enter valid inputs in all fields')
      return;
    }
    dispatch(signup(data));
  }

  return (
    <div style={{ marginTop: "2rem" }}>
      <form onSubmit={submitHandler} style={style.formStyle} >
        <div style={style.atributeContainer}>
          <img style={style.icon} src={users} alt='name' />
          <div style={style.inputParent}>
            <p style={style.label} > Name</p>
            <input onChange={onChangeHandler} value={data.name} style={style.input} type='text' label='name' id='name' placeholder='Name' />
          </div>
        </div>
        <div style={style.atributeContainer}>
          <img style={style.icon} src={Mail} alt='name' />
          <div style={style.inputParent}>
            <p style={style.label} > Email</p>
            <input onChange={onChangeHandler} value={data.email} style={style.input} type='email' label='email' id='email' placeholder='Email' />
          </div>
        </div>
        <div style={style.atributeContainer}>
          <img style={style.icon} src={phone} alt='name' />
          <div style={style.inputParent}>
            <p style={style.label} > Phone No.</p>
            <input onChange={onChangeHandler} value={data.phone} style={style.input} type='text' label='phone' id='phone' placeholder='Phone No.' />
          </div>
        </div>
        <div style={style.atributeContainer}>
          <img style={style.icon} src={LinkedIn} alt='name' />
          <div style={style.inputParent}>
            <p style={style.label} > LinkedIn Link</p>
            <input onChange={onChangeHandler} value={data.Linkedin} style={style.input} type='text' label='Linkedin' id='Linkedin' placeholder='LinkedIn Link' />
          </div>
        </div>
        <div style={style.atributeContainer}>
          <img style={style.icon} src={Country} alt='name' />
          <div style={style.inputParent}>
            <p style={style.label} > Country</p>
            <input onChange={onChangeHandler} value={data.country} style={style.input} type='text' label='country' id='country' placeholder='Country' />
          </div>
        </div>
        <div style={style.atributeContainer}>
          <img style={style.icon} src={State} alt='name' />
          <div style={style.inputParent}>
            <p style={style.label} > Country</p>
            <input onChange={onChangeHandler} value={data.state} style={style.input} type='text' label='state' id='state' placeholder='State' />
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
          <div style={{ backgroundColor: "#EBFFF7", display: "flex", width: "45%", margin: "0.5rem 0rem", borderRadius: "0.5rem", flexDirection: "row", alignContent: "center", padding: "0.25rem 0rem 0.25rem 1rem" }}>
            <img style={style.icon} src={City} alt='name' />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p style={style.label} > City</p>
              <input onChange={onChangeHandler} style={{ height: "2rem", width: "90%", fontSize: "1.25rem", fontFamily: 'Poppins', backgroundColor: "#EBFFF7", border: "none", color: "#191919" }} value={data.city} type='text' id='city' label='city' placeholder='city' />
            </div>
          </div>
          <div style={{ backgroundColor: "#EBFFF7", display: "flex", width: "45%", margin: "0.5rem 0rem", borderRadius: "0.5rem", flexDirection: "row", alignContent: "center", padding: "0.25rem 0rem 0.25rem 1rem" }}>
            <img style={style.icon} src={PinCode} alt='name' />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p style={style.label} > Pin Code</p>
              <input onChange={onChangeHandler} style={{ height: "2rem", width: "90%", fontSize: "1.25rem", fontFamily: 'Poppins', backgroundColor: "#EBFFF7", border: "none", color: "#191919" }} value={data.pincode} type='text' id='pincode' label='pincode' placeholder='pincode' />
            </div>
          </div>
        </div>
        <div style={style.atributeContainer}>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <input onChange={() => { setIsChecked(!isChecked) }} checked={data.isChecked} style={{ width: "3rem", color: "#191919", marginRight: "1rem" }} type='checkbox' label='checkbox' id='checkbox' />
            <p style={{ fontFamily: 'Poppins', color: "#005642", fontSize: "1rem" }} > I hereby by agree to terms and conditions and whatever information is asked for i have provided the right information</p>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "1rem" }}>
          <button type='submit' onClick={submitHandler} style={style.nextButton}>SUBMIT</button>
        </div>
      </form>
    </div>
  )
}

export default SignupForm