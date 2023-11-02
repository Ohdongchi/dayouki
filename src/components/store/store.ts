import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
// import createSagaMiddleware from "redux-saga";

import rootReducer from "./reducer/RootReducer";
// import rootSaga from "./saga/Root.saga";

// const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    if (process.env.NODE_ENV === "production")
      return getDefaultMiddleware({ serializableCheck: false });
    return getDefaultMiddleware({ serializableCheck: false }).concat(logger);
    //   .concat(sagaMiddleware);
  },
});

// sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
