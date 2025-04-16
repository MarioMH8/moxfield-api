import { z } from 'zod';

import { AffiliatesSchema } from '../affiliates';
import { AuthorSchema } from '../author';
import { AuthorTagsSchema } from '../author-tags';
import { BoardsSchema } from '../boards';
import { CardSchema } from '../card';
import { CardsToTokensSchema } from '../cards-to-tokens';
import { ColorIdentitySchema } from '../color-identity';
import { ColorIdentityPercentagesSchema } from '../color-identity-percentages';
import { ColorPercentagesSchema } from '../color-percentages';
import { FolderSchema } from '../folder';
import { FormatSchema } from '../format';
import { HubSchema } from '../hub';
import OriginalDeckSchema from '../original-deck/original-deck.schema';
import { TokenMappingsSchema } from '../token-mappings';
import { TokensToCardsSchema } from '../tokens-to-cards';
import { ViewSettingsSchema } from '../view-settings';
import { VisibilitySchema } from '../visibility';

const DeckListSchema = z
	.object({
		affiliates: AffiliatesSchema,
		allowPrimerClone: z.boolean(),
		areCommentsEnabled: z.boolean(),
		authors: z.array(AuthorSchema),
		authorsCanEdit: z.boolean(),
		authorTags: AuthorTagsSchema,
		autoBracket: z.number().nullish(),
		boards: BoardsSchema,
		bracket: z.number().nullish(),
		cardsToTokens: CardsToTokensSchema,
		colorIdentity: z.array(ColorIdentitySchema),
		colorIdentityPercentages: ColorIdentityPercentagesSchema,
		colorPercentages: ColorPercentagesSchema,
		colors: z.array(ColorIdentitySchema),
		commentCount: z.number(),
		createdAtUtc: z.coerce.date(),
		createdByUser: AuthorSchema,
		description: z.string(),
		enableMultiplePrintings: z.boolean(),
		exportId: z.string().uuid(),
		folder: FolderSchema.nullish(),
		format: FormatSchema,
		hubs: z.array(HubSchema),
		id: z.string(),
		ignoreBrackets: z.boolean(),
		includeBasicLandsInPrice: z.boolean(),
		includeCommandersInPrice: z.boolean(),
		includeSignatureSpellsInPrice: z.boolean(),
		isShared: z.boolean(),
		isTooBeaucoup: z.boolean(),
		lastUpdatedAtUtc: z.coerce.date(),
		likeCount: z.number(),
		main: CardSchema.nullish(),
		mainCardIdIsBackFace: z.boolean(),
		media: z.array(z.never()),
		name: z.string(),
		originalDeck: OriginalDeckSchema.nullish(),
		ownerUserId: z.string(),
		publicId: z.string(),
		publicUrl: z.string().url(),
		requestedAuthors: z.array(AuthorSchema),
		sfwCommentCount: z.number(),
		tokenMappings: TokenMappingsSchema,
		tokens: z.array(CardSchema),
		tokensToCards: TokensToCardsSchema,
		userBracket: z.number().nullish(),
		version: z.number(),
		viewCount: z.number(),
		viewSettings: ViewSettingsSchema.nullish(),
		visibility: VisibilitySchema,
	})
	.strict();

export default DeckListSchema;
