import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IProduct } from 'src/app/Models/IProduct';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Details';
  product : IProduct | undefined;
  sub!:Subscription;
  constructor(private productService: ProductService, private router:Router, private route:ActivatedRoute) {

  }
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.pageTitle += ` : ${id}`
  }

  onBack()
  {
    this.router.navigate(['/products']);
  }
}
