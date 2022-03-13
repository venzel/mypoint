const { env } = process;

const geral = {
    environment: env.NODE_ENV || 'development',
    port: Number(env.SERVER_PORT) || 8082,
};

export default { ...geral };
