import { create } from "zustand";

const useStore = create((set) => ({
  // Input tabs
  tab: "first",
  setTab: (tab) => set((state) => ({ tab: tab })),

  // Container options
  flexItems: [0],
  setFlexItems: (item) => set((state) => ({ flexItems: item })),
  justifyContent: "flex-start",
  setJustifyContent: (item) => set((state) => ({ justifyContent: item })),
  alignItems: "flex-start",
  setAlignItems: (item) => set((state) => ({ alignItems: item })),
  flexWrap: "nowrap",
  setFlexWrap: (item) => set((state) => ({ flexWrap: item })),
  flexDirection: "row",
  setFlexDirection: (item) => set((state) => ({ flexDirection: item })),

  // Items options
  // selectedItem: null,
  // setSelectedItem: (item) => set((state) => ({ selectedItem: item })),
  // edited: [{ id: 0, order: 0, grow: 0 }],
  // setEdited: (items) => set((state) => ({ edited: items })),
  // order: 0,
  // setOrder: (item) => set((state) => ({ order: item })),
  // grow: 0,
  // setGrow: (item) => set((state) => ({ grow: item })),
  // shrink: 0,
  // setShrink: (item) => set((state) => ({ shrink: item })),
  // basis: "auto",
  // setBasis: (item) => set((state) => ({ basis: item })),
  // alignSelf: 0,
  // setAlignSelf: (item) => set((state) => ({ alignSelf: item })),
}));

export default useStore;
