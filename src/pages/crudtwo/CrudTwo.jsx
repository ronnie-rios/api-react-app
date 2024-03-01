import { useState } from "react";

const tasks = [
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
	const [tasks, setTasks] = useState(tasks);
	return (
		<div>
			<h1>Tasks</h1>
      {tasks.map(({id, task}) => (
        <div>
          <p>{id}: {task}</p>
        </div>
      ))}
		</div>
	);
};

export default CrudTwo;
