import { z } from 'zod';

const PricesSchema = z.object({
	ck: z.number().nullish(),
	ck_buy: z.number().nullish(),
	ck_buy_foil: z.number().nullish(),
	ck_foil: z.number().nullish(),
	csi: z.number().nullish(),
	csi_buy: z.number().nullish(),
	csi_buy_foil: z.number().nullish(),
	csi_foil: z.number().nullish(),
	ct: z.number().nullish(),
	ct_foil: z.number().nullish(),
	eur: z.number().nullish(),
	eur_foil: z.number().nullish(),
	lastUpdatedAtUtc: z.coerce.date(),
	scg: z.number().nullish(),
	scg_buy: z.number().nullish(),
	scg_foil: z.number().nullish(),
	scg_foil_buy: z.number().nullish(),
	tix: z.number().nullish(),
	usd: z.number().nullish(),
	usd_foil: z.number().nullish(),
});

export default PricesSchema;
