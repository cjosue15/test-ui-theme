import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { DeepPartial, IConfig } from '@core/models';
import { CORE_CONFIG_TOKEN } from './core-token';
import { filter } from 'rxjs/operators';
import { mergeDeep } from '@core/utils';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private _CONFIG_KEY: string;

  private _configBehavorSubject: BehaviorSubject<IConfig | null>;

  constructor(@Inject(CORE_CONFIG_TOKEN) private _config: IConfig) {
    this._CONFIG_KEY = 'CORE_CONFIG';
    this._configBehavorSubject = new BehaviorSubject<IConfig | null>(null);

    this._initConfig();
  }

  get configObservable$(): Observable<IConfig> {
    return this._configBehavorSubject
      .asObservable()
      .pipe(filter((config: IConfig | null): config is IConfig => !!config));
  }

  get config(): IConfig | null {
    return this._configBehavorSubject.getValue();
  }

  setconfig(newConfig: DeepPartial<IConfig>) {
    const mergedConfig = mergeDeep<IConfig>(this.config, newConfig);

    this._saveConfigInLocalStorage(mergedConfig);
    this._configBehavorSubject.next(mergedConfig);
  }

  private _initConfig(): void {
    let initConfig: IConfig;
    const configFromLocalStorage = this._getConfigFromLocalStorage();

    if (configFromLocalStorage) {
      initConfig = { ...configFromLocalStorage };
    } else {
      initConfig = { ...this._config };
      // set default config
      this._saveConfigInLocalStorage(this._config);
    }

    this._configBehavorSubject.next(initConfig);
  }

  private _getConfigFromLocalStorage(): IConfig | null {
    const rawConfig = localStorage.getItem(this._CONFIG_KEY);
    return rawConfig ? JSON.parse(rawConfig) : null;
  }

  private _saveConfigInLocalStorage(config: IConfig): void {
    if (config) {
      localStorage.setItem(this._CONFIG_KEY, JSON.stringify(config));
    }
  }
}
