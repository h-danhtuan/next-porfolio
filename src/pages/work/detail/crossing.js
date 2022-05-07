import Link from "next/link";

const Crossing = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-[#1a1919] text-[12px] text-[#EEE7E1] min-h-screen">
      <div className="w-full lg:w-1/12 px-8 font-mondium">
        <div className="flex flex-row lg:flex-col mt-8 lg:mt-4">
          <div className="rotate-0 lg:-rotate-90 mr-4 lg:mr-0 lg:mt-20 desk:mt-24 z-50">
            <Link href="/work">
              <a className="cool-link">Work</a>
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

      <div className="w-full px-8 font-mondium pt-[50px] lg:pt-[65px] xl:pt-[70px] 2xl:pt-[80px] desk:pt-[105px] lg:ml-12 lg:pr-12">
        <div className="flex flex-col lg:flex-row justify-between items-center text-[#EEE7E1]">
          <div className="items-start w-full">
            <div className="text-[40px] lg:text-[60px] xl:text-[75px] 2xl:text-[90px] desk:text-[120px] font-fugi font-medium">
              Crossing
            </div>
            <div className="font-mondium text-[#eee7e1] pb-5 lg:-mt-4">
              / 2020
            </div>
            <div className="font-fugi text-[20px] lg:text-[28px] xl:text-[36px]">
              Design and develop the landing page.
            </div>
          </div>
        </div>

        <div className="items-start">
          <div className="pb-5 font-thin text-[14px] text-[#EEE7E1] lg:w-3/4 2xl:w-3/5">
            With my colleague (Ha Nam) we build this landing page from zero with
            just GastbyJs. I gained skills when working with Figma and a bit
            design thing with Photoshop, Illustrator.
          </div>

          <div className="mt-4">
            <div className="uppercase font-mondium text-[16px] lg:text-[18px] xl:text-[16px] text-[#EEE7E1] border-b border-[#EEE7E1] w-fit mb-2">
              Role
            </div>
            <div className="font-mondium text-[14px] text-[#EEE7E1]">
              - Design and Front-end Developer
            </div>
          </div>
          <div className="mt-8">
            <div className="uppercase font-mondium text-[16px] lg:text-[18px] xl:text-[16px] text-[#EEE7E1] border-b border-[#EEE7E1] w-fit mb-2">
              Responsibilities
            </div>
            <div className="font-mondium text-[14px] text-[#EEE7E1]">
              - Design and develop a landing page.
            </div>
            <div className="mt-12 mb-8">
              <div className="font-fugi text-[20px] xl:text-[30px] mb-4">
                Check it out.
              </div>
              <Link href="https://pasonacrossing.vn/">
                <a
                  target="_blank"
                  className="bg-[#333] text-[#EEE7E1] font-bold py-2 px-4 rounded font-fugi text-[20px] cool-btn w-fit"
                >
                  https://pasonacrossing.vn/
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crossing;
