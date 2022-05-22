import { useState } from "react";
import style from "./RobotList.module.css";

const RobotList = () => {
  const [input, setInput] = useState("");
  const [robotList, setRobotList] = useState([]);

  const onSubmit = (e) => {
    e.preventDefault();
    setRobotList([...robotList, input]);
    setInput("");
  };

  return (
    <div className={style.wrapper}>
      <form onSubmit={onSubmit}>
        <input
          className={style.input}
          value={input}
          placeholder={"Generate Robot - enter smth"}
          type="text"
          onChange={(e) => setInput(e.target.value)}
        />
      </form>
      <h2>Robot List</h2>
      <div className={style.list}>
        {robotList.map((robo) => (
          <img
            onClick={() =>
              setRobotList(robotList.filter((robot) => robot !== robo))
            }
            width={200}
            height={200}
            src={`https://robohash.org/${robo}`}
            alt={`${robo}`}
          ></img>
        ))}
      </div>
    </div>
  );
};

export default RobotList;
