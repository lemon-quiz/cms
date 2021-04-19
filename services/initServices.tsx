import {
  ApiService,
  ApiServiceInterface,
  CookiesService,
  StoreService,
} from 'react-miniverse';

import AccountsService from './accounts.service';
import CacheService from './cache.service';
import SnackbarService from './snackbar.service';

export default function initServices() {
  const storeService = new StoreService();
  const cookiesService = new CookiesService();
  const apiInstance = new ApiService(cookiesService);
  const cacheService = new CacheService(apiInstance, storeService);

  const accountsService = new AccountsService(apiInstance, storeService, cookiesService, cacheService);
  const snackbarService = new SnackbarService();

  return {
    cookiesService,
    apiInstance,
    accountsService,
    storeService,
    snackbarService,
  };
}

export interface ServicesModule {
  cookiesService: CookiesService;
  apiInstance: ApiServiceInterface;
  accountsService: AccountsService;
  storeService: StoreService;
  snackbarService: SnackbarService;
}
