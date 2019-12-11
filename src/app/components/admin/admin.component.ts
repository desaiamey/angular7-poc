import { Component, OnInit } from '@angular/core';
/**
 * Admin component - To render the admin view
 */
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  public role: string;
  constructor() { }

  /**
   * Life cycle hook
   */
  ngOnInit() {
    this.role = 'Admin';
  }

}
