import React from "react";

function ContactPage() {
  return (
    <div className="hero flex items-baseline bg-transparent ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Contact Us!</h1>
          <p className="py-6">
            We’re here to help you with any questions, concerns, or feedback you
            may have about our Healthcare Chatbot. Your satisfaction and
            well-being are our top priorities. Reach out to us through any of
            the following methods, and our dedicated support team will be happy
            to assist you.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
