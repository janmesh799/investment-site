import React from 'react'
import BackArrow from "../../static/images/BackArrow.png"
import Logo from "../../static/images/Logo.png"
import Bell from "../../static/images/Bell.png"
import { Container } from '@mui/material'

const ProfileHeader = () => {
    return (<>
        <Container sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignContent: "center" }}>
            <div style={{ display: "flex", flexDirection: "row" }}>
                <img style={{ width: "3rem", height: "3rem", margin: "auto 2rem auto 0rem" }} src={BackArrow} alt="back arrow" />
                <img style={{ width: "10rem" }} src={Logo} alt="logo" />
            </div>
            <div style={{ display: "flex" }}>
                <img style={{ margin: "auto", width: "2rem" }} src={Bell} alt="logo" />
            </div>
        </Container>
        <hr style={{ color: "rgba(25,25,25,0.4)", width: "80%" }} />
    </>
    )
}

export default ProfileHeader