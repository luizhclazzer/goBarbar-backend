import { container } from 'tsyringe';

import IMailTemplateProvider from './models/IMailTemplateProvider';
import HandlebarsMailTemplateProvider from './implementations/HandlebarsMailTemplateProvider';

const providers = {
  hadlebars: HandlebarsMailTemplateProvider,
};

container.registerSingleton<IMailTemplateProvider>(
  'MailTemplateProvider',
  providers.hadlebars,
);
