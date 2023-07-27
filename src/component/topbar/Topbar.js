import React, { useState, useEffect } from "react";
import "../topbar/Topbar.css";

const Topbar = () => {
  const [dateState, setDateState] = useState(new Date());
  useEffect(() => {
    setInterval(() => setDateState(new Date()), 30000);
  }, []);
  return (
    <div className="topbar">
      <div className="topbar_left">
        <ul>
          <li>
            <a>Advertise on our site </a>
          </li>
          <li>
            <a>| </a>
          </li>
          <li>
            <a>Nepali Site</a>
          </li>
          <li>
            <a>| </a>
          </li>
          <li>
            <p>
              {" "}
              {dateState.toLocaleDateString("en-GB", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </p>
          </li>
          <li>
            <a>| </a>
          </li>
          <li>
            <p>
              {dateState.toLocaleString("en-US", {
                hour: "numeric",
                minute: "numeric",
                hour12: true,
              })}
            </p>
          </li>
        </ul>
      </div>
      <div className="topbar_right">
        <ul>
        <li>
            <a>Follow us on Social Media</a>
          </li>
          <li>
            <a>
              <img width={43} src="./images/instagram.png"></img>
            </a>
          </li>
          <li>
            <a>
              <img width={43} src="./images/instagram.png"></img>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Topbar;
