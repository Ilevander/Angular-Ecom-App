import {Component} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {LoginService} from '../../services/login/login.service';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    CommonModule,
    FormsModule
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})

export class LayoutComponent {
  searchText: string = '';

  constructor(private loginService: LoginService) { }

  onFilter() {
    this.loginService.searchBox.next(this.searchText);
  }

  onInput(event: any) {
    if (event.target.value.trim() === '') {
      this.onFilter();
    }
  }
}
