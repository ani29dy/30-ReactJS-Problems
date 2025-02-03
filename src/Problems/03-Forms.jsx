import React, { useState } from "react";

const Three = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  return (
    <>
      <form>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          name="name"
          id="name"
          onChange={(e) => setName(e.target.value)}
        />{" "}
        <br />
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
        />{" "}
        <br />
        <label htmlFor="phone">Phone No.: </label>
        <input
          type="text"
          name="phone"
          id="phone"
          onChange={(e) => setPhone(e.target.value)}
        />{" "}
        <br />
        <br />
      </form>
      <div>
        <h2>Name: {name}</h2>
        <h2>Email: {email}</h2>
        <h2>Phone No.: {phone}</h2>
      </div>
    </>
  );
};

export default Three;
