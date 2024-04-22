import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ChatComponent } from './components/chat/chat.component';
import { FormsModule } from '@angular/forms';
import { EthereumService } from './services/ethereum.service';



@NgModule({
  declarations: [
    
    // Otros componentes que pertenezcan a este módulo
  ],
  imports: [
    BrowserModule,
    FormsModule
    // Otros módulos que tu aplicación necesite
  ],
  providers: [EthereumService],
  bootstrap: []
})
export class AppModule { }
