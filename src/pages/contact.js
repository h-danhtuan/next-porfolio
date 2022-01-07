import Link from "next/link";

const Contact = () => {
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
            <Link href="/about">
              <a className="">About</a>
            </Link>
          </div>
          <div className="rotate-0 lg:-rotate-90 mr-4 lg:ml-3 lg:mr-0 mt-2 lg:mt-24 h-[2px] w-[40px] bg-[#EEE7E1]"></div>
          <div className="rotate-0 lg:-rotate-90 mr-4 lg:mr-0 lg:mt-64">
            &#169; 2022
          </div>
        </div>
      </div>
      <div className="w-full lg:w-5/12 px-8 pt-[60px] lg:pt-[100px] xl:pt-[240px] 2xl:pt-[140px] sm:pl-24 pr-10">
        <div className="pb-5 font-semibold text-[60px] lg:text-[100px] xl:text-[140px] 2xl:text-[200px] font-grand">
          Hello.
        </div>
        <div className="pb-5 font-thin text-[14px] font-mondium leading-[1em] mb-8">
          Just keeping this simple.
        </div>
        <div className="pb-5 font-thin text-[14px] font-mondium leading-[1em]">
          Email: camninh224@gmail.com
        </div>
        <div className="pb-5 font-thin text-[14px] font-mondium leading-[1em]">
          On the Internet: LinkedIn / Github
        </div>
      </div>
      <div className="w-full lg:w-6/12 h-full px-8">
        {/* <div className=" uppercase text-[40px] lg:text-[75px] xl:text-[100px] pt-12 lg:pt-72 xl:pt-64 2xl:pt- font-extralight leading-tight lg:leading-none flex flex-col">
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
        </div>*/}
      </div>
    </div>
  );
};

export default Contact;
