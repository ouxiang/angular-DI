import { Injectable } from '@angular/core';
import { ProductService, Product } from './product.service';
import { LoggerService } from './logger.service';

@Injectable()
export class AnotherProductService implements ProductService {

  getProduct(): Product {
    this.logger.log("getProduct方法被调用")
    return new Product(1, 'sumsung7', 4899, '最新的三星手机')
  }
  constructor(public logger:LoggerService) { }

}
