import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { Button, Grid, TextField } from "@mui/material";

const AddTodo = (props) => {
    // 사용자의 입력을 저정할 오브젝트
    const [item, setItem] = useState({ title: ""});
    const addItem = props.addItem;

    // 입력한 내용을 삭제하는 버튼
    const delContent = () => {
      setItem({ title: "" });
    }

    // 내용삭제버튼 표시 여부
    const showBtn = item.title !== "";

    // onButtonClick 함수 작성
    const onButtonClick = () => {
      if (item.title.trim() === "") {
        alert("입력된 내용이 없습니다.")
        return;
      }
        addItem(item); // addItem 함수 사용
        setItem({ title: "" });
    };

    // onInputChange 함수 작성
    const onInputChange = (e) => {
        setItem({title: e.target.value});
        console.log(item);
    };

    // enterKeyEventHandler 함수
    const enterKeyEventHandler = (e) => {
        if (e.key === 'Enter') {
          onButtonClick();
        }
    };


    // onInputChange 함수 TextField에 연결
    return (
        <Grid container style={{ marginTop: 50 }}>
          <Grid xs={11} md={11} item style={{ paddingRight: 16 }}>
            <TextField placeholder="Add Todo here" fullWidth
            onChange={onInputChange} 
            onKeyPress={enterKeyEventHandler}
            value={item.title}/>
          </Grid>
          <Grid xs={1} md={1} item >
            {showBtn && (<IoClose className="delText" onClick={delContent}/>)}
            <Button fullWidth style={{ height: '100%' }} color="success" variant="contained"
            onClick={onButtonClick} className="addBtn">
              <FaPlus />
            </Button>
          </Grid>
        </Grid>
    );
}

export default AddTodo;