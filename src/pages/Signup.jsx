import { Container, Typography } from "@mui/material"
import BackArrow from "../static/images/BackArrow.png";
import BG1 from "../static/images/BG1.png";
import BG2 from "../static/images/BG2.png";
import './Signup.css'
import SignupGraphic from "../Components/SignupGraphic"
import SignupForm from "../Components/SignupForm"


const Signup = () => {
  return (
    <Container sx={{ overflow: "hidden" }} >
      <div style={{ position: "absolute", zIndex: "-1", top: "-10rem", marginRight: "-1rem", left: "0rem" }}>
        <img src={BG1} alt="backgound 1" />
      </div>
      <div style={{ position: "absolute", zIndex: "-1", top: "-5rem", right: "4rem" }}>
        <img src={BG2} alt="backgound 1" />
      </div>
      <img style={{ width: "2rem", height: "auto", margin: "0rem 0rem 0rem 3rem" }} src={BackArrow} alt=' backarrow' />
      <Typography className="signup-heading" > <span style={{ color: "#191919" }}>Create </span> Investor Profile</Typography>
      <Container sx={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
        <SignupGraphic />
        <SignupForm />
      </Container>
    </Container>
  )
}

export default Signup