import { Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

export class LoginFlow {
  readonly loginPage: LoginPage;

  constructor(page: Page) {
    this.loginPage = new LoginPage(page);
  }

  async login(email: string, password: string) {
    await this.loginPage.open();
    await this.loginPage.fillEmail(email);
    await this.loginPage.fillPassword(password);
    await this.loginPage.submit();
  }
}