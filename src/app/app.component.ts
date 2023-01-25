import { Component } from '@angular/core';
import { TabbarItem } from './models/tabbarItem';
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


  users: TabbarItem[] = [
    { id: 1, country: 'Italy', name: 'Mario', desc: 'bla bla'},
    { id: 2, country: 'Japan', name: 'Fabio'},
    { id: 3, country: 'Spain', name: 'Ciro'},
  ];

  activeUser: TabbarItem| null = null;



  constructor() {
    console.log("activeUser",this.activeUser);
  }


  openDetails(user: TabbarItem) {
    this.activeUser = user;
  }

}
