import { Response } from "express";
import { IResponse } from "../types/response.type";

export const expressAdapter = <T>(data: T, res: Response) => {
  if (!res.headersSent) {
    const { statusCode, message, ...rest } = data as IResponse<T>;

    if (statusCode) {
      res.status(statusCode);
    }

    res.send({
      status: statusCode,
      message,
      ...rest,
    });
  }
};
