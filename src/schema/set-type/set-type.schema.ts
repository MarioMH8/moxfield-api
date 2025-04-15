import { z } from 'zod';

const SetTypeSchema = z.union([
	z.literal('alchemy'),
	z.literal('archenemy'),
	z.literal('arsenal'),
	z.literal('box'),
	z.literal('commander'),
	z.literal('core'),
	z.literal('draft_innovation'),
	z.literal('duel_deck'),
	z.literal('expansion'),
	z.literal('from_the_vault'),
	z.literal('funny'),
	z.literal('masterpiece'),
	z.literal('masters'),
	z.literal('memorabilia'),
	z.literal('minigame'),
	z.literal('planechase'),
	z.literal('premium_deck'),
	z.literal('promo'),
	z.literal('spellbook'),
	z.literal('starter'),
	z.literal('token'),
	z.literal('treasure_chest'),
	z.literal('vanguard'),
]);

export default SetTypeSchema;
