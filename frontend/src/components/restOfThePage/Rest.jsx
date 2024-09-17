import React from "react";
import '../home/home.css'

function Rest({ currencies, toggleLoader }) {
    return (
        <>
            <div className="best-price">Best Price To Trade</div>
            <div className="price-list">
                <div className="small-headings">
                    <span>0.1 %</span>
                    <span className="small-heading-subtext">5 min</span>
                </div>
                <div className="small-headings">
                    <span>0.96 %</span>
                    <span className="small-heading-subtext">1 hour</span>
                </div>
                <div className="big-heading">
                    ₹ {toggleLoader ? "0" : currencies[0][1].open}
                </div>
                <div className="small-headings">
                    <span>2.73 %</span>
                    <span className="small-heading-subtext">1 day</span>
                </div>
                <div className="small-headings">
                    <span>7.51 %</span>
                    <span className="small-heading-subtext">7 days</span>
                </div>
            </div>
            <div className="average">
                Average BTC/INR net price including commission
            </div>
            <div className="table-outer-div">
                <table className="table">
                    <thead>
                        <tr className="table--first-row">
                            <th className="table--first-row-clms">#</th>
                            <th className="table--first-row-clms">Name</th>
                            <th className="table--first-row-clms">Last Trade Price</th>
                            <th className="table--first-row-clms">Buy / Sell Price</th>
                            <th className="table--first-row-clms">Volume</th>
                            <th className="table--first-row-clms">Base Unit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currencies.map((currency, index) => {
                            return (
                                <tr key={index} className="table--rows">
                                    <td className="table--clms table--clms-left">{index + 1}</td>
                                    <td className="table--clms">{currency[1].name}</td>
                                    <td className="table--clms">₹ {currency[1].last}</td>
                                    <td className="table--clms">
                                        ₹ {currency[1].buy} / ₹ {currency[1].sell}
                                    </td>
                                    <td className="table--clms">{currency[1].volume}</td>
                                    <td className="table--clms table--clms-right">
                                        {currency[1].base_unit}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Rest;
