import dotenv from 'dotenv';
dotenv.config();

const baseUrls:any = {
    local: "http://localhost:8080",
    test: "http://localhost:8080",
    dev: "",
    qa: "",
    production :"",
    load:"",
}

const env:any = process.env.NODE_ENV || 'dev';

export const config = {
    BASE_URL: baseUrls[env],
    API_PREFIX: '/api/v1',
}

 
