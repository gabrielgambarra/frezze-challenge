import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '../providers/services/translate.service';

@Pipe({ name: 'translate' })
export class TranslatePipe implements PipeTransform {
    transform(value: string, type: string): any {
        switch (type) {
            case 'status':
                return TranslateService.translateStatus(value);

            case 'flavor':
                return TranslateService.translateFlavors(value);

            case 'crust':
                return TranslateService.translateCrusts(value);

            default:
                return value;
        }
    }
}