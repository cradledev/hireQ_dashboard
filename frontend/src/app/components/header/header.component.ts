import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/services/auth/token-storage.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private tokenStorage: TokenStorageService, private router : Router) { }

  ngOnInit(): void {
  }
  onLogOut(): void {
    this.tokenStorage.signOut();
    this.router.navigate(['/login']);
  }
}
