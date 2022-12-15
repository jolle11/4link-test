// import { configureStore } from "@reduxjs/toolkit";

// import { apiSlice } from "../features/activities/activityApiSlice";
// import activityReducer from "../features/activities/activitySlice";

// export const store = configureStore({
// 	reducer: {
// 		activity: activityReducer,
// 		[apiSlice.reducerPath]: apiSlice.reducer,
// 	},
// 	middleware: (getDefaultMiddleware) => {
// 		return getDefaultMiddleware().concat(apiSlice.middleware);
// 	},
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
