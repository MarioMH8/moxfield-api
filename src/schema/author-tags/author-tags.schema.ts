import { z } from 'zod';

const AuthorTagsSchema = z.record(z.string(), z.array(z.string()));

export default AuthorTagsSchema;
