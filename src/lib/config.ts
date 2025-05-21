const _config = {
    server: process.env.NEXT_PUBLIC_SERVER_URL || 'http://13.233.117.33:5000',
    nodeenv: process.env.NODE_ENV
};

export const config = Object.freeze(_config);