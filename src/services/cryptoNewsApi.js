import {createApi ,fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoNewsHeadres =
    {
        'X-BingApis-SDK': 'true',
        'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
        'X-RapidAPI-Key': '85278098dcmsh8dad4f2849e2d28p12e9a3jsn695aa79cc0b7'
      }

      const baseUrl ='https://bing-news-search1.p.rapidapi.com'
      const createRequest =(url) =>({url , headers :cryptoNewsHeadres})
 
                          
export const cryptoNewsApi = createApi({
    reducerPath:'cryptoNewsApi',
    baseQuery: fetchBaseQuery({baseUrl }),
    endpoints:(builder) =>({
        getCryptoNews: builder.query({
            query:({newsCategory,count})=>createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),

        })
    })
})

export const {
    useGetCryptoNewsQuery,
}=  cryptoNewsApi 