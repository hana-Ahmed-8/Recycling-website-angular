import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';
import { Login } from './components/login/login';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Navbar,Footer,Login],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Recycling_project');
}
