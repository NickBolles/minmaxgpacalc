import {Component} from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';

  public gradeScale: number = 4.0;
  public grades: Grade[] = [
    new Grade('A', 100, 90, 4),
    new Grade('B', 90, 80, 3),
    new Grade('C', 80, 70, 2),
    new Grade('D', 70, 60, 1),
    new Grade('F', 0, 60, 0),
  ];
  public curCredits: number;
  public futCredits: number;

  get totalCredits(): number {
    return this.curCredits + this.futCredits;
  }

  public curGradepoints: number;

  get curGPA(): number {
    return round(this.curGradepoints / this.curCredits, 4);
  }

  set curGPA(val: number) {
    if (this.curCredits) {
      this.curGradepoints = round(this.curCredits * val, 4);
    } else if (this.curGradepoints) {
      this.curCredits = round(this.curGradepoints / val, 4);
    }
  }

  get maxGradepoints(): number {
    return this.curGradepoints + this.futCredits * this.gradeScale;
  }

  get maxGPA(): number {
    return round(this.maxGradepoints / this.totalCredits, 4);
  }

  get minGPA(): number {
    return round(this.curGradepoints / this.totalCredits, 4);
  }


  public ngOnChanges(changes) {
    this.updateGraphData();
  }

  public updateGraphData() {

  }

}


export class Grade {
  constructor(public name: string, public low: number, public high: number, public gradePoints: number) {
  }
}

export function round(number, precision) {
  let factor = Math.pow(10, precision);
  let tempNumber = number * factor;
  let roundedTempNumber = Math.round(tempNumber);
  return roundedTempNumber / factor;
}
