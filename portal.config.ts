/**
 * This portal's configuration: the only file a fork needs to edit.
 * What each field means: src/config.ts. Check it against the live API with
 * `npm run check`.
 *
 * Puerto Princesa City and the Province of Palawan, run by BetterPuertoPrincesa
 * at https://budget.betterpuertoprincesa.org.
 *
 * Puerto Princesa is a highly urbanised city, independent of the province, but
 * it has no legislative district or DPWH office of its own: it votes with, and
 * is built for by, Palawan's 3rd district. So the scope is Palawan's three
 * district engineering offices (every DPWH line listed under them), plus every
 * line in the four programs whose title names Palawan or Puerto Princesa
 * (Central Office projects, farm-to-market roads, health facilities,
 * irrigation), kept to MIMAROPA.
 */
import { defineConfig } from './src/config';

export default defineConfig({
  id: 'puerto-princesa-palawan',
  kind: 'province',
  kindLabel: 'City and province',
  name: 'Puerto Princesa City and Palawan',
  shortName: 'Puerto Princesa and Palawan',
  logo: '/brand/betterpuertoprincesa-logo.svg',
  operator: { name: 'BetterPuertoPrincesa', url: 'https://betterpuertoprincesa.org' },
  siteUrl: 'https://budget.betterpuertoprincesa.org',
  scope: {
    offices: [
      'Palawan 1st District Engineering Office',
      'Palawan 2nd District Engineering Office',
      'Palawan 3rd District Engineering Office',
    ],
    places: [
      { label: 'Puerto Princesa', region: 'MIMAROPA' },
      { label: 'Palawan', region: 'MIMAROPA' },
    ],
    districts: ['leg:palawan:1st', 'leg:palawan:2nd', 'leg:palawan:3rd'],
    exclude: [],
  },
  reporting: { enabled: false },
});
