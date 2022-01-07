import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-[#EEE7E1] text-[12px]">
      <div className="w-full lg:w-1/12 px-8 font-mondium">
        <div className="flex flex-row lg:flex-col mt-8 lg:mt-4">
          <div className="rotate-0 lg:-rotate-90 mr-4 lg:mr-0 lg:mt-20">
            <Link href="https://linkedin.com/in/tuan-hoang-danh-26711471">
              <a className="">LinkedIn</a>
            </Link>
          </div>
          <div className="rotate-0 lg:-rotate-90 mr-4 lg:mr-0 lg:mt-16">
            <Link href="https://github.com/h-danhtuan">
              <a className="">Github</a>
            </Link>
          </div>
          <div className="rotate-0 lg:-rotate-90 mr-4 lg:ml-3 lg:mr-0 mt-2 lg:mt-24 h-[2px] w-[40px] bg-[#1a1919] desk:ml-8"></div>
          <div className="rotate-0 lg:-rotate-90 mr-4 lg:mr-0 lg:mt-80">
            &#169; 2022
          </div>
        </div>
      </div>
      <div className="w-full lg:w-4/12 px-8 font-mondium text-text-small pt-[60px] lg:pt-[300px] xl:pt-[430px] pr-10">
        <div className="pb-5 font-semibold text-[16px]">HOANG DANH TUAN</div>
        <div className="pb-5 font-thin text-[14px]">
          Web Developer, Salesforce Developer.
        </div>
        <div className="pb-5 font-thin text-[14px]">
          Creating beautiful and engaging digital experiences in Da Nang,
          Vietnam.
        </div>
      </div>
      <div className="w-full lg:w-7/12 h-full px-8">
        <div className="font-grand uppercase text-[70px] lg:text-[80px] xl:text-[130px] pt-12 lg:pt-56 font-extralight leading-tight lg:leading-none flex flex-col">
          <Link href="/work">
            <a className="">work</a>
          </Link>
          <Link href="/about">
            <a className="">about</a>
          </Link>
          <Link href="/contact">
            <a className="">contact</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
