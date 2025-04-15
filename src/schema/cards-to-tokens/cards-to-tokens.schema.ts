import { z } from 'zod';

const CardsToTokensSchema = z.record(z.string(), z.array(z.string()));

export default CardsToTokensSchema;
