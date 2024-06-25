import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(phone: string): string {
    if (!phone || phone.length < 10 || phone.length > 11)
      return 'Telefone inválido';

    const isCellPhone = phone.length === 11;

    if (isCellPhone)
      return `(${phone.substring(0, 2)}) ${phone.substring(2, 7)}-${phone.substring(7)}`;

    return `(${phone.substring(0, 2)}) ${phone.substring(2, 6)}-${phone.substring(7)}`;
  }
  
}
