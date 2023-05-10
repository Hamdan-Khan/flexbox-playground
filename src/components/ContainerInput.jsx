import React from "react";
import useStore from "../store/store";

const ContainerInput = () => {
  const flexItems = useStore((state) => state.flexItems);
  const setFlexItems = useStore((state) => state.setFlexItems);
  const setJustifyContent = useStore((state) => state.setJustifyContent);
  const justifyContent = useStore((state) => state.justifyContent);
  const setAlignItems = useStore((state) => state.setAlignItems);
  const alignItems = useStore((state) => state.alignItems);
  const setFlexWrap = useStore((state) => state.setFlexWrap);
  const flexWrap = useStore((state) => state.flexWrap);
  const setFlexDirection = useStore((state) => state.setFlexDirection);
  const flexDirection = useStore((state) => state.flexDirection);
  return (
    <div className="flex flex-col p-4 gap-1">
      {/* JustifyContent */}
      <h2 className="font-semibold text-lg">Justify Content</h2>
      <select
        name="justifyContent"
        id="justifyContent"
        value={justifyContent}
        onChange={(e) => setJustifyContent(e.target.value)}
        onClick={(e) => setJustifyContent(e.target.value)}
      >
        <option value="flex-start">flex-start</option>
        <option value="flex-end">flex-end</option>
        <option value="center">center</option>
        <option value="space-between">space-between</option>
        <option value="space-around">space-around</option>
        <option value="space-evenly">space-evenly</option>
      </select>
      {/* AlignItems */}

      <h2 className="font-semibold text-lg">Align Items</h2>
      <select
        name="alignItems"
        id="alignItems"
        value={alignItems}
        onChange={(e) => setAlignItems(e.target.value)}
        onClick={(e) => setAlignItems(e.target.value)}
      >
        <option value="normal">normal</option>
        <option value="stretch">stretch</option>
        <option value="center">center</option>
        <option value="flex-start">flex-start</option>
        <option value="flex-end">flex-end</option>
        <option value="baseline">baseline</option>
      </select>
      {/* FlexDirection */}

      <h2 className="font-semibold text-lg">Flex Direction</h2>
      <select
        name="flexDirection"
        id="flexDirection"
        value={flexDirection}
        onChange={(e) => setFlexDirection(e.target.value)}
        onClick={(e) => setFlexDirection(e.target.value)}
      >
        <option value="row">row</option>
        <option value="column">column</option>
        <option value="row-reverse">row-reverse</option>
        <option value="column-reverse">column-reverse</option>
      </select>
      {/* FlexWrap */}

      <h2 className="font-semibold text-lg">Flex Wrap</h2>
      <select
        name="flexWrap"
        id="flexWrap"
        value={flexWrap}
        onChange={(e) => setFlexWrap(e.target.value)}
        onClick={(e) => setFlexWrap(e.target.value)}
      >
        <option value="nowrap">nowrap</option>
        <option value="wrap">wrap</option>
      </select>
      <button
        className="bg-green-500 mt-3 rounded-2xl text-lg font-semibold text-white py-1 px-2"
        onClick={() => {
          setFlexItems(
            flexItems.length > 0 ? [...flexItems, flexItems.at(-1) + 1] : [0]
          );
          console.log(flexItems);
        }}
      >
        Add Flex Item
      </button>
    </div>
  );
};

export default ContainerInput;
