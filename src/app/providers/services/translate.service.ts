import { Injectable } from '@angular/core';
import { StatusType } from '../models/OrderRequest.model';
import { FlavorType, CrustType } from '../models/Pizza.model';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {

  constructor() { }

  public static translateStatus(status): string {
    switch (status) {
      case StatusType.ABERTO:
        return 'Aberto';

      case StatusType.CONTATAR_CLIENTE:
        return 'Contatar cliente';

      case StatusType.PREPARANDO:
        return 'Preparando';

      case StatusType.SAIU_PARA_ENTREGA:
        return 'Saiu para entrega';

      case StatusType.CANCELADO:
        return 'Cancelado';

      case StatusType.ENTREGUE:
        return 'Entregue';

      case StatusType.FINALIZADO:
        return 'Finalizado';

      default:
        return 'Não identificado';
    }
  }

  public static translateFlavors(flavor): string {
    switch (flavor) {
      case FlavorType.MARGUERITA:
        return 'Marguerita';

      case FlavorType.CALABRESA:
        return 'Calabresa';

      case FlavorType.PEPPERONI:
        return 'Pepperoni';

      case FlavorType.FRANGO_COM_CATUPIRY:
        return 'Frango Com Catupiry';

      case FlavorType.PORTUGUESA:
        return 'Portuguesa';

      case FlavorType.QUATRO_QUEIJOS:
        return 'Quatro queijos';

      default:
        return 'Não identificado';
    }
  }

  public static translateCrusts(crust): string {
    switch (crust) {
      case CrustType.FINA:
        return 'Fina';

      case CrustType.GROSSA:
        return 'Grossa';

      default:
        return 'Não identificado';
    }
  }
}
