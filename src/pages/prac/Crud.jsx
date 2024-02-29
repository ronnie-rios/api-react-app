import { useState } from "react";
const todoData = [
	{ id: 1, task: "task1" },
	{ id: 2, task: "task2" },
	{ id: 3, task: "task3" },
	{ id: 4, task: "task3" },
];

const Crud = () => {
	const [todos, setTodos] = useState(todoData);
  const [toggleUpdate, setToggleUpdate] = useState(false)
	const [formData, setFormData] = useState({
		task: "",
	});

	const formHandler = (e) => {
		const { name, value } = e.target;
		const newId = todos.length + 1;
		setFormData((prev) => ({ ...prev, id: newId, [name]: value }));

		console.log(formData);
	};
	const submitHandler = (e, update) => {
		e.preventDefault();
		if (formData.task.length > 2) {
			setTodos([...todos, formData]);
			setFormData({ task: "" });
		} else {
			alert("please enter 2 or more chars");
		}
	};

	const deleteHandler = (id) => {
		const newTodos = todos.filter((todo) => todo.id !== id);
		setTodos(newTodos);
	};

  const updateHandler = (id, task) => {
    const foundTodo = todos.find((todo => todo.id === id))
		setToggleUpdate(true)
    console.log(foundTodo);

    //setTodos()
  }

	return (
		<div className="max-w-screen-xl mx-auto p-4">
			<h1 className="text-xl">CRUD</h1>
			{todos.map(({ id, task }, i) => (
				<div key={i}>
					<p className="hover:underline my-2">
						{id}: {task}
						
					</p>
          <button className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-sm" onClick={() => deleteHandler(id)}>
							DELETE
						</button>
          <button className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-sm" onClick={() => updateHandler(id, task, true)}>
							UPDATE
						</button>
						{toggleUpdate && id == id ? 
							<>
								<form>
									<label>Update Task: </label>
									<input type="text" value={task}/>
									<button className="p-2 bg-green-800 hover:bg-green-600 text-white rounded-sm">Update Task</button>
								</form>
							</> : <></>}
				</div>
			))}
			<div className="flex flex-col">
				<h2 className="text-lg">Add new</h2>
				<form onChange={formHandler} onSubmit={submitHandler} className="my-4">
					<label>Task: </label>
					<input type="text" className="border p-2 rounded-sm" name="task" value={formData.task} />
					<div className="my-4">
						<button className="p-2 bg-green-800 hover:bg-green-600 text-white rounded-sm">Submit</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Crud;
