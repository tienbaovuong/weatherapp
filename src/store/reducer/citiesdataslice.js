import { createSlice } from '@reduxjs/toolkit'

export const citiesDataSlice = createSlice({
    name: 'citiesData',
    initialState:{
        'vietnam':[
            {
                'city': 'Ha Noi',
                'country': 'Vietnam',
                'weather':[
                    {
                        "date": "16/08/2022",
                        "weather": "Sunny",
                        "temparature": "35"
                    },
                    {
                        "date": "17/08/2022",
                        "weather": "Rainy",
                        "temparature": "32"
                    },
                    {
                        "date": "18/08/2022",
                        "weather": "Cloudy",
                        "temparature": "33"
                    },
                    {
                        "date": "19/08/2022",
                        "weather": "Sunny",
                        "temparature": "36"
                    },
                    {
                        "date": "20/08/2022",
                        "weather": "Drought",
                        "temparature": "40"
                    }
                ]
            },
            {
                'city': 'Ho Chi Minh',
                'country': 'Vietnam',
                'weather':[
                    {
                        "date": "16/08/2022",
                        "weather": "Sunny",
                        "temparature": "35"
                    },
                    {
                        "date": "17/08/2022",
                        "weather": "Rainy",
                        "temparature": "32"
                    },
                    {
                        "date": "18/08/2022",
                        "weather": "Cloudy",
                        "temparature": "33"
                    },
                    {
                        "date": "19/08/2022",
                        "weather": "Sunny",
                        "temparature": "36"
                    },
                    {
                        "date": "20/08/2022",
                        "weather": "Drought",
                        "temparature": "40"
                    }
                ]
            },
            {
                'city': 'Da Nang',
                'country': 'Vietnam',
                'weather':[
                    {
                        "date": "16/08/2022",
                        "weather": "Sunny",
                        "temparature": "35"
                    },
                    {
                        "date": "17/08/2022",
                        "weather": "Rainy",
                        "temparature": "32"
                    },
                    {
                        "date": "18/08/2022",
                        "weather": "Cloudy",
                        "temparature": "33"
                    },
                    {
                        "date": "19/08/2022",
                        "weather": "Sunny",
                        "temparature": "36"
                    },
                    {
                        "date": "20/08/2022",
                        "weather": "Drought",
                        "temparature": "40"
                    }
                ]
            },
            {
                'city': 'Hai Phong',
                'country': 'Vietnam',
                'weather':[
                    {
                        "date": "16/08/2022",
                        "weather": "Sunny",
                        "temparature": "35"
                    },
                    {
                        "date": "17/08/2022",
                        "weather": "Rainy",
                        "temparature": "32"
                    },
                    {
                        "date": "18/08/2022",
                        "weather": "Cloudy",
                        "temparature": "33"
                    },
                    {
                        "date": "19/08/2022",
                        "weather": "Sunny",
                        "temparature": "36"
                    },
                    {
                        "date": "20/08/2022",
                        "weather": "Drought",
                        "temparature": "40"
                    }
                ]
            },
            {
                'city': 'Thanh Hoa',
                'country': 'Vietnam',
                'weather':[
                    {
                        "date": "16/08/2022",
                        "weather": "Sunny",
                        "temparature": "35"
                    },
                    {
                        "date": "17/08/2022",
                        "weather": "Rainy",
                        "temparature": "32"
                    },
                    {
                        "date": "18/08/2022",
                        "weather": "Cloudy",
                        "temparature": "33"
                    },
                    {
                        "date": "19/08/2022",
                        "weather": "Sunny",
                        "temparature": "36"
                    },
                    {
                        "date": "20/08/2022",
                        "weather": "Drought",
                        "temparature": "40"
                    }
                ]
            },
            {
                'city': 'Can Tho',
                'country': 'Vietnam',
                'weather':[
                    {
                        "date": "16/08/2022",
                        "weather": "Sunny",
                        "temparature": "35"
                    },
                    {
                        "date": "17/08/2022",
                        "weather": "Rainy",
                        "temparature": "32"
                    },
                    {
                        "date": "18/08/2022",
                        "weather": "Cloudy",
                        "temparature": "33"
                    },
                    {
                        "date": "19/08/2022",
                        "weather": "Sunny",
                        "temparature": "36"
                    },
                    {
                        "date": "20/08/2022",
                        "weather": "Drought",
                        "temparature": "40"
                    }
                ]
            }
        ],
        'global':[
            {
                'city': 'Ha Noi',
                'country': 'Vietnam',
                'weather':[
                    {
                        "date": "16/08/2022",
                        "weather": "Sunny",
                        "temparature": "35"
                    },
                    {
                        "date": "17/08/2022",
                        "weather": "Rainy",
                        "temparature": "32"
                    },
                    {
                        "date": "18/08/2022",
                        "weather": "Cloudy",
                        "temparature": "33"
                    },
                    {
                        "date": "19/08/2022",
                        "weather": "Sunny",
                        "temparature": "36"
                    },
                    {
                        "date": "20/08/2022",
                        "weather": "Drought",
                        "temparature": "40"
                    }
                ]
            }
        ]
    },
    reducers:{

    }
})

export default citiesDataSlice.reducer