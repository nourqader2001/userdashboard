import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private router: Router) { }

  onSearch(id: string): void {
    console.log('Searching for user ID:', id); // Debug log
    id = id.trim();
    if (id) {
      this.router.navigate(['/user', id]);
    }
  }
  
}
