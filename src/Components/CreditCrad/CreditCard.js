import React, { Component } from "react";
import "./CreditCard.css";
import MasterCard from "./MasterCard.png";
import puce from "./puce.png";
import visa from "./visa.png";

class CreditCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: ".... .... .... ....",
      name: "Owner Name",
      validity: "Validity"
    };
  }

  CodeHandler = e => {
    console.log(e.target.value);
    let newCode = String(e.target.value + "................").slice(0, 16);
    let a = newCode.replace(/(.{4})/g, "$1 ");
    console.log(a);
    this.setState({
      code: a
    });
  };

  NameHandler = e => {
    let name = e.target.value;
    let newName = name.toUpperCase();
    this.setState({
      name: newName
    });
  };

  ValidityHandler = e => {
    let validity = String(e.target.value);
    let a = validity.replace(/(.{2})/, "$1 / ").slice(0, 7);
    console.log(a[0]);

    if (parseInt(a[0] + a[1]) > 12) {
      a = a.replace(a[0], "1") + a.replace(a[1], "2");
    }
    console.log(a);
    this.setState({
      validity: a
    });
  };

  render() {
    return (
      <div className="section">
        <div className="CreditCard">
          <div className="container">
            <h2>Credit card</h2>
            <img src={puce} className="puce" alt="puce" height="50px" />
            <div className="allInfos">
              <div className="block">
                <h3>{this.state.code}</h3>
                <div className="infos">
                  <h4 className="date">{this.state.validity}</h4>
                </div>
                <h4>{this.state.name}</h4>
              </div>
              <div className="PaymentCompanies block">
                <img
                  src={MasterCard}
                  className="MasterCard"
                  alt="MasterCard"
                  height="50px"
                />
                <img src={visa} className="visa" alt="visa" height="50px" />
              </div>
            </div>
          </div>
        </div>
        <div className="inputs">
          <div className="inputBox">
            <p className="inputName">Code:</p>
            <input
              className="input"
              type="text"
              placeholder="Code"
              onChange={this.CodeHandler}
            />
          </div>
          <div className="inputBox">
            <p className="inputName">Validity:</p>
            <input
              className="input"
              type="text"
              placeholder="Validity"
              min="1"
              max="4"
              onChange={this.ValidityHandler}
            />
          </div>
          <div className="inputBox">
            <p className="inputName">Owner name:</p>
            <input
              className="input"
              type="text"
              placeholder="Card Owner Name"
              onChange={this.NameHandler}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default CreditCard;
