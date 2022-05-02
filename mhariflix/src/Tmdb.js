const API_KEY ='f5bf4cb772d29cb48b3e9f569c430ce9'
const API_BASE = 'https://api.themoviedb.org/3'


const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json
}

export default {
    getHomeList: async() => {
        return  [
            {
                slug: 'action',
                title: 'Action',
                items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`),
            },
            {
                slug: 'Comedy',
                title: 'Comedy',
                items: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'Science fiction',
                title: 'Science fiction',
                items: await basicFetch(`/discover/movie?with_genres=878&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'Heroes',
                title: 'Super hero',
                items: await basicFetch(`/discover/movie?with_genres=14&language=pt-BR&api_key=${API_KEY}`)
            },
        ]
    }
}