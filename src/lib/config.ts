const _config = {
    server: process.env.NEXT_PUBLIC_SERVER_URL,
    nodeenv: process.env.NEXT_PUBLIC_NODE_ENV,
    loader:process.env.NEXT_PUBLIC_LOADER_URL
};

export const config = Object.freeze(_config);