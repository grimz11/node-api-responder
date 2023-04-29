import { FastifyReply } from "fastify";
import { IResponse } from "../types/response.type";

export const fastifyAdapter = <T>(
  data: T,
  reply: FastifyReply
): IResponse<T> | void => {
  if (!reply.sent) {
    const { statusCode, message, ...rest } = data as IResponse<T>;

    if (statusCode) {
      reply.status(statusCode);
    }

    reply.send({
      status: statusCode,
      message,
      ...rest,
    });
  }
};
