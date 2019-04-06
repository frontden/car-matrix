import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'transformProbability'
})
export class TransformProbabilityPipe implements PipeTransform {

    transform(probability: number): string {

        switch (probability) {

            case 0:

                return 'Risk eliminated';

            case 1:

                return 'Low';

            case 2:

                return 'Rather low';

            case 3:

                return 'Rather high';

            case 4:

                return 'High';

            case 5:

                return 'Very high';

            case 6:

                return 'Critical';

            case 7:

                return 'Occured';

        }
    }
}
