import React from 'react';
import apiClient from "@/utils/api/sdk/sdk";

const HomeworkPage = async () => {
    const homeworks = await apiClient.callApiWithSession().homeworkService.getAllHomework(1)

    console.log(homeworks, "session")
    return (
        <div>

        </div>
    );
};

export default HomeworkPage;
