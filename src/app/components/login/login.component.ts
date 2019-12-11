import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthenticationService } from '../../shared/services/authentication.service';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';

/**
 * Login Component - Login Forn Behaviour
 */
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public loading = false;
  public submitted = false;
  public error = '';

  /**
   * Constructor
   * @param formBuilder - Reference to build a form
   */
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthenticationService,
    private router: Router,
  ) { }

  /**
   * Life cycle hook
   */
  ngOnInit() {
    this.createForm();
  }

  /**
   * Create Login Form
   */
  private createForm(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  /**
   * Getter to easily access form fields
   */
  get fieldDetails() {
    return this.loginForm.controls;
  }

  /**
   * On Submit of login page
   */
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }

    this.loading = true;
    this.authService.login(this.fieldDetails.username.value, this.fieldDetails.password.value)
        .pipe(first())
        .subscribe(data => {
            if (data.length) {
              this.naviiagateUserBasedOnRole(data[0]);
            } else {
              this.error = 'Authentication Failed!';
              this.loading = false;
            }
            },
            error => {
                this.error = 'Authentication Failed!';
                this.loading = false;
            });
}

  /**
   * To navigate user based on role
   */
  private naviiagateUserBasedOnRole(userData): void {
    if (userData.role === 'admin') {
      this.router.navigate(['admin']);
    } else if (userData.role === 'agent') {
      this.router.navigate(['agent']);
    } else {
      this.router.navigate(['/']);
    }
  }

}
