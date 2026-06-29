import { expect, Page } from '@playwright/test';

export class LoginAssertions {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async shouldShowLoginError() {
    await expect(this.page.getByText('Email e/ou senha inválidos')).toBeVisible();
  }

  async shouldBeLoggedIn() {
    await expect(this.page).toHaveURL(/home/);
  }
}