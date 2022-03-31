import {Component, EventEmitter, Input, OnChanges,  Output} from '@angular/core';
import {SelectableListItem} from "../../interfaces/SelectableListItem";

@Component({
  selector: 'app-multi-select-dropdown',
  templateUrl: './multi-select-dropdown.component.html',
  styleUrls: ['./multi-select-dropdown.component.scss']
})
export class MultiSelectDropdownComponent implements OnChanges {

  @Input() list!: SelectableListItem[];
  @Input() selected!: string[];

  @Output() shareCheckedList = new EventEmitter();

  showDropDown = false
  checkedList:string[] = [];
  currentSelected! : {};

  ngOnChanges() {
    this.setChecked()
  }
  setChecked(){
    this.checkedList = []
    if (this.list){
      for (const item of this.list){
        if (this.selected.indexOf(item.name) !== -1){
          item.checked = true
          this.checkedList.push(item.name)
        }
      }
    }
  }
  getSelectedValue(status: boolean,value: string){
    if(status){
      this.checkedList.push(value);
    }else{
      const index = this.checkedList.indexOf(value);
      this.checkedList.splice(index,1);
    }

    this.currentSelected = {checked : status,name:value};

    this.shareCheckedlist();
  }
  shareCheckedlist(){
    this.shareCheckedList.emit(this.checkedList);
  }
}
