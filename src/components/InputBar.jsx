import React from "react";
import useStore from "../store/store";
import ContainerInput from "./ContainerInput";

const InputBar = () => {
  const tab = useStore((state) => state.tab);
  const setTab = useStore((state) => state.setTab);
  return (
    <div className="w-[30%] z-20">
      <div className="py-2">
        <h2 className="text-xl font-semibold underline text-center">
          Flex Styling Options
        </h2>
        {/* <a
          className={`tab w-[50%] tab-bordered text-lg font-medium ${
            tab === "first" ? "tab-active" : ""
          }`}
          onClick={() => setTab("first")}
        >
          Flex Options
        </a>
        <a
          className={`tab w-[50%] tab-bordered text-lg font-medium ${
            tab === "second" ? "tab-active" : ""
          }`}
          onClick={() => setTab("second")}
        >
          Item Options
        </a> */}
      </div>
      {tab === "first" && <ContainerInput />}
      {/* {tab === "second" && <ItemInput />} */}
    </div>
  );
};

export default InputBar;
