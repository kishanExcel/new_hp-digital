import { configureStore } from '@reduxjs/toolkit';
import widgetSlice from './slices/widgetSlice';
import webChatReducer, { webChatSlice } from './slices/webChatSlice';
import webChatSettingsSlice from "./slices/webChatSettingSlice"

const store = configureStore({
    reducer: {
        widget: widgetSlice,
        webChat: webChatReducer,
        webChats: webChatSettingsSlice
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;