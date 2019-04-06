import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, ViewChild, ViewEncapsulation} from '@angular/core';
// material
import {MatDialog, MatDialogConfig} from '@angular/material';
// models
import {Car} from '../../models/car.model';
// components
import {SelectCarDialogComponent} from '../../utils/dialogs/select-car-dialog/select-car-dialog.component';
// rxjs
import {filter} from 'rxjs/operators';

@Component({
    selector: 'app-matrix-cell',
    templateUrl: './matrix-cell.component.html',
    styleUrls: ['./matrix-cell.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    preserveWhitespaces: false
})
export class MatrixCellComponent implements OnInit {

    _cars: Array<Car> = [];

    @Output() showCarDetails = new EventEmitter<Car>();

    @Input() set color(color: string) {

        this.cell.nativeElement.className += ' app-matrix-cell_' + color;
    }

    @Input() set border(border: number) {

        if (border === 0) {

            this.cell.nativeElement.className += ' app-matrix__cell_right-bordered';
        }

        if (border === 7) {

            this.cell.nativeElement.className += ' app-matrix__cell_left-bordered';
        }
    }

    @Input() set cars(cars: Array<Car>) {

        this._cars = cars;

        if (cars.length !== 0) {

            this.cell.nativeElement.className += ' app_matrix-cell_'
                + this.convertNumberToString(cars.length)
                + '-dotted';
        }
    }

    get cars() {

        return this._cars;
    }

    @ViewChild('cell') cell;

    constructor(private matDialog: MatDialog) { }

    ngOnInit() {
    }

    chooseCar(car: Car) {

        this.showCarDetails.emit(car);
    }

    selectCarFromDialog() {

        const data = {cars: this._cars};

        const config: MatDialogConfig = { data: data, restoreFocus: false};

        this.matDialog.open(SelectCarDialogComponent, config).afterClosed().pipe(
            filter(value => value)
        ).subscribe((car: Car) => {

            this.showCarDetails.emit(car);
        });
    }

    convertNumberToString(count: number): string {

        switch (count) {
            case 1:
                return 'one';
            case 2:
                return 'two';
            case 3:
                return 'three';
            case 4:
                return 'four';
            case 5:
                return 'five';
            default:
                return 'more';
        }
    }

}
