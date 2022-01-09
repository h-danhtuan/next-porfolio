import Link from "next/link";

const work = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-[#1a1919] text-[12px] text-[#EEE7E1] min-h-screen">
      <div className="w-full lg:w-1/12 px-8 font-mondium">
        <div className="flex flex-row lg:flex-col mt-8 lg:mt-4">
          <div className="rotate-0 lg:-rotate-90 mr-4 lg:mr-0 lg:mt-20 desk:mt-24 z-50">
            <Link href="/">
              <a className="cool-link">Home</a>
            </Link>
          </div>
          <div className="rotate-0 lg:-rotate-90 mr-4 lg:mr-0 lg:mt-12 z-40">
            <Link href="/about">
              <a className="cool-link">About</a>
            </Link>
          </div>
          <div className="rotate-0 lg:-rotate-90 mr-4 lg:mr-0 lg:mt-16">
            <Link href="/contact">
              <a className="cool-link">Contact</a>
            </Link>
          </div>
          <div className="rotate-0 lg:-rotate-90 mr-4 lg:mr-0 mt-2 lg:mt-24 h-[2px] w-[40px] bg-[#EEE7E1] lg:-ml-2 xl:ml-1 2xl:ml-3 desk:ml-7"></div>
          <div className="rotate-0 lg:-rotate-90 mr-4 lg:mr-0 lg:mt-40 xl:mt-64">
            &#169; 2022
          </div>
        </div>
      </div>
      <div className="w-full lg:w-4/12 px-8 font-mondium pt-[60px] lg:pt-[240px] xl:pt-[380px] 2xl:pt-[400px] desk:pt-[430px] pr-10">
        <div className="pb-5 font-semibold text-[16px]">Work</div>
        <div className="pb-5 font-thin text-[14px]">
          This is my main involved work in web development that brings me a lot
          of knowledge, experience also mistakes and problems.
        </div>
        <div className="pb-5 font-thin text-[14px]">
          The world of Web Development has grown at an highly rabid rate so by
          all the thing I have been through, I have a chance to grow up as well.
          I&apos;m learning and gaining new thing every day.
        </div>
      </div>
      <div className="w-full lg:w-7/12 h-full px-8">
        <div className=" uppercase pt-12 lg:pt-64 xl:pt-80 2xl:pt-64 font-extralight leading-tight lg:leading-none flex flex-col">
          <div className="">
            <Link href="/work/detail/new-pasona">
              <a className="font-fugi text-[40px] lg:text-[65px] xl:text-[80px] 2xl:text-[100px]">
                <span className="relative hover:animate-[waggle_1s_infinite_alternate_ease-in-out] inline-block">
                  New Pasona
                </span>
              </a>
            </Link>
            <div className="text-[12px] leading-[20px] font-mondium ml-2 leading-[1em] mb-2">
              - Website Development
            </div>
          </div>

          <div className="">
            <Link href="/work/detail/crossing">
              <a className="font-fugi text-[40px] lg:text-[65px] xl:text-[80px] 2xl:text-[100px]">
                <span className="relative hover:animate-[waggle_1s_infinite_alternate_ease-in-out] inline-block">
                  Crossing
                </span>
              </a>
            </Link>
            <div className="text-[12px] leading-[20px] font-mondium ml-2 leading-[1em] mb-2">
              - Website Design & Development
            </div>
          </div>

          <div>
            <Link href="/work/detail/pasona-tech">
              <a className="font-fugi text-[40px] lg:text-[65px] xl:text-[80px] 2xl:text-[100px]">
                <span className="relative hover:animate-[waggle_1s_infinite_alternate_ease-in-out] inline-block">
                  Pasona Tech
                </span>
              </a>
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

export default work;
