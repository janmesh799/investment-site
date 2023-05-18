import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import ProfileHeader from '../Components/profile/ProfileHeader';
import { Container, Typography } from '@mui/material';
import ProfilePic from "../static/images/ProfilePic.png"
import BG3 from "../static/images/BG3.png"
import BG4 from "../static/images/BG4.png"
import { logout } from '../store/auth/authSlice';
import Dashboard from "../Components/profile/Dashboard"
import UserProfile from "../Components/profile/UserProfile"
import EditProfile from "../Components/profile/EditProfile"
import MyNetwork from "../Components/profile/MyNetwork"
import NeedHelp from "../Components/profile/NeedHelp"

const Profile = () => {
    const navigate = useNavigate();
    const { user, isLoggedIn } = useSelector(state => state.auth);
    const disptach = useDispatch();
    const [name, setName] = useState("");
    const tabs = [
        { tab: "dashboard", label: "Dashboard" },
        { tab: "profile", label: "Profile" },
        { tab: "editProfile", label: "Edit Profile" },
        { tab: "myNetwork", label: "My Network" },
        { tab: "needHelp", label: "Need Help" },
    ]
    const [activeTab, setActiveTab] = useState("dashboard");
    useEffect(() => {
        if (isLoggedIn === false || user === null) {
            navigate('/signup');
        } else {

            setName(user.name)
        }
    }, [name, user, isLoggedIn, navigate])
    return (
        <div>
            <div style={{position:"absolute",zIndex:"-1",top:"-2rem", left:"-3rem"}}>
                <img  src={BG3} alt="backround 3" />
            </div>
            <div style={{position:"absolute",zIndex:"-1",top:"-2rem", right:"-3rem"}}>
                <img  src={BG4} alt="backround 4" />
            </div>
            <header>
                <ProfileHeader />
            </header>
            <Container sx={{ display: "flex", flexDirection: "row", margin: "-0.5rem auto", }} >
                <div style={{ width: "15%", height: "90vh", margin: "0rem auto", borderRight: "2px solid rgba(25,25,25,0.4)", padding: "0rem" }}>
                    <img style={{ margin: "1rem auto" }} src={ProfilePic} alt="profile " />
                    <Typography sx={{ fontFamily: 'poppins', textAlign: "left" }} >{name}</Typography>
                    <ul style={{ padding: "0rem" }}>
                        {tabs.map((tab) => {
                            return (
                                <li onClick={() => { setActiveTab(tab.tab) }} style={{ listStyle: "none", textAlign: "left", padding: "0.25rem 0.1rem 0.25rem 1rem", margin: "0.5rem 0rem", backgroundColor: `${activeTab === tab.tab ? "#005642" : "white"}`, color: `${activeTab === tab.tab ? "white" : "#191919"}` }}>{tab.label}</li>
                            )
                        })}
                        <li onClick={() => { disptach(logout()) }} style={{ listStyle: "none", textAlign: "left", padding: "0.25rem 0.1rem 0.25rem 1rem", margin: "0.5rem 0rem", backgroundColor: "white", color: "#191919", cursor: "pointer   " }}>Logout</li>

                    </ul>
                </div>
                <Container sx={{ width: "85%" }}>
                    {activeTab === "dashboard" && <Dashboard />}
                    {activeTab === "profile" && <UserProfile />}
                    {activeTab === "editProfile" && <EditProfile />}
                    {activeTab === "myNetwork" && <MyNetwork />}
                    {activeTab === "needHelp" && <NeedHelp />}
                </Container>
            </Container>
        </div>
    )
}

export default Profile