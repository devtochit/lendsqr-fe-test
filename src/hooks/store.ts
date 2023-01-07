import { configureStore } from '@reduxjs/toolkit'
import usersReducer from '../functions/sliceUsers'



export const store = configureStore({
  reducer: {
        users: usersReducer,
      },
      middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false,
    })
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

