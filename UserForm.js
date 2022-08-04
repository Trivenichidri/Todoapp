import { useState } from "react";
function UserForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submit, setSubmit] = useState("");

  const handleName = (event) => {
    setName(event.target.value);
    console.log(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
    console.log(event.target.value);
  };
  const handlesubmit = (event) => {
    setSubmit(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div className="form">
      <div>
        <h1>User Registration</h1>
      </div>
      <form>
        <label className="label">Name</label>
        <input
          onChange={handleName}
          className="input"
          value={name}
          type="text"
        />
        <label className="label">Email</label>
        <input
          onChange={handleEmail}
          className="input"
          value={email}
          type="email"
        />
        <button
          onClick={handlesubmit}
          className="btn"
          value={submit}
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
export default UserForm;
