/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {GpaTableComponent} from "./gpa-table.component";

describe('GpaTableComponent', () => {
  let component: GpaTableComponent;
  let fixture: ComponentFixture<GpaTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GpaTableComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GpaTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
