import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'basket',
  exposes: {
    './Routes': 'apps/basket/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
