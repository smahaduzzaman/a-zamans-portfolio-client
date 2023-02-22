import React from 'react';

const ProjectGallery = ({ data }) => {
    const { galleryImg1, galleryImg2, galleryImg3, galleryImg4 } = data;

    return (
        <div className="px-20 mb-10 dark:bg-gray-800 dark:text-gray-50">
            <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
                <img src={galleryImg1} alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square" />
                <img src={galleryImg2} alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" />
                <img src={galleryImg3} alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" />
                <img src={galleryImg4} alt="" className="w-full h-full col-span-2 rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" />
            </div>
        </div>
    );
};

export default ProjectGallery;