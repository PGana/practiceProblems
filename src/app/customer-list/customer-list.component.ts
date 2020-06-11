import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
  customers: string[];
  customerName: string;
  ngOnInit() {
    /// Init cutomers value to empty
    this.customers = [];
  }

/**
 * Submit button - Save text box value
 * @param value Customer Name
 */
  onSubmit(value: string): void {
    this.customers.push(value);
    this.customerName = '';
  }

}
