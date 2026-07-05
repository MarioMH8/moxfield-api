import { z } from 'zod';

import { BoardSchema } from '../board';
import { BoardTypeSchema } from '../board-type';

const BoardsSchema = z.partialRecord(BoardTypeSchema, BoardSchema);

export default BoardsSchema;
