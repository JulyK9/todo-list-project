import { useState } from "react";

const EditInput = ({ toDos, setToDos, setLiText, liText }) => {
  // const [liText, setLiText] = useState("");

  const handleLiChange = (e) => {
    setLiText(e.target.value);
  };

  // const findText = (id) => {
  //   if(id === toDos.id)
  //   setLiText(toDos.text)
  // }

  // const handleEdit = (id, text) => {};

  return (
    <div>
      <input
        className="li-input"
        type="text"
        value={liText}
        onChange={handleLiChange}
      />
    </div>
  );
};

export default EditInput;
