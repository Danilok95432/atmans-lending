import { configureStore } from '@reduxjs/toolkit'
import { homeApi } from 'src/features/home/api/home.api'

export const store = configureStore({
	reducer: {
		[homeApi.reducerPath]: homeApi.reducer,
	},
	devTools: true,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware({}).concat(homeApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
