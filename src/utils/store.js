import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import themeSlice from "./themeSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    theme: themeSlice,
    search: searchSlice,
  },
});

export default store;
