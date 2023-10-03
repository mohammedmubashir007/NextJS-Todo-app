"use client";

import React, { useState } from "react";

const Page = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    const newTask = { title, desc };
    setTasks([...tasks, newTask]);
    setTitle("");
    setDesc("");
  };

  const deleteHandler=(index)=>{
    let copyTask = [...tasks]
    copyTask.splice(index,1)
    setTasks(copyTask)
  }

  let renderTask = <h2>No Tasks available</h2>;

  if (tasks.length > 0) {
    renderTask = tasks.map((task, index) => (
      <li key={index} className="flex items-center justify-between mb-8">
        <div className="flex items-center justify-between mb-5 w-2/3"
        >
          <h5 className="text-2xl font-semibold">{task.title}</h5>
          <h6 className="text-lg font-semibold">{task.desc}</h6>
        </div>
        <button
        onClick={(e)=>{
          deleteHandler(index)
        }}
         className="bg-red-400 text-white px-4 py-2 rounded font-bold">
          Delete
        </button>
      </li>
    ));
  }

  return (
    <>
      <h1 className="bg-black text-white p-5 text-3xl font-bold text-center">
        Mubashir's Todo List
      </h1>
      <form>
        <input
          type="text"
          className="text-2xl border-zinc-800 border-2 m-5 px-4 py-2"
          placeholder="Enter your task"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />

        <input
          type="text"
          className="text-2xl border-zinc-800 border-2 m-5 px-4 py-2"
          placeholder="Enter task description"
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        />
        <button
          className="bg-black text-white px-4 py-2 text-2xl font-bold rounded"
          onClick={(e) => {
            e.preventDefault();
            handleAddTask();
          }}
        >
          Add Task
        </button>
      </form>

      <hr />

      <div className="p-8 bg-slate-200">{renderTask}</div>
    </>
  );
};

export default Page;
