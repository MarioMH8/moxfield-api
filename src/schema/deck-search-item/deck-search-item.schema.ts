import { z } from 'zod';

import { testStrict } from '../../helpers';
import { AuthorSchema } from '../author';
import { ColorIdentitySchema } from '../color-identity';
import { ColorIdentityPercentagesSchema } from '../color-identity-percentages';
import { ColorPercentagesSchema } from '../color-percentages';
import { VisibilitySchema } from '../visibility';

const DeckSearchItemSchema = z.object({
	areCommentsEnabled: z.boolean(),
	authors: z.array(AuthorSchema),
	authorsCanEdit: z.boolean(),
	autoBracket: z.number().nullish(),
	bookmarkCount: z.coerce.number(),
	bracket: z.number().nullish(),
	colorIdentity: z.array(ColorIdentitySchema),
	colorIdentityPercentages: ColorIdentityPercentagesSchema,
	colorPercentages: ColorPercentagesSchema,
	colors: z.array(ColorIdentitySchema),
	commentCount: z.number(),
	createdAtUtc: z.coerce.date(),
	createdByUser: AuthorSchema,
	format: z.string(),
	hasPrimer: z.boolean(),
	hubNames: z.array(z.string()),
	id: z.string(),
	ignoreBrackets: z.boolean(),
	isLegal: z.boolean(),
	isShared: z.boolean(),
	lastUpdatedAtUtc: z.coerce.date(),
	likeCount: z.number(),
	mainboardCount: z.number(),
	mainCardId: z.string().nullish(),
	mainCardIdIsBackFace: z.boolean(),
	mainCardIdIsCardFace: z.boolean(),
	matchedCards: z.array(z.unknown()),
	matchTypes: z.array(z.string()),
	maybeboardCount: z.number(),
	name: z.string(),
	publicId: z.string(),
	publicUrl: z.url(),
	sfwCommentCount: z.number(),
	sideboardCount: z.number(),
	userBracket: z.number().nullish(),
	viewCount: z.number(),
	visibility: VisibilitySchema,
});

export default testStrict(DeckSearchItemSchema);
