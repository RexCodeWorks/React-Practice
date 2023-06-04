import axios from "axios";

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID LCwWxQ9YYiTyn1PlwnPFXiImW9_q6t0e0sqgmGoKe3U',
        },
        params: {
            query: term,
        }
    });

    return response.data.results;
}

export default searchImages;