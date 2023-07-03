export const BTN_ITEMS = ["All", "News", "Cooking", "Entertainment", "Sports", "Art", "Movies", "Songs","All", "News", "Cooking"]

//yashashri's api key
//export const  YOUTUBE_API_KEY = "AIzaSyCTYwJ5hQvgu59DAwYrHJfPvhVCIBQjeHo"
//aryan's api keey
export const  YOUTUBE_API_KEY = "AIzaSyDWPq_w0_uVejy_MPuXReLG7VXXY4NuZpM"


export const YOUTUBE_FETCH_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key="+YOUTUBE_API_KEY 

export const YOUTUBE_SEARCH_SUGGESTIONS_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_KEYWORD_SEARCH_API = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q="

export const YOUTUBE_GET_CATEGORIES_API = "https://youtube.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=US&key="+YOUTUBE_API_KEY

export const YOUTUBE_GET_CATEGORIES_RESULTS_API = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q="


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




