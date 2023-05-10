import React from "react";
import "./index.css";
import FlexCard from "./components/FlexCard";
import InputBar from "./components/InputBar";
import useStore from "./store/store";
import doomer from "./assets/doomerIcon.png";

const PlayGround = () => {
  const flexItems = useStore((state) => state.flexItems);
  const justifyContent = useStore((state) => state.justifyContent);
  const alignItems = useStore((state) => state.alignItems);
  const flexWrap = useStore((state) => state.flexWrap);
  const flexDirection = useStore((state) => state.flexDirection);
  return (
    <>
      <nav className="flex flex-row justify-between items-center px-4 min-h-[50px] max-h-[70px] h-[8vh]">
        <h1 className="text-3xl font-bold">FLEXBOX PLAYGROUND</h1>
        <div className="flex items-center gap-2">
          <a
            href="https://hamdan-k.me"
            className="border-2 border-zinc-600 rounded-[50%] px-1 pt-1 overflow-hidden"
            title="My Website"
          >
            <img
              src={doomer}
              alt="my_website"
              className="w-[40px] cursor-pointer"
            />
          </a>
          <a
            href="https://github.com/Hamdan-Khan/flexbox-playground"
            target="_blank"
            className="bg-black px-2 py-1 rounded-md text-white"
          >
            View Github Repositry
          </a>
        </div>
      </nav>
      <div className="min-h-auto border-y flex min-w-[1000px] border-zinc-400 h-[90vh] min-h-[630px]">
        {/* <div className="bg-zinc-300 absolute flex justify-center items-center h-screen w-screen sm:hidden z-50 top-0 left-0 overflow-hidden">
          <h1>Use desktop for best experience.</h1>
        </div> */}
        <InputBar />
        <div className="border-l bg-zinc-300 overflow-auto flex-container-section border-zinc-400 w-[70%]">
          <div
            className="flex flex-col h-max p-2 duration-300 "
            style={{
              justifyContent: justifyContent,
              flexWrap: flexWrap,
              flexDirection: flexDirection,
              alignItems: alignItems,
            }}
          >
            {flexItems.map((i) => {
              return <FlexCard index={i} key={i} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default PlayGround;
