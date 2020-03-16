const API_ENDPOINT = "http://newsapi.org/v2/top-headlines?country=us";
const API_KEY = "4a611c6bf48c4b04a539faa5b8a90a1b";

const TopStories = `${API_ENDPOINT}&apiKey=${API_KEY}`;
const Business = `${API_ENDPOINT}&category=business&apiKey=${API_KEY}`;
const Entertainment = `${API_ENDPOINT}&category=entertainment&apiKey=${API_KEY}`;
const Health = `${API_ENDPOINT}&category=health&apiKey=${API_KEY}`;
const Science = `${API_ENDPOINT}&category=science&apiKey=${API_KEY}`;
const Sports = `${API_ENDPOINT}&category=sports&apiKey=${API_KEY}`;
const Technology = `${API_ENDPOINT}&category=technology&apiKey=${API_KEY}`;

export default {
    "Top Stories": TopStories,
    Business,
    Entertainment,
    Health,
    Science,
    Sports,
    Technology
}