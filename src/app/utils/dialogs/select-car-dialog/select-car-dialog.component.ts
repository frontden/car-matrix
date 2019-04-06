import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Car} from '../../../models/car.model';

@Component({
    selector: 'app-select-car-dialog',
    templateUrl: './select-car-dialog.component.html',
    styleUrls: ['./select-car-dialog.component.scss']
})
export class SelectCarDialogComponent implements OnInit {

    cars: Array<Car> = [];

    constructor(public dialogRef: MatDialogRef<SelectCarDialogComponent>,
                @Inject(MAT_DIALOG_DATA) data: {cars: Array<Car>}) {

        this.cars = data.cars;
    }

    ngOnInit() {
    }

    selectCar(car: Car) {

        this.dialogRef.close(car);
    }

}
