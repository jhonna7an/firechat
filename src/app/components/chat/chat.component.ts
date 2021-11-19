import { ChatService } from './../../services/chat.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  public mensaje: string = "";

  constructor(public _cs: ChatService) {
    this._cs.cargarMensajes()
      .subscribe()
   }

  ngOnInit(): void {
  }

  enviar_mensaje(){
    console.log(this.mensaje);
    if (this.mensaje.length === 0) {
      return;
    }

    this._cs.agregarMensaje
  }

}
