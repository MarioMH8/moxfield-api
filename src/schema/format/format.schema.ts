import { z } from 'zod';

const FormatSchema = z.union([
	z.literal('alchemy'),
	z.literal('brawl'),
	z.literal('commander'),
	z.literal('commanderPrecons'),
	z.literal('duel'),
	z.literal('explorer'),
	z.literal('future'),
	z.literal('gladiator'),
	z.literal('historic'),
	z.literal('historicbrawl'),
	z.literal('legacy'),
	z.literal('modern'),
	z.literal('oathbreaker'),
	z.literal('oldschool'),
	z.literal('pauper'),
	z.literal('paupercommander'),
	z.literal('penny'),
	z.literal('pioneer'),
	z.literal('predh'),
	z.literal('premodern'),
	z.literal('standard'),
	z.literal('standardbrawl'),
	z.literal('timeless'),
	z.literal('vintage'),
]);

export default FormatSchema;
