import { Component } from '@angular/core';

@Component({
  selector: 'app-spinner',
  template: `<div
    class="text-blue-500 inline-block h-16 w-16 animate-spin rounded-full border-8 border-solid border-current border-r-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]"
    role="status"
  >
    <span
      class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
      >Loading...</span
    >
  </div> `,
  styles: [],
  standalone: true,
})
export class SpinnerComponent {}
