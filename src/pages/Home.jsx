import { useEffect } from "react";
import { useNavigate } from "react-router-dom"

const Home = () => {
    const navigate = useNavigate();
    useEffect(() => {
        navigate('/signup');
    })
    return (
        <div></div>
    )
}

export default Home