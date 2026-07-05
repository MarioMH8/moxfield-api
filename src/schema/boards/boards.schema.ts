import { z } from 'zod';

import { BoardSchema } from '../board';
import { BoardTypeSchema } from '../board-type';

const BoardsSchema = z.record(BoardTypeSchema, BoardSchema);

export default BoardsSchema;
