"use client"

import React from 'react';
import MUIRichTextEditor from "mui-rte";

const save = (data: any) => {
  console.log(data)
}

const AddTask = () => {
  return (
    <MUIRichTextEditor
      label="Type something here..."
      onSave={save}
      inlineToolbar={true}
    />
  )
}

export default AddTask;