import React from 'react';
import { navigate } from 'gatsby-link';

function encode(data) {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
}

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error));
  };

  render() {
    return (
      <form
        data-netlify-honeypot="bot-field"
        data-netlify="true"
        onSubmit={this.handleSubmit}
        action="/success/"
        className="max-w-md w-full"
        method="post"
        name="contact"
      >
        {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
        <input type="hidden" name="form-name" value="contact" />
        <div hidden>
          <label>
            Don’t fill this out:{' '}
            <input name="bot-field" onChange={this.handleChange} />
          </label>
        </div>

        {/* Name */}
        <div className="mb-6">
          <label className="flex flex-col" htmlFor="name">
            <span className="font-bold mb-2 text-xs uppercase tracking-wide">
              Name:
            </span>
            <input
              className="appearance-none bg-white border-2 hover:bg-gray-100 leading-tight px-3 py-2 rounded-none text-gray-700 w-full focus:outline-none focus:border-green-500"
              id="name"
              name="name"
              onChange={this.handleChange}
              required
              type="text"
            />
          </label>
        </div>

        {/* Email address */}
        <div className="mb-6">
          <label className="flex flex-col" htmlFor="email">
            <span className="font-bold mb-2 text-xs uppercase tracking-wide">
              Email address:
            </span>
            <input
              className="appearance-none bg-white border-2 hover:bg-gray-100 leading-tight px-3 py-2 rounded-none text-gray-700 w-full focus:outline-none focus:border-green-500"
              id="email"
              name="email"
              onChange={this.handleChange}
              required
              type="email"
            />
          </label>
        </div>

        {/* Phone number */}
        <div className="mb-6">
          <label className="flex flex-col" htmlFor="phone">
            <span className="font-bold mb-2 text-xs uppercase tracking-wide">
              Phone number:
            </span>
            <input
              className="appearance-none bg-white border-2 hover:bg-gray-100 leading-tight px-3 py-2 rounded-none text-gray-700 w-full focus:outline-none focus:border-green-500"
              id="phone"
              name="phone"
              onChange={this.handleChange}
              type="text"
            />
          </label>
        </div>

        {/* Message */}
        <div className="mb-6">
          <label className="flex flex-col" htmlFor="message">
            <span className="font-bold mb-2 text-xs uppercase tracking-wide">
              Message:
            </span>
            <textarea
              className="appearance-none bg-white border-2 hover:bg-gray-100 leading-tight px-3 py-2 rounded-none text-gray-700 w-full focus:outline-none focus:border-green-500"
              id="message"
              name="message"
              onChange={this.handleChange}
              required
              rows={5}
            />
          </label>
        </div>

        <div className="mb-6">
          {/* Submit */}
          <button
            className="bg-green-500 hover:bg-green-400 cursor-pointer font-semibold leading-none px-4 py-2 text-white text-xs tracking-wide uppercase"
            type="submit"
          >
            Send
          </button>
        </div>
      </form>
    );
  }
}
