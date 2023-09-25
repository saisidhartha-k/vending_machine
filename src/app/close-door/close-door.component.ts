import { Component } from '@angular/core';
import { VendingMachineService } from '../vending-machine.service';

@Component({
  selector: 'app-close-door',
  templateUrl: './close-door.component.html',
  styleUrls: ['./close-door.component.css']
})
export class CloseDoorComponent {
  selectedQuantity: number = 1; 
  result ?: String;

  constructor( public vendingMachine : VendingMachineService) {}

  closeDoor(): void {
    this.vendingMachine.closeDoor(this.selectedQuantity);
  }

  getPurchaseResult(): String {
    return this.vendingMachine.purchaseResult;
  }

}
