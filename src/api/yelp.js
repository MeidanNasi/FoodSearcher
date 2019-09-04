import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses/',
    headers: {
        Authorization: 'Bearer ahAF8599Df8WJJQ6vE3aMBbdi9s2q3Dl8A_rEAJignIeAABGTQ--8L4lau4r3u-MgSqGLlVK33rPvaDhTazdfUCVO6vRW_iQL9VMQIfv38c-nIm0hGQpfPgT2T9tXXYx'
    }
});

//yelp.get('/search')