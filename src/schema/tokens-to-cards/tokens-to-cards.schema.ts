import { z } from 'zod';

const TokensToCardsSchema = z.record(z.string(), z.array(z.string()));

export default TokensToCardsSchema;
