import { useState } from "react";
import PlayerCard from "./PlayerCard";

const data = [
  { id: 1, name: "messi", team: "inter miami" },
  { id: 2, name: "hazard", team: "chelsea" },
  { id: 3, name: "enzo", team: "chelsea" },
  { id: 4, name: "Augero", team: "man city" },
];

const Example = () => {
  const [players, setPlayers] = useState(data);
  console.log(players);
  const [form, setForm] = useState({
    name: "",
    team: "",
  });

  console.log(form);
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setPlayers([...players, form]);
    setForm({ name: '' , team: '' })
  };

  return (
    <>
      <main className="max-w-screen-xl mx-auto p-10">
        <nav className="flex justify-between items-center my-5">
          <p>Hi</p>
          <div className="flex gap-8 ">
            <p className="hover:underline">link2</p>
            <p className="hover:underline">link3</p>
          </div>
        </nav>

        <div className="mx-auto ">
          <h1 className="text-2xl font-strong">Add a player</h1>
          <form onChange={changeHandler} onSubmit={submitHandler}>
            <div className="py-2">
              <label>Player name: </label>
              <input className='ml-2 border border-black rounded-md' type="text" name="name" placeholder="Player name" value={form.name}/>
            </div>
            <div className="py-2">
              <label>Team: </label>
              <input className='ml-2 border border-black rounded-md' type="text" name="team" placeholder="team" value={form.team}/>
            </div>
            <button className='bg-green-300 hover:bg-green-500 p-2 rounded-md mt-4' onClick={submitHandler}>Submit</button>
          </form>
        </div>

        <section className="py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {players &&
              players.map((player, i) => <PlayerCard data={player} key={i} />)}
          </div>
        </section>
      </main>
    </>
  );
};

export default Example;
