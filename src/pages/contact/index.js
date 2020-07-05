import React from "react";
import { navigate } from "gatsby-link";
import Layout from "../../components/Layout";

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch((error) => alert(error));
  };

  render() {
    return (
      <Layout>
        <section className='p-strip'>
          <div className='row'>
            <div className='col-6 col-start-large-4'>
              {/* <h1 className='p-heading--3'>Contact</h1> */}
              <div className='p-card--form'>
                <form
                  name='contact'
                  method='post'
                  action='/contact/thanks/'
                  data-netlify='true'
                  data-netlify-honeypot='bot-field'
                  onSubmit={this.handleSubmit}>
                  <p class='required-legend u-align-text--right'>Required</p>
                  {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                  <label className='u-hide' htmlFor={"form-name"}>
                    Not real
                  </label>
                  <input type='hidden' name='form-name' value='contact' />
                  <div hidden>
                    <label>
                      Don’t fill this out:{" "}
                      <input name='bot-field' onChange={this.handleChange} />
                    </label>
                  </div>
                  <label className='is-required' htmlFor={"name"}>
                    Name
                  </label>
                  <input
                    className='input'
                    type={"text"}
                    name={"name"}
                    onChange={this.handleChange}
                    id={"name"}
                    required={true}
                    placeholder={"John Smith"}
                  />
                  <label className='is-required' htmlFor={"email"}>
                    Email
                  </label>
                  <input
                    className='input'
                    type={"email"}
                    name={"email"}
                    onChange={this.handleChange}
                    id={"email"}
                    required={true}
                    placeholder={"example@email.com"}
                  />
                  <label htmlFor={"mobile"}>Mobile</label>
                  <input
                    className='input'
                    type={"tel"}
                    name={"mobile"}
                    onChange={this.handleChange}
                    id={"mobile"}
                    required={false}
                    placeholder={"+44 1232 324 342"}
                  />
                  <label className='is-required' htmlFor={"message"}>
                    Message
                  </label>
                  <textarea
                    className='textarea'
                    name={"message"}
                    onChange={this.handleChange}
                    id={"message"}
                    required={true}
                    placeholder={"Your message..."}
                    style={{ resize: "vertical" }}
                  />
                  <button className='p-button--neutral' type='submit'>
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
