import React from "react";
import "./Feedback.css";
import { NavLink } from "react-router-dom";
class Feedback extends React.Component {
  state = {
    saveMode: 0,
    classCard: "ItemCard",
    valuePhone: "+37529XXXXXXX",
    phoneError: "",
    resetMode: false,
    textValue: "Please,leave your comment here."
  };
  clickedDelete = () => {
    localStorage.removeItem(this.props.pr);
  };
  clickedReset = () => {
    this.setState({
      saveMode: 0,
      resetMode: true,
      phoneError: ""
    });
    document.getElementById("phone1").value = "";
    document.getElementById("text1").value = "";
  };
  clicked = () => {
    this.setState({ classCard: "ItemCardHide" });
  };
  getCheckedRadioValue = (name) => {
    var elements = document.getElementsByName(name);
    for (var i = 0, len = elements.length; i < len; ++i)
      if (elements[i].checked) return elements[i].value;
  };
  savePosition = () => {
    this.clicked();
    let newFeedback = {
      name: this.props.pr,
      phone: this.setPhoneRef(),
      rating: this.getCheckedRadioValue("rating"),
      text: document.getElementById("text1").value
    };

    let storage = JSON.parse(window.localStorage.getItem(this.props.pr));
    if (!storage) {
      window.localStorage.setItem(this.props.pr, JSON.stringify(newFeedback));
    }
  };
  handleUserInputPhone = (ref) => {
    this.newPhoneRef = ref;
  };

  setPhoneRef = () => {
    if (this.newPhoneRef) {
      let newPhone = this.newPhoneRef.value;
      return newPhone;
    }
  };

  validateFieldPhone = () => {
    let value = this.setPhoneRef();

    if (
      value.match(
        /^(\+)?((\d{2,3}) ?\d|\d)(([ -]?\d)|( ?(\d{2,3}) ?)){5,12}\d$/
      ) &&
      value != ""
    ) {
      this.setState({ saveMode: 1, phoneError: "" });
    } else {
      this.setState({ phoneError: "incorrect phone number!", saveMode: 0 });
    }
  };
  render() {
    let storage = JSON.parse(window.localStorage.getItem(this.props.pr));

    if (storage) {
      let rating = [];
      for (let i = 0; i < 5; i++) {
        if (i <= storage.rating - 1) {
          rating[i] = <span key={i} className="active"></span>;
        } else rating[i] = <span key={i}></span>;
      }
      return (
        <div className={this.state.classCard}>
          <NavLink to={"/"}>
            {" "}
            <div
              className="close"
              width={30}
              height={30}
              onClick={this.clicked}
            >
              {" "}
            </div>
          </NavLink>
          <legend>{"NAME"}</legend>
          <div className="itemData2">
            <p className="Feedback">{this.props.pr}</p>
          </div>
          <div className="rating-result">{rating}</div>

          <div className="itemData2">
            <p>PHONE</p>
          </div>

          <div className="itemData2">
            <p className="Feedback">{storage.phone}</p>
          </div>
          <div>
            <span>{this.state.phoneError}</span>
          </div>
          <div className="form-name">
            <p>COMMENT</p>
          </div>

          <div className="form-name-area">
            <p className="Feedback">{storage.text}</p>
          </div>

          <div className="itemData2">
            <NavLink to={"/"}>
              <input
                className="CardButton"
                type="button"
                value="DELETE"
                onClick={this.clickedDelete}
              />
            </NavLink>
          </div>
        </div>
      );
    } else {
      return (
        <div className={this.state.classCard}>
          <NavLink to={"/"}>
            {" "}
            <div
              className="close"
              width={30}
              height={30}
              onClick={this.clicked}
            >
              {" "}
            </div>
          </NavLink>
          <legend className="FeedbackName">{"NAME"}</legend>

          <div className="itemData2">
            <p>{this.props.pr}</p>
          </div>
          <div className="rating-area">
            <input type="radio" id="star-5" name="rating" value="5" />
            <label htmlFor="star-5" title="Оценка «5»"></label>
            <input type="radio" id="star-4" name="rating" value="4" />
            <label htmlFor="star-4" title="Оценка «4»"></label>
            <input
              type="radio"
              id="star-3"
              name="rating"
              value="3"
              defaultChecked="true"
            />
            <label htmlFor="star-3" title="Оценка «3»"></label>
            <input type="radio" id="star-2" name="rating" value="2" />
            <label htmlFor="star-2" title="Оценка «2»"></label>
            <input type="radio" id="star-1" name="rating" value="1" />
            <label htmlFor="star-1" title="Оценка «1»"></label>
          </div>

          <div className="itemData2">
            <p>PHONE</p>
          </div>

          <div className="itemData2">
            <input
              id="phone1"
              className="form-group-input"
              type="phone"
              defaultValue={this.state.valuePhone}
              placeholder={this.state.valuePhone}
              ref={this.handleUserInputPhone}
              onBlur={this.validateFieldPhone}
            />
          </div>
          <div>
            <span>{this.state.phoneError}</span>
          </div>
          <div className="form-name">
            <p>COMMENT</p>
          </div>

          <div className="form-name-area">
            <textarea
              rows={6}
              cols={34}
              id="text1"
              maxLength="1000"
              className="form-group-input"
              type="text"
              placeholder={this.state.textValue}
              onChange={this.handleUserInputComment}
            />
          </div>

          <div className="itemData2">
            <NavLink to={"/"}>
              <input
                className="CardButton"
                type="button"
                value="SAVE"
                onClick={this.savePosition}
                disabled={this.state.saveMode == 0}
              />
            </NavLink>

            <input
              className="CardButton"
              type="button"
              value="RESET"
              onClick={this.clickedReset}
            />
          </div>
        </div>
      );
    }
  }
}
export default Feedback;
