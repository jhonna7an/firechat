import { Component } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firechat';
  public chats: Observable<any[]>;

  constructor(firestore: AngularFirestore) {
    this.chats = firestore.collection('chats').valueChanges();
  }

}
