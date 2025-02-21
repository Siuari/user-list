import { Pipe, PipeTransform } from '@angular/core';
import { IStatus } from '../interfaces/user/status.interface';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  transform(status: boolean): string {
    const INVALID_STATUS = status === undefined || status === null;

    if (INVALID_STATUS)
      return 'Status inválido ou indisponível';

    return status
      ? 'Ativo'
      : 'Inativo';
  }

}
