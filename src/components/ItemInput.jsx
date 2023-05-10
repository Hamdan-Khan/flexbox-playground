import React from "react";
import useStore from "../../store/store";

const ItemInput = () => {
  const selectedItem = useStore((state) => state.selectedItem);
  const order = useStore((state) => state.order);
  const setOrder = useStore((state) => state.setOrder);
  const grow = useStore((state) => state.grow);
  const setGrow = useStore((state) => state.setGrow);
  const shrink = useStore((state) => state.shrink);
  const setShrink = useStore((state) => state.setShrink);
  const basis = useStore((state) => state.basis);
  const setBasis = useStore((state) => state.setBasis);
  const alignSelf = useStore((state) => state.alignSelf);
  const setAlignSelf = useStore((state) => state.setAlignSelf);
  const edited = useStore((state) => state.edited);
  const setEdited = useStore((state) => state.setEdited);

  const handleOrder = (e) => {
    const updatedObj = edited.find((obj) => obg.id === selectedItem);
    updatedObj.order = e.target.value;
  };
  return (
    <div className="flex flex-col p-4 gap-1">
      {selectedItem !== null ? (
        <>
          <h2 className="font-semibold text-lg">Order</h2>
          <input
            className="border border-[#9b9b9b] px-3 py-2 rounded-[7px]"
            type="number"
            value={edited}
            onChange={(e) => setEdited([e.target.value])}
          />
          <h2 className="font-semibold text-lg">Flex Grow</h2>
          <input
            className="border border-[#9b9b9b] px-3 py-2 rounded-[7px]"
            type="number"
            value={grow}
            onChange={(e) => setGrow(e.target.value)}
          />
          <h2 className="font-semibold text-lg">Flex Shrink</h2>
          <input
            className="border border-[#9b9b9b] px-3 py-2 rounded-[7px]"
            type="number"
            value={shrink}
            onChange={(e) => setShrink(e.target.value)}
          />
          <h2 className="font-semibold text-lg">Flex Basis</h2>
          <input
            className="border border-[#9b9b9b] px-3 py-2 rounded-[7px]"
            type="text"
            value={basis}
            onChange={(e) => setBasis(e.target.value)}
          />

          <h2 className="font-semibold text-lg">Align Self</h2>
          <select
            name="alignSelf"
            id="alignSelf"
            value={alignSelf}
            onChange={(e) => setAlignSelf(e.target.value)}
            onClick={(e) => setAlignSelf(e.target.value)}
          >
            <option value="auto">auto</option>
            <option value="flex-start">flex-start</option>
            <option value="flex-end">flex-end</option>
            <option value="center">center</option>
            <option value="stretch">stretch</option>
            <option value="baseline">baseline</option>
          </select>
        </>
      ) : (
        "SELECT AN ITEM TO EDIT"
      )}

      {/* order
  flex grow
  flex shrink
  flex basis
  align self */}
    </div>
  );
};

export default ItemInput;
