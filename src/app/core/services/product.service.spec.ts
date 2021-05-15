import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ProductService } from './product.service';
import { Product } from '../models/Product';


describe('ProductService', () => {
  let productService: ProductService;
  let httptesting: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductService],
    });
    productService = TestBed.inject(ProductService);
    httptesting = TestBed.inject(HttpTestingController);
    
  });
  it('should be created.', () => {
    expect(productService).toBeTruthy();
  });
  it('should return product array when called getProducts', () => {
    
      productService
      .getProducts()
      .subscribe((result: Product[]) => {
        expect(result).toBe([]);    
      });
  });
  it('service should return all products.', () => {
  
    const testProductsData: Product[] = [
      {
        title: 'Apple iPhone 7 Plus 32 GB ',
        category: 'phone',
        images: ['https://productimages.hepsiburada.net/s/18/280-413/9801258663986.jpg?v1', 'https://productimages.hepsiburada.net/s/18/280-413/9801258696754.jpg?v1', 'https://productimages.hepsiburada.net/s/18/280-413/9801258729522.jpg?v1', 'https://productimages.hepsiburada.net/s/18/280-413/9801258762290.jpg?v1'],
        brand: 'apple',
        price: 42410,
        cpu: '1.3GHz Apple A6',
        camera: '8mp (3264x2448)',
        size: '124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)',
        weight: '132 grams (4.7 ounces) with battery',
        display: '4.0 326 pixel density',
        battery: '1480 mAh',
        memory: '16GB, 32GB and RAM 1 GB',
        quantity: 1,
        id: 0,
        description: 'Xiaomi launches Mi product range in India under \'Smarter living\' tagline. Xiaomi has introduced a range of products for Indian consumers, under the tagline \'Smarter living\'.'
      }, {
        title: 'Huawei Mate 20 Lite 64 GB',
        category: 'phone',
        images: ['https://productimages.hepsiburada.net/s/21/280-413/9933217792050.jpg?v1', 'https://productimages.hepsiburada.net/s/21/280-413/9933217628210.jpg?v1', 'https://productimages.hepsiburada.net/s/21/280-413/9933217660978.jpg?v1', 'https://productimages.hepsiburada.net/s/21/280-413/9933217693746.jpg?v1'],
        brand: 'huawei',
        price: 18230,
        cpu: '1.3GHz Apple A6',
        camera: '8mp (3264x2448)',
        size: '124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)',
        weight: '132 grams (4.7 ounces) with battery',
        display: '4.0 326 pixel density',
        battery: '1480 mAh',
        memory: '16GB, 32GB and RAM 1 GB',
        quantity: 1,
        id: 1,
        description: 'Xiaomi launches Mi product range in India under \'Smarter living\' tagline. Xiaomi has introduced a range of products for Indian consumers, under the tagline \'Smarter living\'.'
      }
    ];
  
    productService
      .getProducts()
      .subscribe((result: Product[]) => {
        expect(result[0].price).toEqual(testProductsData[0].price);
        expect(result[0].quantity).toEqual(1);
      });
  });

  it('service should retun expected product.', () => {
    const testProductsData: Product[] = [
      {
        title: 'Apple iPhone 7 Plus 32 GB ',
        category: 'phone',
        images: ['https://productimages.hepsiburada.net/s/18/280-413/9801258663986.jpg?v1', 'https://productimages.hepsiburada.net/s/18/280-413/9801258696754.jpg?v1', 'https://productimages.hepsiburada.net/s/18/280-413/9801258729522.jpg?v1', 'https://productimages.hepsiburada.net/s/18/280-413/9801258762290.jpg?v1'],
        brand: 'apple',
        price: 42410,
        cpu: '1.3GHz Apple A6',
        camera: '8mp (3264x2448)',
        size: '124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)',
        weight: '132 grams (4.7 ounces) with battery',
        display: '4.0 326 pixel density',
        battery: '1480 mAh',
        memory: '16GB, 32GB and RAM 1 GB',
        quantity: 1,
        id: 0,
        description: 'Xiaomi launches Mi product range in India under \'Smarter living\' tagline. Xiaomi has introduced a range of products for Indian consumers, under the tagline \'Smarter living\'.'
      }, {
        title: 'Huawei Mate 20 Lite 64 GB',
        category: 'phone',
        images: ['https://productimages.hepsiburada.net/s/21/280-413/9933217792050.jpg?v1', 'https://productimages.hepsiburada.net/s/21/280-413/9933217628210.jpg?v1', 'https://productimages.hepsiburada.net/s/21/280-413/9933217660978.jpg?v1', 'https://productimages.hepsiburada.net/s/21/280-413/9933217693746.jpg?v1'],
        brand: 'huawei',
        price: 18230,
        cpu: '1.3GHz Apple A6',
        camera: '8mp (3264x2448)',
        size: '124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)',
        weight: '132 grams (4.7 ounces) with battery',
        display: '4.0 326 pixel density',
        battery: '1480 mAh',
        memory: '16GB, 32GB and RAM 1 GB',
        quantity: 1,
        id: 1,
        description: 'Xiaomi launches Mi product range in India under \'Smarter living\' tagline. Xiaomi has introduced a range of products for Indian consumers, under the tagline \'Smarter living\'.'
      }
    ];

    productService.getProduct(1).subscribe((response: any) => {
      expect(response.success).toEqual(true);
      expect(response.content.id).toEqual(testProductsData[0].id);
    });
  });


});


