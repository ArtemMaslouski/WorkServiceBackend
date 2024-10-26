import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class WorkserviceService {
  findAll() {
    return [
      {
        name: 'Rose',
        color: 'Red',
        price: 5,
      },
      {
        name: 'Flowers',
        color: 'White',
        price: 8,
      },
      {
        name: 'Tulip',
        color: 'Yellow',
        price: 7,
      },
    ];
  }

  create() {
    return 'This function adds a new item';
  }
}

export function logger(req, res, next) {
  console.log('Request from logger');
  next();
}

export function auth(req, res, next) {
  console.log('Request from auth');
  next();
}
