export interface IResponse<T = Record<string, any>> {
  statusCode?: number;
  message?: string;
  [key: string]: any;
}

export const transformResponse = <T>(data: T): IResponse<T> => {
  const { statusCode, message, ...rest } = data as IResponse<T>;

  return {
    status: statusCode,
    message,
    ...rest,
  };
};

export const responseTransformer = (req: any, res: any, next: any) => {
  res.send = (data: any) => res.send(transformResponse(data));
  next();
};
