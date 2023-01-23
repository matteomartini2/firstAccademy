import { Component } from '@angular/core';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'firstProjectAccademy';

  variabilePadre = 'Sono il testo che viene dal padre e sto andando nel componente hello';

  listString: string[] = ['matteo', 'simone', 'valerio'];
  listUser: User[] = [
    {
      name: 'matteo', surname: 'martini', age: 25, contact: {
        email: 'matteounix@ddd.it', facebook: 'matteo ', instagram: ['matteo_prova'],
        phoneNumber: '34343434'
      }
    },
    {
      name: 'simone', surname: 'quar', age: 25, contact: {
        email: 'simo@ddd.it', facebook: 'simo q ', instagram: ['simo_insta', 'bqn'],
        phoneNumber: '666666'
      }
    },
  ];


  constructor() {
    console.log("listUser", this.listUser);
  }

}

