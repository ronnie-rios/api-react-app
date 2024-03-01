import { useState } from "react";

const data = [
	{ id: 1, task: "task 1" },
	{ id: 2, task: "task 2" },
	{ id: 3, task: "task 3" },
	{ id: 4, task: "task 4" },
];

const Three = () => {
	const [tasks, setTasks] = useState(data);
	const [formData, setFormData] = useState({
		task: "",
	});
	const [selectedId, setSelectedId] = useState(null);

	function changeHandler(e) {
		const { name, value } = e.target;
		const newId = Math.floor(Math.random() * 30);
		setFormData((prev) => ({ ...prev, id: newId, [name]: value }));
	}

	function submitHandler(e, update) {
		e.preventDefault();

		if (update) {
			const update = tasks.map(
        (updatedTask) => ( updatedTask.id === selectedId 
          ? 
        { ...updatedTask, task: formData.task }
        : updatedTask)
        );
			setTasks(update);
      setSelectedId(null)
		} else {
      setTasks([...tasks, formData]);
		}
    setSelectedId(null)
		setFormData({ task: "" });
	}

	function deleteHandler(id) {
		const updatedTasks = tasks.filter((task) => task.id !== id);
		setTasks(updatedTasks);
	}

	function updateHandler(id, task) {
		setSelectedId(id);
    setFormData({ task })
	}
	return (
		<div className="max-w-2xl mx-auto p-6">
			<h1 className="text-2xl font-bold">Tasks</h1>
			{tasks.map(({ id, task }) => (
				<div key={id}>
					<p>
						{id} {task}
					</p>
					<button className="bg-red-500 px-2 py-1 text-white" onClick={() => deleteHandler(id)}>
						Delete Task
					</button>
					<button className="bg-blue-500 px-2 py-1 text-white" onClick={() => updateHandler(id, task)}>
						update Task
					</button>
					{selectedId === id && (
						<>
							<form onChange={changeHandler} onSubmit={(e) => submitHandler(e, true)}>
								<label> update task:</label>
								<input type="text" name="task" className="border" value={formData.task} />
								<button className="bg-green-500 px-2 py-1 text-white">update my task</button>
							</form>
							<button className="bg-gray-500 px-2 py-1 text-white" onClick={() => setSelectedId(null)}>
								nevermind
							</button>
						</>
					)}
				</div>
			))}
			<form onChange={changeHandler} onSubmit={submitHandler} className="mt-10 flex flex-col my-2">
				<label className="my-2"> Add a new task:</label>
				<input placeholder="Learn a language" type="text" name="task" className="border p-2" value={selectedId ? "" : formData.task} />
        
				<button className="bg-green-500 px-2 py-1 text-white mt-2">Add New</button>
			</form>
		</div>
	);
};

export default Three;
