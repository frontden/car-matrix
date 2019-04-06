import { Injectable } from '@angular/core';
import {Car} from '../models/car.model';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {

    cars: Array<Car> = [
        {category: 'Van', title: 'White lady', description: 'a nice cat with switty face',
            impact: 2, probability: 3, impactHandling: 'Something about it'} as Car,
        {category: 'Track', title: 'Mistery', description: 'a nice cat with switty face',
            impact: 2, probability: 3, impactHandling: 'Something about it'} as Car,
        {category: 'Van', title: 'Jinger', description: 'a nice cat with switty face',
            impact: 3, probability: 4, impactHandling: 'Something about it'} as Car,
        {category: 'Van', title: 'x6', description: 'a nice cat with switty face',
            impact: 0, probability: 6, impactHandling: 'Something about it'} as Car,
        {category: 'Track', title: 'Pante', description: 'a nice cat with switty face',
            impact: 0, probability: 6, impactHandling: 'Something about it'} as Car,
        {category: 'Van', title: 'White lady', description: 'a nice cat with switty face',
            impact: 0, probability: 6, impactHandling: 'Something about it'} as Car,
        {category: 'Van', title: 'Big bomboo', description: 'a nice cat with switty face',
            impact: 5, probability: 4, impactHandling: 'Something about it'} as Car,
        {category: 'Track', title: 'Jack bullshit', description: 'a nice cat with switty face',
            impact: 5, probability: 4, impactHandling: 'Something about it'} as Car,
        {category: 'Jeep', title: 'Hard worker', description: 'a nice cat with switty face',
            impact: 5, probability: 4, impactHandling: 'Something about it'} as Car,
        {category: 'Van', title: 'Policeman', description: 'a nice cat with switty face',
            impact: 5, probability: 4, impactHandling: 'Something about it'} as Car,
        {category: 'Van', title: 'High child', description: 'a nice cat with switty face',
            impact: 5, probability: 4, impactHandling: 'Something about it'} as Car,
        {category: 'Track', title: 'Chicken', description: 'a nice cat with switty face',
            impact: 5, probability: 4, impactHandling: 'Something about it'} as Car,
        {category: 'Van', title: 'Riverdale', description: 'a nice cat with switty face',
            impact: 5, probability: 4, impactHandling: 'Something about it'} as Car,
        {category: 'Jeep', title: 'White lady', description: 'a nice cat with switty face',
            impact: 1, probability: 2, impactHandling: 'Something about it'} as Car,
        {category: 'Van', title: 'Pogba', description: 'a nice cat with switty face',
            impact: 1, probability: 2, impactHandling: 'Something about it'} as Car,
        {category: 'Track', title: 'White lady', description: 'a nice cat with switty face',
            impact: 3, probability: 3, impactHandling: 'Something about it'} as Car,
        {category: 'Van', title: 'Reaction', description: 'a nice cat with switty face',
            impact: 3, probability: 3, impactHandling: 'Something about it'} as Car,
        {category: 'Van', title: 'White lady', description: 'a nice cat with switty face',
            impact: 3, probability: 3, impactHandling: 'Something about it'} as Car,
        {category: 'Van', title: 'Corr JS', description: 'a nice cat with switty face',
            impact: 3, probability: 3, impactHandling: 'Something about it'} as Car,
        {category: 'Van', title: 'White lady', description: 'a nice cat with switty face',
            impact: 3, probability: 3, impactHandling: 'Something about it'} as Car,
        {category: 'Jeep', title: 'Vanilla sky', description: 'a nice cat with switty face',
            impact: 5, probability: 7, impactHandling: 'Something about it'} as Car,
        {category: 'Track', title: 'White lady', description: 'a nice cat with switty face',
            impact: 5, probability: 7, impactHandling: 'Something about it'} as Car,
        {category: 'Van', title: 'Test drive', description: 'a nice cat with switty face',
            impact: 5, probability: 7, impactHandling: 'Something about it'} as Car,
        {category: 'Track', title: 'Class', description: 'a nice cat with switty face',
            impact: 5, probability: 7, impactHandling: 'Something about it'} as Car,
    ];

    constructor() { }

    loadCars(): Observable<Array<Car>> {

        return of(this.cars);
    }
}
