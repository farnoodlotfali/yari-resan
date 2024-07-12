import { PAGES_URL } from "@/constants/pagesUrl";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

const newTab = (id) => ({
  id: id,
  url: PAGES_URL.Home.home,
  title: "جستجو بیمه‌شده",
});

const TABS = [newTab(1)];
const initialState = {
  activeTab: TABS[0],
  _hasHydrated: false,
  tabs: TABS,
};

export const useTabsStore = create()(
  persist(
    immer((set, get) => ({
      ...initialState,

      addEmptyTab: () =>
        set((state) => {
          state.tabs = [
            ...state.tabs,
            newTab(
              state.tabs.length === 0
                ? 1
                : state.tabs[state.tabs.length - 1].id + 1
            ),
          ];
        }),
      handleRemoveTab: (id) =>
        set((state) => {
          state.tabs = state.tabs.filter((tab) => tab.id !== id);
        }),
      setActiveTab: (tab) =>
        set((state) => {
          state.activeTab = tab;
        }),
      handleActiveTab: (data) =>
        set((state) => {
          let updated = null;
          state.tabs = state.tabs.map((tab) => {
            if (tab.id === state.activeTab.id) {
              updated = { ...tab, ...data };
              return updated;
            }
            return tab;
          });

          state.activeTab = updated;
        }),

      handleAddTab: (tab, router) =>
        set((state) => {
          const newTab = {
            ...tab,
            id: state.tabs[state.tabs.length - 1].id + 1,
          };

          state.activeTab = newTab;
          state.tabs = [...state.tabs, newTab];
          router.push(newTab.url);
        }),

      reset: () => {
        set(() => initialState);
      },
    })),
    {
      name: "tabs",
    }
  )
);
useTabsStore.setState(() => {
  return { _hasHydrated: true };
});
