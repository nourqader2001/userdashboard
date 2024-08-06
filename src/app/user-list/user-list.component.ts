import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: any[] = [];
  page: number = 1;
  totalPages!: number;
  isLoading: boolean = false;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers(): void {
    this.isLoading = true;
    this.userService.getUsers(this.page).subscribe(data => {
      this.users = data.data;
      this.totalPages = data.total_pages;
      this.isLoading = false;
    });
  }

  onUserClick(id: number): void {
    this.router.navigate(['/user', id]);
  }

  onNextPage(): void {
    if (this.page < this.totalPages) {
      this.page++;
      this.fetchUsers();
    }
  }

  onPreviousPage(): void {
    if (this.page > 1) {
      this.page--;
      this.fetchUsers();
    }
  }
}

