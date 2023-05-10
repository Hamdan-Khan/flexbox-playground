import React from "react";
import useStore from "../store/store";

const FlexCard = ({ index }) => {
  const setFlexItems = useStore((state) => state.setFlexItems);
  const flexItems = useStore((state) => state.flexItems);
  const filtered = flexItems.filter((item) => item !== index);

  // const setTab = useStore((state) => state.setTab);
  // const tab = useStore((state) => state.tab);
  // const setSelectedItem = useStore((state) => state.setSelectedItem);
  // const selectedItem = useStore((state) => state.selectedItem);
  // const order = useStore((state) => state.order);
  // const grow = useStore((state) => state.grow);
  // const shrink = useStore((state) => state.shrink);
  return (
    <div className="min-w-[150px] overflow-hidden min-h-[100px] bg-white shadow-lg m-1 duration-300 rounded-xl relative flex">
      <div className="absolute bg-green-500 w-[80px] h-[80px] rounded-[50%] top-[-30px] left-[-30px] flex items-center justify-center">
        <p className="mt-3 ml-1 p-3 text-white"> {index}</p>
      </div>

      {/* <h1
        className="absolute right-0 bg-green-500 text-white h-full cursor-pointer p-3 font-semibold select-none"
        onClick={() => {
          setSelectedItem(selectedItem === index ? null : index);
          setTab(
            (tab === "second") & (selectedItem !== null) ? "first" : "second"
          );
        }}
      >
        {tab === "first" ? (
          "Edit"
        ) : (tab === "second") & (selectedItem === index) ? (
          <span>&#10003;</span>
        ) : (
          "Edit"
        )}
      </h1> */}
      <button
        className="bg-red-400 select-none py-1 z-10 font-semibold text-white w-full mt-auto"
        onClick={() => {
          setFlexItems(filtered);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default FlexCard;
