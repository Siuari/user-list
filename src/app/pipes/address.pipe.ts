import { Pipe, PipeTransform } from '@angular/core';
import { IAddress } from '../interfaces/user/address.interface';

@Pipe({
  name: 'address'
})
export class AddressPipe implements PipeTransform {

  transform(address: IAddress): string {
    const INVALID_ADDRESS = !address 
      || !address.rua 
      || !address.cidade 
      || !address.estado
      || !address.numero === null

    if (INVALID_ADDRESS) 
      return 'Endereço inválido ou indisponível'
    
    return `${address.rua}, ${address.numero}, ${address.cidade}, ${address.estado}, ${address.pais}.`;
  }

}
