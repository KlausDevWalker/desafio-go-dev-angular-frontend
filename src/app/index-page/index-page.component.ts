import { Component, OnInit } from '@angular/core';
import {BudgetItem} from "../../shared/models/budget-item.model";

@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.scss']
})
export class IndexPageComponent implements OnInit {
  budgetItems: BudgetItem[] = new Array<BudgetItem>()

  constructor() { }

  ngOnInit(): void {
  }

  addItem(newItem: BudgetItem) {
    this.budgetItems.push(newItem)
  }
	
	deleteItem(item: BudgetItem) {
		let index = this.budgetItems.indexOf(item)
    this.budgetItems.splice(index, 1)
	}
}
