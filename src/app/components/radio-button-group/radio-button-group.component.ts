import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Continent} from "../../interfaces/Continent/Continent";

@Component({
  selector: 'app-radio-button-group',
  templateUrl: './radio-button-group.component.html',
  styleUrls: ['./radio-button-group.component.scss']
})
export class RadioButtonGroupComponent implements OnInit {
  @Input() options!: Continent[]
  @Input() selected!: string

  @Output() shareSelectedOption = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  selectAndEmitValue(option: Continent): void{
    this.shareSelectedOption.emit(option)
  }
}
