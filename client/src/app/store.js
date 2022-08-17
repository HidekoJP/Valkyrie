import { configureStore } from '@reduxjs/toolkit';

import authReducer from '../features/auth/authSlice';
import guildsReducer from '../features/guilds/guildsSlice';
import friendsReducer from '../features/friends/friendsSlice';
import currentTabReducer from '../features/currentTab/currentTabSlice';
import conversationsReducer from '../features/conversations/conversationsSlice';

const store = configureStore({
    reducer: {
        auth: authReducer,
        guilds: guildsReducer,
        friends: friendsReducer,
        conversations: conversationsReducer,
        currentTab: currentTabReducer,
    }
});

export { store };