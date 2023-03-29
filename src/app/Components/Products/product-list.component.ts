import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { IProduct } from "src/app/Models/IProduct";
import { ProductService } from "src/app/Services/product.service";

@Component({
  selector: 'app-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],

})


export class ProductListComponent implements OnInit, OnDestroy {
  pageTitle: string = "Product List";
  imgWidth : number = 50;
  imgMargin : number = 3;
  showImage : boolean = false;
  filterProducts : IProduct[] = [];
  colorDirectiveBoolean : boolean = false;
  products: IProduct[] = [];
  errorMeassage :string ='';
  sub!: Subscription; // ? save navigation , ! not null assertion operator


  constructor(private productService : ProductService)
  {
    this.listFilter = '';
  }

  ngOnInit(): void {
    console.log("on init");

    this.sub= this.productService.getProducts().subscribe({
      next : products=> {
        this.products = products;
        this.filterProducts = this.products;
      },
      error: err => this.errorMeassage = err
    });


  }

  private _listFilter : string ='';
  public get listFilter():string
  {
    return this._listFilter;
  }
  public set listFilter(value:string)
  {
    this._listFilter = value;
    console.log(value);
    this.filterProducts = this.perfomrFilter(value);

  }
  perfomrFilter(filterBy : string): IProduct[]
  {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
    product.productName.includes(filterBy)
    );
  }



    toggleImage()
    {
      this.showImage = !this.showImage;
      this.colorDirectiveBoolean = !this.colorDirectiveBoolean;
    }


    onKeyDown(t : any)
    {
      alert("shift + t pressed");
    }

    onRatingClicked(message : string):void{
      this.pageTitle = 'product list '+ message;
    }


    ngOnDestroy(): void {
      this.sub.unsubscribe();
    }
}
