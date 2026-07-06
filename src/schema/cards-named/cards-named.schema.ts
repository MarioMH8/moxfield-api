import { z } from 'zod';

import { CardNamedSchema } from '../card-named';

const CardsNamedSchema = z.object({
	cards: z.array(CardNamedSchema),
});

export default CardsNamedSchema;
