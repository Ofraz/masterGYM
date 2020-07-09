import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase/app';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'masterGYM';
  user: User;
  cargando: boolean = true;
  
  constructor(private auth: AngularFireAuth) {
    this.auth.user.subscribe((usuario)=>{
      setTimeout(()=>{
        this.cargando = false
        this.user = usuario
      },2000)
      
    })
  }
  login() {
    this.auth.signInWithEmailAndPassword('ricardo_jch@yahoo.com','123456789')
  }
  logout() {
    this.auth.signOut();
  }
}
