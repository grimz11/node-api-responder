import { responseTransformer } from "./response-transformer";
import { expressAdapter } from "./adapters/express";
import { fastifyAdapter } from "./adapters/fastify";

export { IResponse } from "./response-transformer";

export const responseHandlers = {
  express: expressAdapter,
  fastify: fastifyAdapter,
};

export const responseTransformerMiddleware = responseTransformer;
