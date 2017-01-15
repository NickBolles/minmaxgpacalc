import {Component, OnInit, Input} from "@angular/core";

@Component({
  selector: 'app-gpa-table',
  templateUrl: './gpa-table.component.html',
  styleUrls: ['./gpa-table.component.scss',
    '../../../node_modules/ng2-material/ng2-material.css',
    '../../../node_modules/ng2-material/font/font.css'
  ]
})
export class GpaTableComponent implements OnInit {
  @Input() totCredits = 0;
  @Input() curCredits = 0;
  @Input() curGradepoints = 0;
  maxGP = 0;
  gpa = [];

  thresholds: {gpa: number, gradePoints: number, gradePointsNeeded: number, canLoseGradePoints: number, attainable: boolean}[] = [];

  constructor() {
    let gpa = 4.0;
    while (gpa > 0) {
      this.gpa.push(round(gpa, 2));
      gpa -= 0.1;
    }
  }

  ngOnInit() {
  }

  ngOnChanges() {
    this.maxGP = round((this.gpa[0] * (this.totCredits - this.curCredits)) + this.curGradepoints, 2);
    this.thresholds = this.gpa.map((val) => {
      let gp = round(val * this.totCredits, 2);
      return {
        gpa: val,
        gradePoints: gp,
        gradePointsNeeded: round(Math.max(0, gp - this.curGradepoints), 2),
        canLoseGradePoints: round((this.maxGP - gp), 2),
        attainable: this.maxGP >= gp,
        guarenteed: this.curGradepoints >= gp
      }
    })
  }

}

function round(number, precision) {
  let factor = Math.pow(10, precision);
  let tempNumber = number * factor;
  let roundedTempNumber = Math.round(tempNumber);
  return roundedTempNumber / factor;
}
