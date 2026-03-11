export const OMDB_API_KEY = "5d0cd3b4";

export const GENRES = [
  "Action",
  "Comedy",
  "Thriller",
  "Drama",
  "Adventure",
  "Romance",
  "Crime",
  "Science Fiction",
  "Fantasy",
];

export const ACTORS = [
  "Tom Hanks",
  "Leonardo DiCaprio",
  "Brad Pitt",
  "Matt Damon",
  "Tom Cruise",
  "Zoe Saldana",
  "Bradley Cooper",
];

export const BLOG_POSTS = [
  {
    id: 1,
    category: "MOVIE REVIEWS",
    title: "The 20 Biggest Upcoming Movies of 2022",
    description: "After the lull of the past few years, cinemas are making a return this year, due in no small part to the massive list of upcoming movies in 2022. Whether it's an action-packed adventure, an intriguing tale of science fiction, or the next big Marvel movie, there are tons of new movies in 2022 to choose from.",
    image: "/images/blog_1.png",
    date: "APRIL 9, 2022",
    comments: 482
  },
  {
    id: 2,
    category: "MOVIE REVIEWS",
    title: "The Impact of ‘Spider-Man: No Way Home’ on the MCU",
    description: "Ever since 'Spider-Man: No Way Home premiered in cinemas in December of 2021, the movie has been dominating the box office and causing a serious resurgence of Marvel fandom. Today, I’m giving my opinion on the overall movie and seeing how it stacks up to other Marvel movies.",
    image: "/images/blog_2.png",
    date: "FEBRUARY 2, 2022",
    comments: 921
  },
  {
    id: 3,
    category: "MOVIE REVIEWS",
    title: "‘Free Guy’ is a Must-See Movie for Every Gamer",
    description: "Generally speaking, movies based on video games are rarely worth checking out. From the massive 1993 flop 'Super Mario Bros' to modern disappointments like 2016’s 'Assassin’s Creed', most video game movies are critical and box office failures. Learn how 'Free Guy' breaks the mold of mediocrity.",
    image: "/images/blog_3.png",
    date: "DECEMBER 21, 2021",
    comments: 154
  },
  {
    id: 4,
    category: "MOVIE REVIEWS",
    title: "Top 10 Date Night Movies",
    description: "Watching a movie and grabbing dinner is an all-time classic date night move, but it can be hard to find the right flick to appease both people. If you’re preparing for a big date or just can’t figure out the right flick for you and your beloved to watch, we’ve crafted a list.",
    image: "/images/blog_4.png",
    date: "NOVEMBER 13, 2021",
    comments: 327
  },
  {
    id: 5,
    category: "MOVIE LISTS",
    title: "10 Thrilling Heist Movies You Need To Watch",
    description: "There’s nothing quite like a good heist movie to get the blood pumping and the synapses firing, as this exciting sub-genre combines explosive action with enticing setups. Now, with dozens of awesome heist movies to pick from, it can be hard to pick which one to watch.",
    image: "/images/blog_5.png",
    date: "OCTOBER 25, 2021",
    comments: 89
  }
];

export interface QuestionOption {
    id: string;
    label: string;
    icon?: string;
}

export interface Question {
    id: number;
    text: string;
    type: "emoji" | "single" | "multiple";
    options: QuestionOption[];
    videoUrl: string;
}

export const QUESTION_DATA: Question[] = [
    {
        id: 1,
        text: "How are you today?",
        type: "emoji",
        videoUrl: "https://www.youtube.com/embed/HihakYi5M2I?si=bTNNc2vxl7Vhgrzc",
        options: [
            { id: "happy", label: "Happy", icon: "fa-face-smile" },
            { id: "neutral", label: "Neutral", icon: "fa-face-meh" },
            { id: "sad", label: "Sad", icon: "fa-face-frown-open" }
        ]
    },
    {
        id: 2,
        text: "What comes closest to your occasion?",
        type: "single",
        videoUrl: "https://www.youtube.com/embed/HihakYi5M2I?si=bTNNc2vxl7Vhgrzc",
        options: [
            { id: "justWatching", label: "Just Watching Movie by Myself" },
            { id: "movieDate", label: "Movie Date" },
            { id: "dateNight", label: "Date Night With Boyfriend or Girlfriend" },
            { id: "movieNight", label: "Movie Night With Friends" },
            { id: "familyMovieNight", label: "Watching Movie With Family" }
        ]
    },
    {
        id: 3,
        text: "Please choose any genre you’re interested in.",
        type: "multiple",
        videoUrl: "https://www.youtube.com/embed/vYL2wfmF3OQ?si=Pss_-qLH8pnCiZO-",
        options: [
            { id: "Action", label: "Action" },
            { id: "Mystery", label: "Mystery" },
            { id: "Comedy", label: "Comedy" },
            { id: "Biography", label: "Biography" },
            { id: "Drama", label: "Drama" },
            { id: "History", label: "History" },
            { id: "Adventure", label: "Adventure" },
            { id: "Animation", label: "Animation" },
            { id: "Thriller", label: "Thriller" },
            { id: "Crime", label: "Crime" },
            { id: "Sport", label: "Sport" },
            { id: "Romance", label: "Romance" },
            { id: "Disaster", label: "Disaster" },
            { id: "Science Fiction", label: "Science Fiction" },
            { id: "Western", label: "Western" },
            { id: "Fantasy", label: "Fantasy" },
            { id: "War", label: "War" },
            { id: "Family", label: "Family" },
            { id: "Horrer", label: "Horrer" }
        ]
    },
    {
        id: 4,
        text: "Is the age-appropriateness rating of the movie important to you?",
        type: "single",
        videoUrl: "https://www.youtube.com/embed/HihakYi5M2I?si=bTNNc2vxl7Vhgrzc",
        options: [
            { id: "Yes", label: "Yes, I would like to choose the ratings that I’m okay with." },
            { id: "No", label: "No, it doesn’t matter." }
        ]
    },
    {
        id: 5,
        text: "How Old would you like the movie to be?",
        type: "single",
        videoUrl: "https://www.youtube.com/embed/HihakYi5M2I?si=bTNNc2vxl7Vhgrzc",
        options: [
            { id: "Doesn't Matter", label: "Doesn't Matter" },
            { id: "Published in Last 3 Years", label: "Published in Last 3 Years" },
            { id: "Published in Last 5 Years", label: "Published in Last 5 Years" },
            { id: "Published in Last 10 Years", label: "Published in Last 10 Years" },
            { id: "Published in Last 15 Years", label: "Published in Last 15 Years" }
        ]
    },
    {
        id: 6,
        text: "Please select any other category you’re interested in.",
        type: "single",
        videoUrl: "https://www.youtube.com/embed/HihakYi5M2I?si=bTNNc2vxl7Vhgrzc",
        options: [
            { id: "none", label: "I don’t have a preference." },
            { id: "trueStory", label: "Movies based on a true story" },
            { id: "lifeChanging", label: "Movies that may change the way you look at life" },
            { id: "nyc", label: "Movies set in New York City" },
            { id: "spy", label: "Spy Movies and Cop Movies" },
            { id: "space", label: "Space Movies" },
            { id: "wedding", label: "Wedding Movies" },
            { id: "heist", label: "Heist Movies" },
            { id: "book", label: "Movies based on a book" },
            { id: "racing", label: "Racing Movies" },
            { id: "girlPower", label: "Girl Power Movies" }
        ]
    }
];
