import { useState } from "react";
import Slider from "react-slick";
import Title from "./Title";
import { FadeIn } from "./FadeIn";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
import { persons } from "../assets/persons";
import { quote } from "../assets";
import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

function SampleNextArrow(props: any) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-0 right-0 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowRight />
    </div>
  );
}

function SamplePrevArrow(props: any) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-0 right-20 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowLeft />
    </div>
  );
}

const Testimonial = () => {
  const [dotActive, setDocActive] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (next: any) => {
      setDocActive(next);
    },
    appendDots: (dots: any) => (
      <div
        style={{
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <ul
          style={{
            display: "flex",
            gap: "15px",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          {" "}
          {dots}{" "}
        </ul>
      </div>
    ),
    customPaging: (i: any) => (
      <div
        style={
          i === dotActive
            ? {
                width: "12px",
                height: "12px",
                color: "blue",
                background: "#ff014f",
                borderRadius: "50%",
                cursor: "pointer",
              }
            : {
                width: "12px",
                height: "12px",
                color: "blue",
                background: "gray",
                borderRadius: "50%",
                cursor: "pointer",
              }
        }
      ></div>
    ),
  };
  return (
    <section
      id="testimonial"
      className="w-full py-20 border-b-[1px] border-b-gray-700"
    >
      <FadeIn>
        <div className="flex justify-center items-center text-center">
          <Title title="The Mega Family" des="Meet the Team" />
        </div>
        <div className="max-w-6xl mx-auto">
          <Slider {...settings}>
            {persons.map((person) => (
              <div key={person.id} className="w-full">
                <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
                  <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center">
                    <img
                      className="h-72 md:h-32 lgl:h-72 rounded-lg object-cover"
                      src={person.image}
                      alt={person.name}
                    />
                    <div className="w-full flex flex-col justify-end">
                      <h3 className="text-2xl font-bold">{person.name}</h3>
                      <p className="text-base tracking-wide text-gray-500">
                        {person.department}
                      </p>
                    </div>
                  </div>
                  <div className="w-full lgl:w-[60%] h-full flex flex-col justify-between">
                    {/* Display quote, role, and social links */}
                    <img className="w-20 lgl:w-32" src={quote} alt="quote" />
                    <div className="w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-4 lgl:p-8 flex flex-col justify-center gap-4 lgl:gap-8">
                      <div className="flex flex-col justify-between lgl:items-center py-6 border-b-2 border-b-gray-900">
                        <div>
                          <h3 className="text-xl lgl:text-2xl font-medium tracking-wide">
                            {person.role}
                          </h3>
                        </div>
                      </div>
                      {/* Display social links */}
                      <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                        Reach me out:
                        <br />
                        <a
                          href={person.links.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:underline"
                        >
                          <FaInstagram className="inline-block" /> Instagram
                        </a>
                        <br />
                        <a
                          href={person.links.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:underline"
                        >
                          <FaLinkedin className="inline-block" /> LinkedIn
                        </a>
                        <br />
                        <a
                          href={person.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:underline"
                        >
                          <FaGithub className="inline-block" /> GitHub
                        </a>
                        <br />
                        <a
                          href={`mailto:${person.links.email}`}
                          className="text-blue-500 hover:underline"
                        >
                          <FaEnvelope className="inline-block" /> Email
                        </a>
                        <br />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </FadeIn>
    </section>
  );
};

export default Testimonial;
