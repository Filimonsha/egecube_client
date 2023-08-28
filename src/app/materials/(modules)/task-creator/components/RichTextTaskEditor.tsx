"use client"

import React from 'react';
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"

export interface AddTaskI {
  onChange: (text: string) => void
}

const AddTask = ({onChange}: AddTaskI) => {
  return (
    <ReactQuill
      style={{
        maxWidth: "98vw"
      }}
      theme={"snow"}
      onChange={onChange}
      modules={{
        toolbar: [
          [{'font': []}], [{size: []}],
          ['bold', 'italic', 'underline', 'blockquote'],
          [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
          ['link', 'image'],
        ],
        clipboard: {
          // toggle to add extra line breaks when pasting HTML:
          matchVisual: false,
        }
      }}
    />
  )
}

export default AddTask;