// @flow
import { Request,Response } from 'express';
import badRequestError from '../exceptions/customException'
import { Logger } from 'winston';
import { NextFunction } from 'express-serve-static-core';
import Exception from '../exceptions/customException';


interface CustomRequest extends Request {
    responseObject: Record<string, any>; // Define the type of the responseObject property
    paging:pageInterface
  }

type pageInterface ={
    limit: number,
    offset: number,
    pageNumber: number,
    setWithPageNumber: boolean
    
}
export default (logger: Logger, req:CustomRequest, res:Response, next:NextFunction) => {
  req.responseObject = {};
  res.header('Access-Control-Allow-Headers', 'Accept,Authorization');
  res.header('Access-Control-Expose-Headers', 'Authorization');

  if (pagedRequest(req)) {
    req.paging = createPagingObject(req);
  }
  const { method, url, body, headers } = req;
  logger.info(`${method} ${url}`, { body });
  logger.debug(`${method} ${url}`, { headers });
  next();
};

const pagedRequest = (req:Request) => {
  const { offset, page, limit } = req.query;
  if(offset && page) {
    Exception.badRequestError('Both page and offset are set in query parameters');
  }
  return (offset || page || limit);
};

const createPagingObject = (req:Request) => {
  let paging: pageInterface ={
    limit:0,
    pageNumber:0,
    offset:0,
    setWithPageNumber: false
  }
  const {offset, page, limit} = req.query;
  paging.limit = Number(limit) || 10;

  if (!offset && !page) {
    paging.offset = 0;
    paging.pageNumber = 1;
    paging.setWithPageNumber = true;
  }
  else if (offset) {
    paging.offset = Number(offset);
    paging.setWithPageNumber = false;
  }
  else if (page) {
    paging.pageNumber = Number(req.query.page);
    paging.offset = (paging.pageNumber - 1) * paging.limit;
    paging.setWithPageNumber = true;
  }
  return paging;
};