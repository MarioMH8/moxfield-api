import { z } from 'zod';

import { CardFaceSchema } from '../card-face';
import { ColorIdentitySchema } from '../color-identity';
import { LegalitiesSchema } from '../legalities';
import { MeldPartSchema } from '../meld-part';
import { MeldResultSchema } from '../meld-result';
import { PricesSchema } from '../prices';
import { RaritySchema } from '../rarity';
import { SetTypeSchema } from '../set-type';

const CardSchema = z
	.object({
		acorn: z.boolean(),
		arena_id: z.number().nullish(),
		artist: z.string().nullish(),
		attraction_lights: z.array(z.number()).nullish(),
		border_color: z.string(),
		card_faces: z.array(CardFaceSchema),
		cardHoarderUrl: z.string().url().nullish(),
		cardkingdom_etched_id: z.number().nullish(),
		cardkingdom_foil_id: z.number().nullish(),
		cardkingdom_id: z.number().nullish(),
		cardKingdomEtchedUrl: z.string().nullish(),
		cardKingdomFoilUrl: z.string().nullish(),
		cardKingdomUrl: z.string().nullish(),
		cardmarket_id: z.number().nullish(),
		cardMarketUrl: z.string().url().nullish(),
		cardTraderEtchedUrl: z.string().url().nullish(),
		cardTraderFoilUrl: z.string().url().nullish(),
		cardTraderUrl: z.string().url().nullish(),
		cmc: z.number(),
		cn: z.string(),
		color_identity: z.array(ColorIdentitySchema),
		color_indicator: z.array(ColorIdentitySchema),
		colors: z.array(ColorIdentitySchema),
		colorshifted: z.boolean(),
		content_warning: z.boolean(),
		coolStuffIncFoilUrl: z.string().url().nullish(),
		coolStuffIncUrl: z.string().url().nullish(),
		defaultFinish: z.string(),
		digital: z.boolean(),
		edhrec_rank: z.number().nullish(),
		etched: z.boolean(),
		flavor_name: z.string().nullish(),
		flavor_text: z.string().nullish(),
		foil: z.boolean(),
		frame: z.string(),
		frame_effects: z.array(z.string()).nullish(),
		glossy: z.boolean(),
		has_arena_legal: z.boolean(),
		has_multiple_editions: z.boolean(),
		id: z.string(),
		image_seq: z.number(),
		isArenaLegal: z.boolean(),
		isPauperCommander: z.boolean(),
		isToken: z.boolean(),
		lang: z.string(),
		latest: z.boolean(),
		layout: z.string(),
		legalities: LegalitiesSchema,
		loyalty: z.string().nullish(),
		mana_cost: z.string().nullish(),
		meld_part: MeldPartSchema.nullish(),
		meld_result: MeldResultSchema.nullish(),
		mtgo_id: z.number().nullish(),
		multiverse_ids: z.array(z.number()).nullish(),
		name: z.string(),
		nonfoil: z.boolean(),
		oracle_text: z.string().nullish(),
		power: z.string().nullish(),
		prices: PricesSchema,
		printed_name: z.string().nullish(),
		printed_text: z.string().nullish(),
		printed_type_line: z.string().nullish(),
		promo_types: z.array(z.string()),
		rarity: RaritySchema,
		released_at: z.coerce.date().nullish(),
		reprint: z.boolean(),
		reserved: z.boolean(),
		scryfall_id: z.string().uuid(),
		set: z.string(),
		set_name: z.string(),
		set_type: SetTypeSchema.nullish(),
		starcitygames_etched_sku: z.string().nullish(),
		starcitygames_etched_url: z.string().url().nullish(),
		starcitygames_foil_sku: z.string().nullish(),
		starcitygames_foil_url: z.string().url().nullish(),
		starcitygames_sku: z.string().nullish(),
		starcitygames_url: z.string().url().nullish(),
		tcgplayer_id: z.number().nullish(),
		tcgPlayerUrl: z.string().url().nullish(),
		toughness: z.string().nullish(),
		type: z.string().nullish(),
		type_line: z.string().nullish(),
		uniqueCardId: z.string(),
	})
	.strict();

export default CardSchema;
