// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { useEffect, useState } from "react";
import { content } from "../Content";

const Projects = () => {
  const { Projects } = content;
  const [creations, setCreations] = useState([]);
  console.log(creations);

  useEffect(() => {
    fetch("/creations.json")
      .then((res) => res.json())
      .then((data) => {
        setCreations(data);
      });

  }, {})

  return (
    <section className="bg-bg_light_primary overflow-hidden" id="projects">
      <div className="md:container px-5 py-14 min-h-screen flex flex-col justify-between">
        <div>
          <h2 className="title" data-aos="fade-down">
            {Projects.title}
          </h2>
          <h4 className="subtitle" data-aos="fade-down">
            {Projects.subtitle}
          </h4>
          <br />
        </div>
        <div className="flex items-center justify-center mx-auto lg:flex-row flex-col-reverse gap-5">
          <img
            src={Projects.image}
            alt="..."
            data-aos="fade-right"
            className="max-w-[30vw] min-w-[12rem] pb-10 px-10"
          />
          <Swiper
            pagination={{
              clickable: true,
            }}
            data-aos="fade-left"
            spaceBetween={20}
            modules={[Pagination]}
            className="rounded-3xl pb-16 max-w-xs drop-shadow-primary self-start"
          >
            {Projects.project_content.map((content, i) => (
              <SwiperSlide
                key={i}
                className="bg-white rounded-3xl p-5 border-b-8 border-[#FAF9FD] h-fit"
              >
                <img
                  className="w-25 md:w-50 lg:w-75 h-auto object-cover rounded-xl"
                  src={content.image}
                  alt="..."
                />
                <div className="flex flex-col gap-1 mt-2">
                  <h5 className="font-bold font-Poppins">{content.title}</h5>
                  <a
                    href={`/projectdetails/${content.id}`}
                    className="font-bold text-gray self-end"
                    target="_blank"
                  >
                    SEE DETAILS
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Projects;
// className="w-24 md:w-32 lg:w-48"