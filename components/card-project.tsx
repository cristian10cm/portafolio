import Button from "@/components/button";
import ButtonP from "@/utils/buttonPurple";
import React from "react";
type props = {
  data: {
    title: string;
    text: string;
    img: string;
    classN: string[];
    view?: string;
    front?: string;
    back?: string;
    type: string;
  };
};
const CardProject = ({ data }: props) => {
  return (
    <div
      className={`w-80 md:w-100 bg-gray-400/10 rounded-3xl h-full flex flex-col justify-items-start  overflow-hidden ${data.classN} hover:shadow-xs shadow-indigo-800/70 `}
    >
      <div className="w-full h-50 overflow-hidden">
        <img className="w-full " src={data.img} alt={data.title} />
      </div>
      <div className="p-4 space-y-2">
        <p className=" text-pretty font-bold text-lg text-white">
          {data.title}
        </p>{" "}
        <p className="tracking-tighter text-[14px] leading-snug text-white">
          {data.text}
        </p>
        <div className="flex gap-2">
          {data.classN.map((i, index) => {
            return (
              <p
                key={index}
                className="pt-0 pb-0 pl-1 pr-1 text-[11px] border-1 text-gray-400 rounded-sm border-purple-600"
              >
                {i}
              </p>
            );
          })}
        </div>
        <div className="flex justify-between self-end ">
          {!data.view && !data.front && !data.back ? (
            <div>
              {" "}
              <p className="text-orange-400 text-sm">
                {" "}
                Respositorio Privado
              </p>{" "}
            </div>
          ) : (
            <div className="self-end botton-0 space-x-2">
              {data.view && (
                <button
                  className={`bg-transparent text-white hover:bg-gray-500 border-white   border-1 text-black font-medium text-black pt-2 pb-2 pl-4 pr-4 rounded-2xl  cursor-pointer`}
                >
                  <a target="_blank" href={data.view}>
                    Ver sitio
                  </a>
                </button>
              )}
              {data.front && (
                <Button bgT={"p"} text="Front-End" link={data.front}></Button>
              )}
              {data.back && (
                <ButtonP text="Back-End" link={data.back}></ButtonP>
              )}
            </div>
          )}
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default CardProject;
