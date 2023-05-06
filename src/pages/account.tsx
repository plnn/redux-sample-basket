import React, { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../components/button/button";
import Dropdown from "../components/dropdown/dropdown";
import { logIn, logOut, userDataSelector } from "../store/loginSlice";

import "./account.scss";
const database = [
  {
    email: "user1",
    password: "pass1",
    name: "Pelin",
  },
  {
    email: "user2",
    password: "pass2",
    name: "Ayşe",
  },
];

const errors = {
  email: "invalid username",
  pass: "invalid password",
};
const Account: React.FC<{}> = (props) => {
  const dispatch = useDispatch();
  const userData = useSelector(userDataSelector);
  const [errorMessages, setErrorMessages] = useState({
    message: "",
    name: "",
  });
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const options = [
    { label: "Turkish", value: "tr" },
    { label: "English", value: "en" },
  ];
  const [locale, setLocale] = React.useState("tr");
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    //Prevent page reload
    event.preventDefault();

    // Find user login info
    const userData = database.find((user) => user.email === email);

    // Compare user info
    if (userData) {
      if (userData.password !== pass) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        dispatch(logIn(userData));
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.email });
    }
  };

  const logout = () => {
    dispatch(logOut());
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name: string) =>
    name === errorMessages?.name && (
      <div className="error">{errorMessages?.message}</div>
    );

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setLocale(event.target.value);
  };

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form autoComplete="off" onSubmit={handleSubmit}>
        <div className="input-container">
          <input
            type="text"
            autoComplete="off"
            name="uname"
            placeholder="E-mail"
            value={email}
            onChange={(evt) => setEmail(evt?.target?.value)}
          />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <input
            type="password"
            name="pass"
            placeholder="Pasword"
            value={pass}
            onChange={(evt) => setPass(evt?.target?.value)}
          />
          {renderErrorMessage("pass")}
        </div>
        <div className="locale-container">
          <span>Locale</span>
          <Dropdown
            label=""
            value={locale}
            options={options}
            onChange={handleChange}
          />
        </div>
        <div className="button-container">
          <Button
            type={!(email && pass) ? "disabled" : "default"}
            text="Gönder"
            onClick={handleSubmit}
          />
        </div>
      </form>
    </div>
  );
  return (
    <div className="app">
      <div className="login-form">
        <h1 className="title">Account</h1>
        {userData.email !== "" ? (
          <div className="logged-in-user-container">
            <span className="name">{userData.name}</span>
            <span className="item">Email: {userData.email}</span>
            <span className="item">Password: {userData.password}</span>
            <div className="locale-container">
              <span>Locale</span>
              <Dropdown
                label=""
                value={locale}
                options={options}
                onChange={handleChange}
              />
            </div>
            <Button text="Log out" onClick={logout} />
          </div>
        ) : (
          renderForm
        )}
      </div>
    </div>
  );
};

export default Account;
