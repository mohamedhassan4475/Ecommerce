import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-select',
  template: `<div class="grid">
    <label class="text-xl"> {{ title }}</label>
    <select
      class="border h-10 rounded border-grey-300 outline-none"
      (change)="detectChange($event)"
    >
      <option value="all" selected>All</option>
      <option value="{{ item }}" *ngFor="let item of data">
        {{ item }}
      </option>
    </select>
  </div>`,
  styles: [],
  standalone: true,
  imports: [FormsModule, CommonModule],
})
export class SelectComponent {
  @Input() title: string = '';
  @Input() data: any[] = [];
  @Output() SelectedValue = new EventEmitter();

  detectChange(event: any) {
    this.SelectedValue.emit(event);
  }
}
