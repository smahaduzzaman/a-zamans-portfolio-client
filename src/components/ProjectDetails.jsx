import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProjectInfo from './ProjectInfo';
import ProjectGallery from './ProjectGallery';

const ProjectDetails = () => {
    const data = useLoaderData();

    return (
        <div className='flex flex-col w-full h-auto mx-auto my-10'>
            <ProjectInfo data={data}></ProjectInfo>
            <ProjectGallery data={data}></ProjectGallery>
        </div>
    );
};

export default ProjectDetails;