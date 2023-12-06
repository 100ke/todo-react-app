import "./App.css";
import Todo from "./Todo";
import React, { useState, useEffect } from "react";
import { Container, List, Paper } from "@mui/material";
import AddTodo from "./AddTodo";
// import { call } from "./service/ApiService";
import { API_BASE_URL } from "./api-config";
import axios from "axios";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get(`${API_BASE_URL}/todo`)
    .then((response) => {
      console.log(response.data);
      setItems(response.data.data)
    });
  }, []);

  const addItem = (item) => {
    axios.post(`${API_BASE_URL}/todo`, item)
    .then((response) => setItems(response.data.data));
  };

  const editItem = (item) => {
    axios.put(`${API_BASE_URL}/todo`, item)
    .then((response) => setItems(response.data.data));
  };

  const deleteItem = (item) => {
    axios.delete(`${API_BASE_URL}/todo`, { data: item })
    .then((response) => setItems(response.data.data));
  };

  let todoItems = items.length > 0 && (
    <Paper elevation={3} style={{ margin: 16 }}>
      <List>
        {items.map((item) => (
          <Todo
            item={item}
            key={item.id}
            editItem={editItem}
            deleteItem={deleteItem}
          />
        ))}
      </List>
    </Paper>
  );
  return (
    <div className="App">
      <Container maxWidth="md">
        <h1>My Todo-List</h1>
        <h4></h4>
        <AddTodo addItem={addItem} />
        <div className="TodoList">{todoItems}</div>
      </Container>
    </div>
  );
}

export default App;
