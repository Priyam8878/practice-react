import React, { useState } from "react";

const PhoneBook = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [showData, setShowData] = useState([]);
  console.log(name, number);
  function add(e) {
    e.preventDefault()
    setShowData([...showData, { name, number }]);
    setName("")
    setNumber("")
  }
  console.log(showData);
  return (
    <>
      <div>
        <form>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            placeholder="name"
          />

          <input
            onChange={(e) => setNumber(e.target.value)}
            placeholder="name"
          />
          <button type="number" onClick={(e)=>add(e)}>
            Add TO Phone Book
          </button>
        </form>
        {showData.map((data) => (
          <div>
            <h1>
              {data.name} {data.number}
            </h1>
          </div>
        ))}
      </div>
    </>
  );
};

export default PhoneBook;
