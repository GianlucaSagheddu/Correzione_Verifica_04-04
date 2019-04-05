import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Verifica';
  p: string = "";
  lettera: string = "";
  v: number = 0;

  aggiungi(lettera: HTMLInputElement):Boolean{
    /*if(this.lettera == lettera.value){
      this.v++;
    }else{
      this.v=0;
    }
    if(this.v>=2){
      this.p="Lettera troppe volte aggiunta";
    }else{
      this.lettera=lettera.value;
      this.p += this.lettera;
    }
    */

    if(this.p.charAt(this.p.length-1) == lettera.value && this.p.charAt(this.p.length-2) == lettera.value || this.p=="Lettera troppe volte aggiunta"){
      this.p="Lettera troppe volte aggiunta";
    }else{
      this.p += lettera.value;
    }
    return false;
  }

}
