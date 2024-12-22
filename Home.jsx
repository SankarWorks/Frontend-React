import React from "react";
import { useNavigate } from "react-router-dom";
import './Home.css';

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <div className="homepage" style={{ display: 'flex', flexDirection: 'column' }}>
        <div className="box">
          <h1>Rockerz</h1>
          <h3>Where words fail, <span style={{ color: "white" }}>MUSIC</span> speaks.</h3>
          <div>
            <button onClick={() => navigate("/signin")}>Shop Now</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
