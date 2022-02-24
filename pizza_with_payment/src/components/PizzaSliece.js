import React from "react";
import "./PizzaSliece.css";

class PizzaSliece extends React.PureComponent {
  render() {
    let pizzaEaters = this.props.data.quantity;
    var type = this.props.data.type;
    let piecePlace = (
      <div>
        {createNewPieces(pizzaEaters, false)}
        {createNewPieces(15, true)}
        {createNewPieces(pizzaEaters, false, true)}
      </div>
    );

    function createNewPieces(pieces, ingridients, slices) {
      let angle = 100 / pieces;
      let backg = "";
      let pieceNmb = [];
      for (let i = 0; i < pieces; i++) {
        if (slices) {
          pieceNmb[i] = (
            <div
              key={i + "p"}
              className="pizzaSliece"
              style={{
                transform: "rotate(" + (360 / pieces) * i + "deg)",
                top: "-15px",
                left: "-15px",
                width: "390px",
                height: "390px",
                borderRadius: "50%",
                zIndex: "1000",
                "--value": 0.3 + "%"
              }}
            ></div>
          );
        } else {
          if (ingridients) backg = "transparent";
          pieceNmb[i] = (
            <div
              key={i + "p"}
              className="pizzaPiece"
              style={{
                transform: "rotate(" + (360 / pieces) * i + "deg)",
                top: "0px",
                width: "360px",
                height: "360px",
                borderRadius: "50%",
                zIndex: "1",
                "--value": angle + 1 + "%",
                background: backg
              }}
            >
              {createNewIngridients(ingridients)}
            </div>
          );
        }
      }
      return pieceNmb;
    }

    function createNewIngridients(ingridients) {
      let tomato = (
        <div
          className="pizzaIngridients"
          style={{
            top: "150px",
            width: "39px",
            height: "39px",
            left: 90 * Math.random() + "px",
            borderRadius: "50%",
            zIndex: "100",
            border: "3px solid #b52828",
            boxShadow: "2px 2px 5px rgba(0,0,0,0.2)",
            background: "#b32626"
          }}
        >
          <div
            style={{
              width: "15px",
              height: "38px",
              background: "#eec58c",
              boxShadow: "inset 2px 2px 8px rgba(191,50,40,0.9)",
              borderRadius: "50%",
              margin: "1px 2px 1px 2px",
              cssFloat: "left"
            }}
          >
            {" "}
          </div>
          <div
            style={{
              width: "15px",
              height: "38px",
              background: "#eec58c",
              boxShadow: "inset 2px 2px 8px rgba(191,50,40,0.9)",
              borderRadius: "50%",
              margin: "1px",
              cssFloat: "left"
            }}
          >
            {" "}
          </div>
        </div>
      );
      let cheese = (
        <div
          className="pizzaIngridients"
          style={{
            top: 200 + 10 * Math.random() + "px",
            width: "56px",
            height: "56px",
            left: 160 * Math.random() + "px",
            zIndex: "2",
            transform: "rotate(" + 90 * Math.random() + "deg)",
            opacity: "96%",
            boxShadow: "2px 2px 5px rgba(0,0,0,0.2)",
            background: "#ebcd28"
          }}
        ></div>
      );
      let pepper = (
        <div
          className="pizzaIngridients"
          style={{
            top: "180px",
            width: "25px",
            height: "25px",
            left: 150 * Math.random() + "px",
            zIndex: "100",
            transform: "rotate(" + 180 * Math.random() + "deg)",
            opacity: "96%",
            boxShadow: "2px 0px 0px 0px rgba(0,0,0,0.2)",
            borderRadius: "50%",
            background: "conic-gradient(#b0bd51 50%, transparent 0)"
          }}
        ></div>
      );
      let onion = (
        <div
          className="pizzaIngridients"
          style={{
            top: 160 + 5 * Math.random() + "px",
            width: "40px",
            height: "40px",
            left: 90 * Math.random() + "px",
            zIndex: "100",
            transform: "rotate(" + 90 * Math.random() + "deg)",
            opacity: "96%",
            boxShadow: "3px 0px 0px 0px rgba(0,0,0,0.2)",
            borderRadius: "50%",
            background: "conic-gradient(#f7dce5 50%, transparent 0)",
            borderRight: "2px solid #a45c8a"
          }}
        ></div>
      );
      let souse = (
        <div
          className="pizzaIngridients"
          style={{
            top: 160 + 5 * Math.random() + "px",
            width: "40px",
            height: "40px",
            left: 90 * Math.random() + "px",
            zIndex: "100",
            transform: "rotate(" + 90 * Math.random() + "deg)",
            boxShadow: "1px 0px 0px 0px rgba(0,0,0,0.2)",
            borderRadius: "50%",

            borderRight: "4px solid #6b0304"
          }}
        ></div>
      );
      let greenOnion = (
        <div
          className="pizzaIngridients"
          style={{
            top: 190 + 5 * Math.random() + "px",
            width: "30px",
            height: "50px",
            right: 100 * Math.random() + "px",
            zIndex: "100",
            transform: "rotate(" + 90 * Math.random() + "deg)",
            border: "2px solid #367405",
            boxShadow: "2px 2px 5px rgba(0,0,0,0.2)",
            borderRadius: "50%"
          }}
        ></div>
      );
      let sausageDots = [];

      for (let i = 0; i < 5; i++) {
        sausageDots[i] = (
          <div
            style={{
              width: "4px",
              height: "4px",
              left: 2 + 25 * Math.random() + "px",
              top: 10 + 6 * Math.random() + "px",
              zIndex: "900",
              transform: "rotate(" + 90 * Math.random() + "deg)",
              position: "relative",
              boxShadow: "2px 2px 5px rgba(0,0,0,0.2)",
              borderRadius: "50%",
              background: "white"
            }}
          ></div>
        );
      }
      let sausage = (
        <div
          className="pizzaIngridients"
          style={{
            top: 190 + 5 * Math.random() + "px",
            width: "35px",
            height: "35px",
            left: 40 * Math.random() + "px",
            zIndex: "900",
            transform: "rotate(" + 90 * Math.random() + "deg)",
            border: "1px solid #962f1f",
            boxShadow: "2px 2px 5px rgba(0,0,0,0.2)",
            borderRadius: "50%",
            background: "#d0442d"
          }}
        >
          {sausageDots}
        </div>
      );

      let mashroomHate = (
        <div
          style={{
            position: "absolute",
            width: "28px",
            height: "28px",
            borderRadius: "50%",
            background: "conic-gradient(#572f0e 50%, transparent 0)",
            boxShadow: "2px 0px 0px 0px rgba(0,0,0,0.2)"
          }}
        ></div>
      );
      let mashroomLeg = (
        <div
          style={{
            position: "absolute",
            width: "28px",
            height: "12px",
            borderRadius: "50%",
            background: "conic-gradient(#e0d4c3  50%, transparent 0)",
            boxShadow: "2px 0px 0px 0px rgba(0,0,0,0.2)",
            transform: "rotate(" + 180 + "deg)",
            top: "8px"
          }}
        ></div>
      );

      let mashroom = (
        <div
          className="pizzaIngridients"
          style={{
            left: 120 * Math.random() + "px",
            transform: "rotate(" + 90 * Math.random() + "deg)",
            zIndex: "120",
            top: 180 + "px"
          }}
        >
          {mashroomLeg}
          {mashroomHate}
        </div>
      );
      if (type == "vegan") {
        sausage = mashroom;
      }
      let onePiece = (
        <div>
          {tomato}
          {cheese}
          {pepper}
          {onion}
          {souse}
          {greenOnion}
          {sausage}
        </div>
      );
      if (!ingridients) return "";
      else return onePiece;
    }

    return (
      <div className="main">
        <div className="pizzaBorder">
          <div className="pizzaPiece">{piecePlace}</div>
        </div>
      </div>
    );
  }
}
export default PizzaSliece;
