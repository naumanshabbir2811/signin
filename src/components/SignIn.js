import React from 'react';

function SignIn() {
  return (
    <div className="container ">
      <div className="container-sm card_mine">
        <div className=" ">
          <form action="">
            <img
              src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg"
              width="100px"
              alt="hi"
            />
            <h3 className="m-3">SignIn Page</h3>
            <p className="inline text-align-center">
              Build a Signin Page to display your commands on bootstrap
              <span className="text-danger"> :text with red color </span>
              pseudo-element
            </p>
            <p>
              <a href="https://www.google.com/">
                Works in latest Chrome, Safari and Firefox. This is a clickable
                seqction that takes you to new page
              </a>
            </p>
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <div className="form-check mt-3 d-flex align-items-center ">
              <input
                className="form-check-input p-2"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label label_mar mx-2"
                htmlFor="flexCheckDefault"
              >
                Remember
              </label>
            </div>
            <button type="button" className="btn btn-primary my-3 px-4 btn_me">
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
