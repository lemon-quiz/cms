import {
  ApiServiceInterface,
  StoreServiceInterface,
} from 'react-miniverse';
import { StoreCacheInterface } from 'react-miniverse/src/interfaces';

interface RequestParamsInterface {
  [key: string]: any;
}

class CacheService {
  public constructor(
    private apiService: ApiServiceInterface,
    private storeService: StoreServiceInterface,
    // eslint-disable-next-line no-empty-function
  ) {
  }

  public get<T>(namespace: string, path: string, params?: RequestParamsInterface, identifier?: string): StoreCacheInterface<T> {
    return this.storeService.cache(
      namespace,
      identifier || path,
      params,
      this.apiService.get(path, params),
    );
  }
}

export default CacheService;
