import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../loader/Loader";
import Countdown from "../countdown/Countdown";
import Rest from "../restOfThePage/Rest";
import "./home.css";

const Home = (props) => {
    const [currencies, setCurrencies] = useState([]);
    const [toggleLoader, setToggleLoader] = useState(true);



    useEffect(() => {
        setToggleLoader(true)
        axios
            .get("http://localhost:5000/getCurrencies")
            .then((res) => {
                const topTenEntries = Object.entries(res.data).slice(0, 10);
                setCurrencies(topTenEntries);
                const newObj = Object.fromEntries(topTenEntries);

                axios({
                    method: "POST",
                    url: "http://localhost:5000/updateDb",
                    data: newObj,
                    headers: {
                        "Content-Type": "application/json",
                    },
                })
                    .then((response) => {
                        console.log(response.data);
                        setToggleLoader(false)
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <>
            <div className="outer-div">
                <div className="navbar--outer">
                    <div className="navbar--heading">
                        <div className="navbar--heading-text">HODLINFO</div>
                    </div>
                    <div className="navbar--center">
                        <div className="navbar--btn-outer-select">
                            <select className="btn">
                                <option value="USD">INR</option>
                            </select>
                        </div>

                        <div className="navbar--btn-outer">
                            <select className="btn">
                                <option value="USD">WazirX</option>
                            </select>
                        </div>
                        <div className="navbar--btn-outer-buy">
                            <button className="btn">BUY</button>
                        </div>
                    </div>
                    <div className="navbar--right">
                        <div className="navbar--counter"><Countdown/></div>
                        <div className="navbar--tele-btn">Connect Telegram</div>
                        <div className="navbar--theme-toggle">
                            <label className="switch">
                                <input type="checkbox" /> <div></div>
                            </label>
                        </div>
                    </div>
                </div>
                {
                    toggleLoader? (
                        <Loader/>
                    ) : (
                        <Rest currencies={currencies} toggleLoader={toggleLoader}/>
                    )
                }
            </div>
        </>
    );
};

export default Home;
