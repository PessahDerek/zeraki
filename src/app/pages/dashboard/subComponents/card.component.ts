import {Component, Input} from "@angular/core";
import {NgForOf} from "@angular/common";
import {addComma} from "../../../lib/reusableMethods";

@Component({
  standalone: true,
  selector: 'card',
  imports: [
    NgForOf,
  ],
  template: `
    <div class="w-full h-full rounded-md flex text-blue-800 cursor-pointer p-2 bg-white hover:scale-[1.02] hover:shadow-2xl">
      <span class="w-full m-auto grid">
        <p class="font-bold">{{ title.toUpperCase() }}</p>
        <div class="grid grid-flow-col gap-2">
          <div class="pr-1 border-r border-solid border-r-green-50 " *ngFor="let value of values">
            <span class="w-full">
              <h3 class="text-3xl">{{ addComma(value.val) }}</h3>
              <i class="text-[12px]">{{ value.sub }}</i>
            </span>
          </div>
        </div>
      </span>
    </div>`
})

export class CardComponent {
  @Input() title: string = '';
  @Input() values: {sub: string, val: number}[] = [];

  protected readonly addComma = addComma;
}
