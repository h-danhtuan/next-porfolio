import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-[#EEE7E1] text-[12px]">
      <div className="w-full lg:w-1/12 px-8 font-mondium">
        <div className="flex flex-row lg:flex-col mt-8 lg:mt-4">
          <div className="rotate-0 lg:-rotate-90 mr-4 lg:mr-0 lg:mt-20">
            <Link href="https://linkedin.com/in/tuan-hoang-danh-26711471">
              <a target="_blank" className="devil-link">
                LinkedIn
              </a>
            </Link>
          </div>
          <div className="rotate-0 lg:-rotate-90 mr-4 lg:mr-0 lg:mt-16">
            <Link href="https://github.com/h-danhtuan">
              <a target="_blank" className="devil-link">
                Github
              </a>
            </Link>
          </div>
          <div className="rotate-0 lg:-rotate-90 mr-4 lg:mr-0 mt-2 lg:mt-24 h-[2px] w-[40px] bg-[#1a1919] lg:-ml-2 xl:ml-1 2xl:ml-3 desk:ml-7"></div>
          <div className="rotate-0 lg:-rotate-90 mr-4 lg:mr-0 lg:mt-48 xl:mt-72">
            &#169; 2022
          </div>
        </div>
      </div>
      <div className="w-full lg:w-4/12 px-8 font-mondium text-text-small pt-[60px] lg:pt-[300px] xl:pt-[430px] pr-10">
        <div className="pb-5 font-semibold text-[16px]">HOANG DANH TUAN</div>
        <div className="pb-5 font-thin text-[14px]">
          Frontend Developer - Salesforce Developer.
        </div>
        <div className="pb-5 font-thin text-[14px]">
          Creating beautiful and engaging digital experiences in Da Nang,
          Vietnam and in Awaji, Japan.
        </div>
      </div>
      <div className="w-full lg:w-7/12 h-full px-8">
        <div className="font-fugi uppercase text-[50px] lg:text-[80px] xl:text-[100px] 2xl:text-[120px] pt-12 lg:pt-56 xl:pt-72 2xl:pt-56 font-extralight leading-tight lg:leading-none flex flex-col">
          <Link href="/work">
            <a className="w-fit">
              <span className="relative hover:animate-[wiggle_1s_infinite_alternate_ease-in-out] inline-block">
                work
              </span>
            </a>
          </Link>
          <Link href="/about">
            <a className="w-fit">
              <span className="relative hover:animate-[wiggle_1s_infinite_alternate_ease-in-out] inline-block">
                about
              </span>
            </a>
          </Link>
          <Link href="/contact">
            <a className="w-fit">
              <span className="relative hover:animate-[wiggle_1s_infinite_alternate_ease-in-out] inline-block">
                contact
              </span>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
