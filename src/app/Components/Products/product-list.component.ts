import { Component } from "@angular/core";
import { IProduct } from "src/app/Models/IProduct";

@Component({
  selector:'app-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})


export class ProductListComponent
{
  pageTitle :string = "Product List";
  products : IProduct[] =
  [
    {
    productID :1,
    productName : "Mobile",
    productCode: "343-yt",
    releaseDate : "March 27 2023",
    startRating: 4.1,
    price : 7000,
    description : "Product 1 Description",
    },
    {
      productID :2,
      productName : "Laptop",
      productCode: "79-sw",
      releaseDate : "March 27 2023",
      startRating: 4.1,
      price : 30000,
      description : "Product 2 Description",
      }
  ];
}
