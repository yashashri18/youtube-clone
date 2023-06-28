export const BTN_ITEMS = ["All", "News", "Cooking", "Entertainment", "Sports", "Art", "Movies", "Songs","All", "News", "Cooking"]

const  YOUTUBE_API_KEY = ""

export const YOUTUBE_FETCH_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key="+YOUTUBE_API_KEY 

export const YOUTUBE_SEARCH_SUGGESTIONS_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const MAX_MSG_COUNT = 15 ;

export const commentsData = [
    {
        name: "Yashashri Bongulwar",
        text: "Lorem ipsum dolar sit ammet ",
        replies :[
            {
                name: "Yashashri Bongulwar",
                text: "Lorem ipsum dolar sit ammet ",
                replies :[]
            },
            {
                name: "Yashashri Bongulwar",
                text: "Lorem ipsum dolar sit ammet ",
                replies :[
                    {
                        name: "Yashashri Bongulwar",
                        text: "Lorem ipsum dolar sit ammet ",
                        replies :[]
                    },
                    {
                        name: "Yashashri Bongulwar ",
                        text: "Lorem ipsum dolar sit ammet ",
                        replies :[]
                    },
                    {
                        name: "Yashashri Bongulwar",
                        text: "Lorem ipsum dolar sit ammet ",
                        replies :[
                            {
                                name: "Yashashri Bongulwar ",
                                text: "Lorem ipsum dolar sit ammet ",
                                replies :[]
                            },
                            {
                                name: "Yashashri Bongulwar ",
                                text: "Lorem ipsum dolar sit ammet ",
                                replies :[]
                            },
                            {
                                name: "Yashashri Bongulwar ",
                                text: "Lorem ipsum dolar sit ammet ",
                                replies :[]
                            },
                        ]
                    },
                ]
            },
            {
                name: "Yashashri Bongulwar",
                text: "Lorem ipsum dolar sit ammet ",
                replies :[
                    {
                        name: "Yashashri Bongulwar" ,
                        text: "Lorem ipsum dolar sit ammet ",
                        replies :[]
                    },
                ]
            },
        ]
    },
    {
        name: "Yashashri Bongulwar",
        text: "Lorem ipsum dolar sit ammet ",
        replies :[]
    },
    {
        name: "Yashashri Bongulwar",
        text: "Lorem ipsum dolar sit ammet ",
        replies :[]
    },
    {
        name: "Yashashri Bongulwar",
        text: "Lorem ipsum dolar sit ammet ",
        replies :[]
    },
]




