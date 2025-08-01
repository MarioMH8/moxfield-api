import { z } from 'zod';

import { testStrict } from '../../helpers';

const PricesSchema = z.object({
	ck: z.number().nullish(),
	ck_buy: z.number().nullish(),
	ck_buy_etched: z.number().nullish(),
	ck_buy_etched_qty: z.number().nullish(),
	ck_buy_foil: z.number().nullish(),
	ck_buy_foil_qty: z.number().nullish(),
	ck_buy_qty: z.number().nullish(),
	ck_etched: z.number().nullish(),
	ck_foil: z.number().nullish(),
	csi: z.number().nullish(),
	csi_buy: z.number().nullish(),
	csi_buy_foil: z.number().nullish(),
	csi_buy_foil_qty: z.number().nullish(),
	csi_buy_qty: z.number().nullish(),
	csi_foil: z.number().nullish(),
	ct: z.number().nullish(),
	ct_etched: z.number().nullish(),
	ct_foil: z.number().nullish(),
	eur: z.number().nullish(),
	eur_foil: z.number().nullish(),
	lastUpdatedAtUtc: z.coerce.date(),
	mp: z.number().nullish(),
	mp_etched: z.number().nullish(),
	mp_foil: z.number().nullish(),
	mp_qty: z.number().nullish(),
	scg: z.number().nullish(),
	scg_buy: z.number().nullish(),
	scg_etched: z.number().nullish(),
	scg_etched_buy: z.number().nullish(),
	scg_etched_qty: z.number().nullish(),
	scg_foil: z.number().nullish(),
	scg_foil_buy: z.number().nullish(),
	scg_foil_qty: z.number().nullish(),
	scg_qty: z.number().nullish(),
	tix: z.number().nullish(),
	usd: z.number().nullish(),
	usd_etched: z.number().nullish(),
	usd_foil: z.number().nullish(),
});

export default testStrict(PricesSchema);
