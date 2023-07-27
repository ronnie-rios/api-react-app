import { useState } from "react";

const Example = () => {
  const [form, setForm] = useState({
    username: "",
    random: "",
  });

 const changeHandler = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({
        ...prev, [name]: value
    }));
 };

 const submitHandler = (e) => {
    e.preventDefault();
    console.log(form);
 }

  return (
    <>
      <form onChange={changeHandler} onSubmit={submitHandler}>
        <div>
          <label>Username: </label>
          <input type="text" name="username" placeholder="username" />
        </div>
        <div>
          <label>Random: </label>
          <input type="text" name="random" placeholder="type!" />
        </div>
      </form>
    </>
  );
};

export default Example;
