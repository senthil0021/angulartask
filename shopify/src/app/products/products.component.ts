// src/app/products/products.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth.service';

import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterModule,],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  
  constructor(private productService: AuthService) { }
  products: any[] = [];
  filteredProducts: any[] = [];
  filter = 'all';

   ngOnInit(): void {
    this.productService.getProducts().subscribe((data: any[]) => {
      this.products = data;
      this.filteredProducts = data;
    });
  }

  onFilterChange(event: any) {
    this.filter = event.target.value;
    this.applyFilter();
  }

  applyFilter() {
    if (this.filter === 'all') {
      this.filteredProducts = this.products;
    } 
}}