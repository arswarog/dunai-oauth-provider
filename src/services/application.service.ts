import { IApplication } from './application.interface';
import { Service } from '@dunai/core';

@Service()
export class ApplicationService {
    public getApp(id: string): IApplication {
        return null;
    }
}
