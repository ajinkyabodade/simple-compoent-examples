import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pagination',
  template: `
    <div>
      <table class="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let user of users">
            <td>{{ user.id }}</td>
            <td>{{ user.firstName }}</td>
            <td>{{ user.lastName }}</td>
          </tr>
        </tbody>
      </table>
      <section class="pagination">
        <button
          class="pagination-button first-page-btn"
          [disabled]="currentPage === 0 || isLoading"
          (click)="changePage(0)"
        >
          first
        </button>
        <button
          class="pagination-button previous-page-btn"
          [disabled]="currentPage === 0 || isLoading"
          (click)="changePage(currentPage - 1)"
        >
          previous
        </button>
        <button
          class="pagination-button next-page-btn"
          [disabled]="currentPage === totalPages - 1 || isLoading"
          (click)="changePage(currentPage + 1)"
        >
          next
        </button>
        <button
          class="pagination-button last-page-btn"
          [disabled]="currentPage === totalPages - 1 || isLoading"
          (click)="changePage(totalPages - 1)"
        >
          last
        </button>
      </section>
    </div>
  `
})
export class PaginationComponent implements OnInit {
  users: any[] = [];
  currentPage: number = 0;
  totalPages: number = 0;
  isLoading: boolean = false;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchUsers(this.currentPage);
  }

  fetchUsers(page: number) {
    this.isLoading = true;
    const url = `https://example.com/api/users?page=${page}`;
    this.http.get(url).subscribe((response: any) => {
      if(response.results.length) {
        this.users = response.results;
        this.totalPages = Math.ceil(response.count / 10);
        this.isLoading = false;
      }
    });
  }

  changePage(page: number) {
    if (page >= 0 && page < this.totalPages) {
      this.currentPage = page;
      this.fetchUsers(this.currentPage);
    }
  }
}
