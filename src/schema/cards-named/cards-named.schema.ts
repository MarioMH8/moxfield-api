import { z } from 'zod';

import { testStrict } from '../../helpers';
import { CardNamedSchema } from '../card-named';

const CardsNamedSchema = z.object({
	cards: z.array(CardNamedSchema),
});

export default testStrict(CardsNamedSchema);
