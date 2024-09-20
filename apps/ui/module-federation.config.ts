import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'ui',
  exposes: {
    './Routes': 'apps/ui/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
