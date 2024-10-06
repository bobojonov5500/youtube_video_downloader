import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Input = () => {
  const navigate = useNavigate();
  const [inputvalue, setInputvalue] = useState("");
  const handlersubmit = (e) => {
    e.preventDefault();
    if (inputvalue) {
      const id = inputvalue.slice(inputvalue.indexOf("=") + 1);
      navigate(`/youtube/${id}`);
    }
  };

  return (
    <form onSubmit={handlersubmit} className="max-w-xl  mx-auto ">
      <div className="flex ">
        <input
          value={inputvalue}
          type="text"
          className="block bg-white border-4 border-r-0 outline-0 border-blue-600 rounded-r-none  w-full p-4  text-sm text-gray-900  rounded-lg  "
          placeholder="Search Mockups, Logos..."
          required
          onChange={(e) => setInputvalue(e.target.value)}
        />
        <button
          type="submit"
          className="rounded-l-none text-white end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default Input;
