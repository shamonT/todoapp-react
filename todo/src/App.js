import { useState } from "react";
import "./App.css";

function App() {
  const [toDos, setToDos] = useState([]);
  const [toDo, setToDo] = useState("");

  function eraseData(){
    setToDo('')
  }
  return (
    <div className="App">
      <div className="app">
        <div className="mainHeading">
          <h1>ToDo List</h1>
        </div>
        <div className="subHeading">
          <br />
          <h2>Whoop, it's sunday 🌝☕ </h2>
        </div>
        <div className="input">
          <input
            id="toDoHead"
            type="text"
            value={toDo}
            onChange={(e) => setToDo(e.target.value)}
            placeholder="🖊️ Add item..."
          />
          <i className="fa fa-eraser" onClick={()=>eraseData()}></i>
          <i
            onClick={() => {
              setToDos([
                ...toDos,
                { id: Date.now(), text: toDo, status: false },
              ]);
              setToDo("");
            }}
            className="fas fa-plus"
          ></i>
          
        </div>
        <div className="todos">
          {toDos.map((obj) => {
            return (
              <div className="todo">
                <div className="left">
                  <input
                    onChange={(e) => {
                      console.log(e.target.checked);
                      console.log(obj);
                      setToDos(
                        toDos.filter((obj2) => {
                          if (obj2.id === obj.id) {
                            obj2.status = e.target.checked;
                          }
                          return obj2;
                        })
                      );
                    }}
                    value={obj.status}
                    type="checkbox"
                    name=""
                    id=""
                  />
                  <p>{obj.text}</p>
                </div>
                <div className="right">
                  <i className="fas fa-times" onClick={()=>{
                    setToDos(
                      toDos.filter((obj2) => {
                        if (obj2.id !== obj.id) 
                          return obj2
                      })
                    )
                  }}></i>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="lists">
        <div className="active-list">
        <h2>Completed Tasks</h2>
          {toDos.map((obj) => {
            if (obj.status) {
              return (
                <div className="card">
                  <h3>{obj.text}</h3>
                </div>
              );
            }
            return null;
          })}
        </div>
        <div className="inactive-list">
        <h2>Pending Tasks</h2>
          {toDos.map((obj) => {
            if (!obj.status) {
              return (
                <div className="card">
                  <h3>{obj.text}</h3>
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;