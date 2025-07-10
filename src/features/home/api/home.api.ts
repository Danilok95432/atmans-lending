import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { MAIN_PROD_URL, ReducerPath } from 'src/shared/helpers/consts'

export const homeApi = createApi({
	reducerPath: ReducerPath.Home,
	tagTypes: ['Home'],
	baseQuery: fetchBaseQuery({
		baseUrl: MAIN_PROD_URL,
	}),
	endpoints: (build) => ({
		getHomePosters: build.query<null, null>({
			query: () => ({
				url: `home/posters`,
			}),
		}),
	}),
})

export const { useGetHomePostersQuery } = homeApi
