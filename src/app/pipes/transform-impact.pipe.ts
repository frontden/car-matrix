import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'transformImpact'
})
export class TransformImpactPipe implements PipeTransform {

    transform(impact: number): string {

        switch (impact) {

            case 0:

                return 'Low';

            case 1:

                return 'Rather low';

            case 2:

                return 'Rather high';

            case 3:

                return 'High';

            case 4:

                return 'Very high';

            case 5:

                return 'Critical';
        }
    }
}
