import { Component, OnInit } from "@angular/core";
import { IProduct } from "src/app/Models/IProduct";

@Component({
  selector: 'app-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})


export class ProductListComponent implements OnInit {
  pageTitle: string = "Product List";
  imgWidth : number = 50;
  imgMargin : number = 3;
  showImage : boolean = false;
  filterProducts : IProduct[] = [];
  colorDirectiveBoolean : boolean = false;



  constructor()
  {
    this.listFilter = '';
  }
  ngOnInit(): void {
    console.log("on init");

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
  products: IProduct[] =
    [
      {
        productID: 1,
        productName: "mobile",
        productCode: "343-yt",
        releaseDate: "March 27 2023",
        startRating: 4.1,
        price: 7000,
        description: "Product 1 Description",
        image: "https://picsum.photos/100/100",
      },
      {
        productID: 2,
        productName: "laptop",
        productCode: "79-sw",
        releaseDate: "March 28 2023",
        startRating: 3,
        price: 30000,
        description: "Product 2 Description",
        image: "https://picsum.photos/100/100",
      },
      {
        productID: 3,
        productName: "tablet",
        productCode: "67-rt",
        releaseDate: "March 26 2023",
        startRating: 2.2,
        price: 4000,
        description: "Product 3 Description",
        image: "https://picsum.photos/100/100",
      },
      {
        productID: 4,
        productName: "tv",
        productCode: "78-qt",
        releaseDate: "March 21 2023",
        startRating: 5,
        price: 2000,
        description: "Product 4 Description",
        image: "https://picsum.photos/100/100",
      },
      {
        productID: 5,
        productName: "ipad",
        productCode: "34-pt",
        releaseDate: "March 26 2023",
        startRating: 4,
        price: 3600,
        description: "Product 5 Description",
        image: "https://picsum.photos/100/100",
      }
    ];

    toggleImage()
    {
      this.showImage = !this.showImage;
      this.colorDirectiveBoolean = !this.colorDirectiveBoolean;
    }


    onKeyDown(t : any)
    {
      alert("shift + t pressed");
    }
}
