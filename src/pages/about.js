import Link from "next/link";

const About = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-[#EEE7E1] text-[12px] min-h-screen">
      <div className="w-full lg:w-1/12 px-8 font-mondium text-[#1a1919]">
        <div className="flex flex-row lg:flex-col mt-8 lg:mt-4">
          <div className="rotate-0 lg:-rotate-90 mr-4 lg:mr-0 lg:mt-20 desk:mt-24 z-50">
            <Link href="/">
              <a className="">Home</a>
            </Link>
          </div>
          <div className="rotate-0 lg:-rotate-90 mr-4 lg:mr-0 lg:mt-12 z-40">
            <Link href="/work">
              <a className="">Work</a>
            </Link>
          </div>
          <div className="rotate-0 lg:-rotate-90 mr-4 lg:mr-0 lg:mt-16">
            <Link href="/contact">
              <a className="">Contact</a>
            </Link>
          </div>
          <div className="rotate-0 lg:-rotate-90 mr-4 lg:mr-0 mt-2 lg:mt-24 h-[2px] w-[40px] bg-[#333] lg:-ml-2 xl:ml-1 2xl:ml-3 desk:ml-7"></div>
          <div className="rotate-0 lg:-rotate-90 mr-4 lg:mr-0 lg:mt-40 xl:mt-64">
            &#169; 2022
          </div>
        </div>
      </div>

      {/* main content */}
      <div className="w-full px-8 font-mondium pt-[50px] lg:pt-[65px] xl:pt-[70px] 2xl:pt-[90px] desk:pt-[105px] lg:ml-12 lg:pr-12">
        <div className="flex flex-col lg:flex-row justify-between items-center text-[#1a1919]">
          <div className="items-start w-full">
            <div className="pb-5 font-semibold text-[40px] lg:text-[60px] xl:text-[75px] 2xl:text-[90px] desk:text-[120px] font-grand">
              About
            </div>
            <div className="font-grand text-[20px] lg:text-[28px] xl:text-[36px]">
              I&apos;m Tuan. A developer, creator and problem solver.
            </div>
          </div>
          {/* <div className="md:w-1/2 lg:w-1/4 mb-4 lg:mb-0">
            <img
              src="https://res.cloudinary.com/liv/image/upload/v1641620884/me-2_napokr.jpg"
              alt="self-image"
              className="h-64"
            />
          </div> */}
        </div>

        <div className="items-start">
          <div className="pb-5 font-thin text-[14px] text-[#333] lg:w-3/4 2xl:w-3/5">
            This resonates so deeply with me because I have no desire to make
            things just for the sake of it. I only want to make, design or build
            ideas and products that matter and have a positive impact in the
            world.
          </div>

          <div className="mt-4">
            <div className="uppercase font-grand text-[16px] lg:text-[18px] xl:text-[20px] text-[#1a1919]">
              experience
            </div>
            <div className="font-mondium text-[14px] text-[#333]">
              - 2 years experience in Front-end Web Development
            </div>
          </div>
          <div className="mt-8">
            <div className="uppercase font-grand text-[16px] lg:text-[18px] xl:text-[20px] text-[#1a1919]">
              skills
            </div>
            <div className="font-mondium text-[14px] text-[#333]">
              HTML and CSS / JavaScript / ReactJs / NextJs / Tailwind CSS
            </div>
            <div className="mt-12 mb-8">
              <Link href="/contact">
                <a className="bg-[#1a1919] text-[#EEE7E1] hover:opacity-70 font-bold py-2 px-4 rounded font-grand text-[20px]">
                  Contact Me
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
