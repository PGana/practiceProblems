import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-binary-search-tree',
    templateUrl: './bst.component.html',
    styleUrls: ['./bst.component.scss']
})
export class BinarySearchTreeComponent implements OnInit {
    ngOnInit() { }

    printVal(){
        console.log(this);
    }
   
}