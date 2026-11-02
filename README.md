# Puerto Princesa and Palawan Budget Portal

**[budget.betterpuertoprincesa.org](https://budget.betterpuertoprincesa.org)**, run by
[BetterPuertoPrincesa](https://betterpuertoprincesa.org).

Every FY 2027 budget project for Puerto Princesa City and the Province of Palawan (the
NEP and the House bill, with the source page for each figure), and the enacted budgets
of 2020 to 2026 for the same area. Data from the
[BetterGov.ph Budget API](https://budget.bettergov.ph/docs).

This is a fork of [bettergovph/transparency-portal](https://github.com/bettergovph/transparency-portal).
How the portal works, its rules, and how to make one for another LGU are documented there.

## Scope

Set in [`portal.config.ts`](portal.config.ts):

- **DPWH offices:** Palawan 1st, 2nd and 3rd District Engineering Offices.
- **Place names:** project titles naming "Puerto Princesa" or "Palawan" (MIMAROPA).
- **Districts:** Palawan 1st, 2nd and 3rd legislative districts. Puerto Princesa has no
  district or DPWH office of its own; it is in Palawan's 3rd district.

## Development

```bash
npm install
npm run check     # verify the config against the live API
npm run dev       # http://localhost:5132
npm run build     # static files in dist/
```

Deployed on Vercel (`vercel.json`), with the custom domain `budget.betterpuertoprincesa.org`.

## Licence

MIT, as the original. See [LICENSE](LICENSE).
