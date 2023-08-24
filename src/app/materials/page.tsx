"use client"

import React, {useMemo, useState} from 'react';
import apiClient from "@/utils/api/sdk/sdk";
import SubjectPicker from "@/app/materials/(components)/SubjectPicker";
import TaskCreator from "@/app/materials/(modules)/task-creator/TaskCreator";
import {SimpleTask, SimpleTaskDto} from "@/types/backend/simpletask";
import SimpleTaskList from "@/app/materials/(components)/SimpleTaskList";

const Materials = () => {
  const [subjectId, setSubjectId] = useState(1)
  const [showCount, setShowCount] = useState(10)
  const [loadedTasks, setLoadedTasks] = useState<Array<SimpleTaskDto>>()

  useMemo(() =>
    apiClient
      .callApiWithSession(false).simpleTaskService.getNumberOfSubjectTasks(subjectId, showCount)
      .then(tasks => setLoadedTasks(tasks))
  , [subjectId, showCount])

  const addTaskToRepository = (data: SimpleTask) => {
    // TODO
    apiClient.callApiWithSession().simpleTaskService
      .addTaskToRepository(data)
  }

  return (
    <div>
      <TaskCreator onSubmit={addTaskToRepository}/>

      <SubjectPicker subjectId={subjectId} setSubjectId={setSubjectId}/>
      <SimpleTaskList subjectId={subjectId} loadedTasks={loadedTasks}/>
    </div>
  )
}

export default Materials;