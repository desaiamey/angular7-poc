import { Component, OnInit, Input } from '@angular/core';
import {AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() public userRole: string;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  /**
   * Logout current user
   */
  public logoutUser(): void {
        this.authenticationService.logout();
        this.router.navigate(['']);
    }

}
