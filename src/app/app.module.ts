// modules
import { NgModule }          from '@angular/core';
import { BrowserModule }     from '@angular/platform-browser';
import { HttpModule }        from '@angular/http';
import { FormsModule }       from '@angular/forms';

// components
import { AppComponent }      from './app.component';
import { BookFormComponent } from './components/book-form/book-form.component';

@NgModule({
  // modules
  imports: [ BrowserModule, HttpModule, FormsModule ],
  // components
  declarations: [ AppComponent, BookFormComponent ],
  // services
  providers: [],
  // bootstrap
  bootstrap: [ AppComponent ]
})
export class AppModule {}