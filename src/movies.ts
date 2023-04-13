export interface Movie {
  _id: string;
  title: string;
  genre: { _id: string; name: string };
  rating: number;
  releaseYear: string;
  reviews: Review[];
  suggestions: Suggestion[];
}

export interface Review {
  reviewer: string;
  review: string;
}
export interface Suggestion {
  suggestion: string;
  suggestedBy: string;
}

export const movies: Array<Movie> = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    title: "Terminator",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    rating: 2.5,
    releaseYear: "2018",
    reviews: [{ review: "great", reviewer: "eddieabasi" }],
    suggestions: [],
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    title: "Die Hard",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    rating: 2.5,
    releaseYear: "2019",
    reviews: [{ review: "great", reviewer: "eddieabasi" }],
    suggestions: [],
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    title: "Get Out",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
    rating: 3.5,
    releaseYear: "2020",
    reviews: [{ review: "great", reviewer: "eddieabasi" }],
    suggestions: [],
  },
  {
    _id: "5b21ca3eeb7f6fbccd471819",
    title: "Trip to Italy",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
    rating: 3.5,
    releaseYear: "2017",
    reviews: [{ review: "great", reviewer: "eddieabasi" }],
    suggestions: [],
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181a",
    title: "Airplane",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
    rating: 3.5,
    releaseYear: "2018",
    reviews: [{ review: "great", reviewer: "eddieabasi" }],
    suggestions: [],
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181b",
    title: "Wedding Crashers",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
    rating: 3.5,
    releaseYear: "2001",
    reviews: [{ review: "great", reviewer: "eddieabasi" }],
    suggestions: [],
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181e",
    title: "Gone Girl",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
    rating: 4.5,
    releaseYear: "2019",
    reviews: [{ review: "great", reviewer: "eddieabasi" }],
    suggestions: [],
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181f",
    title: "The Sixth Sense",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
    rating: 3.5,
    releaseYear: "2000",
    reviews: [{ review: "great", reviewer: "eddieabasi" }],
    suggestions: [],
  },
  {
    _id: "5b21ca3eeb7f6fbccd471821",
    title: "The Avengers",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    rating: 3.5,
    releaseYear: "2019",
    reviews: [{ review: "great", reviewer: "eddieabasi" }],
    suggestions: [],
  },
];
