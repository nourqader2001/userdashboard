// user-details.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  user: any;
  isLoading: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.fetchUser();
  }

  fetchUser(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.isLoading = true;
    this.userService.getUser(id).subscribe({
      next: (data) => {
        this.user = data.data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error fetching user data', err);
        this.isLoading = false;
      }
    });
  }

  onBack(): void {
    this.router.navigate(['/']);
  }
}
