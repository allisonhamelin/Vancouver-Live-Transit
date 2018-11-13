import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.translink.ca/rttiapi/v1',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
    },
    params: {
        apiKey: '4lIStDLCCUf2e7agXStz'
    },
});