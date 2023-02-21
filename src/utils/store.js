import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import themeSlice from "./themeSlice";
import resultsSlice from "./resultsSlice";
import chatSlice from "./chatSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    theme: themeSlice,
    search: searchSlice,
    results: resultsSlice,
    chat: chatSlice,
  },
});

export default store;
