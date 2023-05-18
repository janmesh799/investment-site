import React from 'react'

const style = {
  parent: {
    display: "flex",
    flexDirection: "row"
  }
}
const Dashboard = () => {
  return (
    <div style={style.parent} >
      <p style={{ width: "50%", backgroundColor: "#005642", boxShadow: "2px 2px 2px #00564280", color: "white", textAlign: "center", padding: "0.5rem 0rem" }}  > Live Deals </p>
      <p style={{ width: "50%", backgroundColor: "White", boxShadow: "2px 2px 2px rgba(0,0,0,0.5)", color: "#191919", textAlign: "center", padding: "0.5rem 0rem" }}  > Most Funded</p>
    </div >
  )
}

export default Dashboard