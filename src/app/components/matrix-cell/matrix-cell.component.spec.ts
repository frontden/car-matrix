import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {MatDialog} from '@angular/material';

import { MatrixCellComponent } from './matrix-cell.component';
import {of} from 'rxjs';
import {Car} from '../../models/car.model';

class MatDialogMock {
    open() {
        return {
            afterClosed: () => of(true)
        };
    }
}

const mockCars: Array<Car> = [
    {category: 'Track', title: 'Jack bullshit', description: 'a nice cat with switty face',
        impact: 5, probability: 4, impactHandling: 'Something about it'} as Car,
    {category: 'Jeep', title: 'Hard worker', description: 'a nice cat with switty face',
        impact: 5, probability: 4, impactHandling: 'Something about it'} as Car,
    {category: 'Van', title: 'Policeman', description: 'a nice cat with switty face',
        impact: 5, probability: 4, impactHandling: 'Something about it'} as Car,
    {category: 'Van', title: 'High child', description: 'a nice cat with switty face',
        impact: 5, probability: 4, impactHandling: 'Something about it'} as Car
];

describe('MatrixCellComponent', () => {
  let component: MatrixCellComponent;
  let fixture: ComponentFixture<MatrixCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatrixCellComponent ],
      providers: [
          {
              provide: MatDialog, useClass: MatDialogMock,
          },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatrixCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create 4 dots', () => {
    component._cars = mockCars;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('.app-matrix-cell__car-circle').length === 4);
  });
});
