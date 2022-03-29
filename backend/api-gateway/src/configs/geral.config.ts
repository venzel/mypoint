const { env } = process;

const geral = {
    environment: env.NODE_ENV || 'development',
    port: Number(env.SERVER_PORT) || 8081,
};

export default { ...geral };
