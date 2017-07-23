import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent  {
  @Input() loginAfterRegister: any;
  @Input() userLabel: any;
  @Input() showLogout: any;
  @Output() postRegister = new EventEmitter();
  @Output() postLogin = new EventEmitter();
  private loginMode = 'login'; // login, register
  constructor(private authenticationService: AuthenticationService) { }


  changeLoginMode(e: any, mode: any) {
    e.preventDefault();
    e.stopPropagation();
    this.loginMode = mode;
  }

  logout() {
      this.authenticationService.logout();
  }

getAccessToken(): boolean {
  if (this.authenticationService.getAccessToken() === '') {
    return false;
  } else {
  return true;
  }
  }
}
