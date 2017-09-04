import { Component }           from '@angular/core';
import { testService }         from './test.service'

@Component({
  selector: 'my-app',
  templateUrl: './test.component.html'
})
export class TestComponent { 
    value: string = ""; 
    
    constructor(private _testService: testService) { }  
    
    ngOnInit(): void { 
      this.value = this._testService.getData(); 
    }
}
