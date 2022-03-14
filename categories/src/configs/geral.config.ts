const { env } = process;

const geral = {
    environment: env.NODE_ENV || 'development',
};

export default { ...geral };
