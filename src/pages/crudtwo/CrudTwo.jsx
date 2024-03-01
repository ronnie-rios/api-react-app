import { useState } from "react";

const taskData = [
	{
		id: 1,
		task: "task1",
	},
	{
		id: 3,
		task: "task3",
	},
	{
		id: 2,
		task: "task2",
	},
	{
		id: 4,
		task: "task4",
	},
];

const CrudTwo = () => {
	const [tasks, setTasks] = useState(taskData);
	const [taskId, setTaskId] = useState(null);
	const [formData, setFormData] = useState({
		task: "",
	});

	function formHandler(e) {
		const { name, value } = e.target;
		const newId = Math.floor(Math.random() * 100);
		setFormData((prev) => ({ ...prev, id: newId, [name]: value }));
	}

	function submitHandler(e, update) {
		e.preventDefault();
    if(update) {
      const updatedTasks = tasks.map((task) => task.id === taskId ? 
        { ...task, task: formData.task } 
        : task
      )
      setTasks(updatedTasks)
      setTaskId(null)
    } else {
      setTasks([...tasks, formData]);
    }
		setFormData({ task: "" });
	}

	function deleteHandler(id) {
		const updatedTasks = tasks.filter((task) => task.id !== id);
		setTasks(updatedTasks);
	}

  function updateHandler(id, task) {
    setTaskId(id)
    setFormData({ task })
  }

	return (
		<div className="mx-auto max-w-2xl p-2">
			<h1 className="border-b text-2xl font-bold">Tasks</h1>
			{tasks.map(({ id, task }) => (
				<div key={id} className="my-2 ">
					<p>
						{id}: {task}
					</p>
					<button className="bg-red-500 hover:bg-red-600 p-2 text-white rounded-md mr-2" onClick={() => deleteHandler(id)}>
						Delete
					</button>
					<button
						className="bg-blue-500 hover:bg-blue-600 p-2 text-white rounded-md ml-2"
						onClick={() => updateHandler(id, task)}
					>
						Update
					</button>
					{taskId === id && (
						<form onSubmit={(e) => submitHandler(e, true)} onChange={formHandler}>
							<label className="text-left">Update Task :</label>
							<input
								className="border rounded-md px-2 my-2"
								
								type="text"
								name="task"
								value={formData.task}
							/>
							<button className="bg-green-500 hover:bg-green-700 p-2 text-white mt-4 rounded-md">Add!</button>
						</form>
					)}
				</div>
			))}
			<div className="mt-6 max-w-lg text-center p-4 border border-gray-300 rounded-md">
				<h2>Add a new task</h2>
				<form className="flex flex-col" onChange={formHandler} onSubmit={submitHandler}>
					<label className="text-left">Task Name:</label>
					<input
						className="border rounded-md px-2 my-2"
						placeholder="Walk the dog"
						type="text"
						name="task"
						value={taskId ? "" : formData.task}
					/>
					<button className="bg-green-500 hover:bg-green-700 p-2 text-white mt-4 rounded-md">Add!</button>
				</form>
			</div>
		</div>
	);
};

export default CrudTwo;
