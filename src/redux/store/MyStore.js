import { combineReducers, configureStore } from "@reduxjs/toolkit"; // For combining reducers and configuring the Redux store
import UserReducer from "../slice/UserSlice"; // Importing user reducer from the slice
import AsyncStorage from "@react-native-async-storage/async-storage"; // For persisting data in AsyncStorage
import { persistReducer, persistStore } from "redux-persist"; // To create a persisted reducer and store
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry"; // Unused import; you can remove this if not needed

// Combining all reducers into one root reducer
const rootReducer = combineReducers({
    users: UserReducer // Mapping the users state to UserReducer
});

// Configuration for persisting the store in AsyncStorage
const persisteConfig = {
    key: 'root', // The key for the persisted data
    storage: AsyncStorage // Specifying AsyncStorage as the storage mechanism
};

// Wrapping the root reducer with persistReducer to enable persistence
const persistedReducer = persistReducer(persisteConfig, rootReducer);

// Configuring the Redux store with the persisted reducer
const store = configureStore({
    reducer: persistedReducer, // Setting the persisted reducer as the root reducer
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false // Disabling the serializable check for middleware
        }),
});

// Creating a persisted store to enable rehydration of the state
const persistedStore = persistStore(store);

// Exporting the store and persisted store to use in the application
export { store, persistedStore };
