const { env } = process;

const rabbit = {
    user: env.RABBITMQ_USER || 'admin',
    password: env.RABBITMQ_PASSWORD || '123',
    url: env.RABBITMQ_URL || 'localhost:5672/product-service',
};

export default { ...rabbit };
