import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID UMDJ9387XJV-RG3JRTvb-UGWKLy5n0OKRRMb6cwemWA'
    }
});