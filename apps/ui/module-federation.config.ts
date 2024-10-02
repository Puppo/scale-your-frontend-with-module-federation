import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'ui',
  exposes: {
    "./header": "apps/ui/src/app/header/header.component.ts",
    "./footer": "apps/ui/src/app/footer/footer.component.ts",
    "./nav-bar": "apps/ui/src/app/nav-bar/nav-bar.component.ts",
  },
};

export default config;
