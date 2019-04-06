import { Component, OnInit } from '@angular/core';
import {Car} from '../../models/car.model';
import {CarService} from '../../services/car.service';

@Component({
    selector: 'app-matrix',
    templateUrl: './matrix.component.html',
    styleUrls: ['./matrix.component.scss']
})
export class MatrixComponent implements OnInit {

    matrix: Array<MatrixRow> = [];

    selectedCar: Car;

    constructor(private carService: CarService) {

    }

    ngOnInit() {

        this.generateMatrix();

        this.carService.loadCars().subscribe((cars: Array<Car>) => {
                cars.forEach((car: Car) => {

                    this.matrix[Math.abs(car.impact - 5)].cells[car.probability].cars.push(car);
                });
        });
    }

    showCarDetails(car: Car) {

        this.selectedCar = car;
    }

    generateMatrix() {

        this.matrix = [
            new MatrixRow('Critical',  [
            new MatrixCell('green', ''), new MatrixCell('orange', ''),
            new MatrixCell('orange', ''), new MatrixCell('pink', ''),
            new MatrixCell('pink', ''), new MatrixCell('pink', ''),
            new MatrixCell('pink', ''), new MatrixCell('red', '')
        ]),
            new MatrixRow('Very high',  [
                new MatrixCell('green', ''), new MatrixCell('orange', ''),
                new MatrixCell('orange', ''), new MatrixCell('orange', ''),
                new MatrixCell('pink', ''), new MatrixCell('pink', ''),
                new MatrixCell('pink', ''), new MatrixCell('red', '')
            ]),
            new MatrixRow('High',  [
                new MatrixCell('green', ''), new MatrixCell('yellow', ''),
                new MatrixCell('orange', ''), new MatrixCell('orange', ''),
                new MatrixCell('orange', ''), new MatrixCell('pink', ''),
                new MatrixCell('pink', ''), new MatrixCell('red', '')
            ]),
            new MatrixRow('Rather high',  [
                new MatrixCell('green', ''), new MatrixCell('yellow', ''),
                new MatrixCell('yellow', ''), new MatrixCell('orange', ''),
                new MatrixCell('orange', ''), new MatrixCell('orange', ''),
                new MatrixCell('pink', ''), new MatrixCell('red', '')
            ]),
            new MatrixRow('Rather low',  [
                new MatrixCell('green', ''), new MatrixCell('yellow', ''),
                new MatrixCell('yellow', ''), new MatrixCell('yellow', ''),
                new MatrixCell('orange', ''), new MatrixCell('orange', ''),
                new MatrixCell('orange', ''), new MatrixCell('red', '')
            ]),
            new MatrixRow('Low',  [
                new MatrixCell('green', 'Risk eliminated'), new MatrixCell('yellow', 'Low'),
                new MatrixCell('yellow', 'Rather low'), new MatrixCell('yellow', 'Rather high'),
                new MatrixCell('yellow', 'High'), new MatrixCell('orange', 'Very high'),
                new MatrixCell('orange', 'Critical'), new MatrixCell('red', 'Occured')
            ])];
    }

}

export class MatrixRow {
    sideLabel: string;
    cells: Array<MatrixCell>;

    constructor(sideLabel: string, cells: Array<MatrixCell>) {

        this.sideLabel = sideLabel;

        this.cells = cells;
    }
}

export class MatrixCell {
    color: string;
    botLabel: string;
    cars: Array<Car>;

    constructor(color: string, label) {

        this.color = color;

        this.botLabel = label;

        this.cars = [];
    }
}
