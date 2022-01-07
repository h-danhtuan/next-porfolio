import Link from "next/link";

const About = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-[#1a1919] text-[12px] text-[#EEE7E1] min-h-screen">
      <div className="w-full lg:w-1/12 px-8 font-mondium">
        <div className="flex flex-row lg:flex-col mt-8 lg:mt-4">
          <div className="rotate-0 lg:-rotate-90 mr-4 lg:mr-0 lg:mt-20">
            <Link href="/">
              <a className="">Home</a>
            </Link>
          </div>
          <div className="rotate-0 lg:-rotate-90 mr-4 lg:mr-0 lg:mt-12">
            <Link href="/work">
              <a className="">Work</a>
            </Link>
          </div>
          <div className="rotate-0 lg:-rotate-90 mr-4 lg:mr-0 lg:mt-16">
            <Link href="/contact">
              <a className="">Contact</a>
            </Link>
          </div>
          <div className="rotate-0 lg:-rotate-90 mr-4 lg:ml-3 lg:mr-0 mt-2 lg:mt-24 h-[2px] w-[40px] bg-[#EEE7E1]"></div>
          <div className="rotate-0 lg:-rotate-90 mr-4 lg:mr-0 lg:mt-64">
            &#169; 2022
          </div>
        </div>
      </div>
      <div className="w-full lg:w-4/12 px-8 font-mondium pt-[60px] lg:pt-[300px] xl:pt-[430px] pr-10">
        <div className="pb-5 font-semibold text-[16px]">About</div>
        <div className="pb-5 font-thin text-[14px]">
          This is a showcase of my best work in a variety of fields, from
          Graphic and Web Design to Product Design and Management.
        </div>
        <div className="pb-5 font-thin text-[14px]">
          The world of Digital Design has grown at an extremely rapid rate over
          the last 10 years and my aim has been to evolve with it. I’m learning
          and gaining new skills every day.
        </div>
      </div>
      <div className="w-full lg:w-7/12 h-full px-8">
        <div className=" uppercase text-[40px] lg:text-[75px] xl:text-[100px] pt-12 lg:pt-72 xl:pt-64 2xl:pt- font-extralight leading-tight lg:leading-none flex flex-col">
          <div className="">
            <Link href="/work/pasona-tech">
              <a className="font-grand">Pasona Tech</a>
            </Link>
            <div className="text-[12px] leading-[20px] font-mondium ml-2 leading-[1em] mb-2">
              - Website Development
            </div>
          </div>

          <div className="">
            <Link href="/work/crossing">
              <a className="font-grand">Crossing</a>
            </Link>
            <div className="text-[12px] leading-[20px] font-mondium ml-2 leading-[1em] mb-2">
              - Website Design & Development
            </div>
          </div>

          <div>
            <Link href="/work/new-pasona">
              <a className="font-grand">New Pasona</a>
            </Link>
            <div className="text-[12px] leading-[20px] font-mondium ml-2 leading-[1em]">
              - Website Development
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
