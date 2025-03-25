import { Page } from '@playwright/test';

import BasePage from './base-page';

export default class ShoppingCartPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  public getProductsInCart() {
    return this.page.locator('div[data-test="inventory-item-name"]');
  }
}
