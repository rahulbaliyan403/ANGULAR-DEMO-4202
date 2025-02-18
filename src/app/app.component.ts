import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UserService } from './services/user-service';
import { User } from './model/user';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [],
})
export class AppComponent implements OnInit {
  users: any[] = [];
  userDemo: any;
  id: number = 1;
  deleteId: number = 53;

  userTest: any = {
    name: 'Gaurav',
    password: '123',
    email: 'gaurav@gmail.com',
    salary: 25000.0,
  };
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.usersData();
    //this.userData(this.id);
    //this.saveData();
    //this.deleteData(this.deleteId);
  }

  usersData(): void {
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
    },error => console.log(error));
  }
  userData(id: number) {
    this.userService.getUser(this.id).subscribe((data) => {
      this.userDemo = data;
    },error => console.log(error));
  }

  saveData(): void {
    this.userService.saveUser(this.userTest).subscribe((res: any) => {
      console.log('Success');
    },
    error => console.log(error));
  }
  deleteData(deleteId:number): void {
    this.userService.deleteUser(this.deleteId).subscribe((res: any) => {
      console.log('Deleted');
    },error => console.log(error));
  }
}
