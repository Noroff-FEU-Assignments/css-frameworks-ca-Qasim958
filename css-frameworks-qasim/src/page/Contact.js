import React from "react";
import email from "./../media/social/email.png";
import phone from "./../media/social/phone.png";
import address from "./../media/social/address.png";

export const Contact = () => {
  return (
    <main className="contact">
      <section className="contact__heading">
        <h1>Submit your details </h1>
      </section>
      <section className="contact__body">
        <div className="contact__body__form">
          <form>
            <div className="form-group">
              <label for="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                aria-describedby="NameHelp"
              />
            </div>
            <div className="form-group">
              <label for="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
              />
            </div>

            <div>
              <div>
                <label for="website">Website</label>
              </div>
              <div className="input-group">
                <span className="input-group-addon" id="wesite-addon2">
                  http://
                </span>
                <input
                  type="text"
                  className="form-control"
                  aria-describedby="wesite-addon2"
                />
              </div>
            </div>

            <div className="form-group">
              <label for="message">Message</label>
              <textarea
                type="text"
                className="form-control"
                id="message"
                aria-describedby="messageHelp"
              ></textarea>
            </div>
            <div className="form-check">
              {/* <input
                type="checkbox"
                className="form-check-input myCheckbox"
                id="exampleCheck1 "
              />
              <p className="form-check-label" for="exampleCheck1">
                Check me out
              </p> */}
              <label class="main">
                Allow us to sell your personal details to whomever we want
                <input type="checkbox" />
                <span class="remember"></span>
              </label>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
        <div className="contact__body__info">
          <div className="contact__body__info__contact">
            <img src={email} alt="email" />
            <p>hello@yay.com</p>
          </div>
          <div className="contact__body__info__contact">
            <img src={phone} alt="phonenumber" />
            <p>123 456 7890</p>
          </div>
          <div className="contact__body__info__contact">
            <img src={address} alt="address" />
            <p>123 Some Street Somewhere Some City 10000</p>
          </div>
        </div>
      </section>
    </main>
  );
};
