import { animate,state,style,transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animation-demo',
  templateUrl: './animation-demo.component.html',
  styleUrls: ['./animation-demo.component.css'],
  animations:[
    trigger('openClose',[
      state('open',style({
height:"500px",
backgroundColor:"red"

      })),
      state('closed',style({
height:"200px",
backgroundColor:"blue"
      })),
      transition('open=>closed',[
animate('1s')
      ]),
      transition('closed=>open',[
        animate('2s')
              ])

    ])
  ]
})
export class AnimationDemoComponent implements OnInit {
isOpen=true;
  constructor() { 
    setInterval(()=>{
  this.isOpen=!this.isOpen
},1000)
  }

  ngOnInit(): void {
  }
// setInterval(function(){
//   this.isOpen=!this.isOpen
// },3000)

  toggle(){
    this.isOpen=!this.isOpen;
  }

}
