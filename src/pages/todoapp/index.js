import { useState } from "react";
import React from "react";
import { Border, Button } from "./styled";
import TextList from "../../components/list";
import { Container } from "./styled";
import { Layout } from "./styled";
import { HeadOne } from "./styled";
import { StyledAddIcon } from "./styled";
import Data from "../../components/data";

const TodoApp = () => {
  const [store, setStore] = useState([]);
  const [todo, setToDo] = useState();

  const onAddData = (event) => {
    event.preventDefault();
    if (todo) {
      let data = [];
      data.push(todo);
      setStore((prev) => [...prev, ...data]);
      setToDo("");
    }
    // else {
    //   alert("Add a Text");
    // }
  };

  const onDeleteData = (value) => {
    store.splice(value, 1);
    console.log(store);
    setStore([...store]);
  };

  const onChange = (event) => {
    setToDo(event.target.value);
  };

  return (
    <>
      <Layout>
        {/* TODO CONTAINER */}
        <Container>
          <HeadOne>TODO APP</HeadOne>

          <form onSubmit={onAddData}>
            <Border>
              <TextList
                type="text"
                name="name"
                place="Add a text"
                value={todo}
                onChange={onChange}
                required={true}
              />
              <button
                type="submit"
                // onClick={onAddData}
                style={{ border: "0", padding: "0" }}
              >
                <StyledAddIcon size="40px" />
              </button>
            </Border>
          </form>

          {store?.map((item, index) => {
            return (
              <Data
                value={item}
                key={index}
                onClickDel={() => onDeleteData(index)}
              />
            );
          })}
        </Container>
      </Layout>
    </>
  );
};
export default TodoApp;
