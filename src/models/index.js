// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Pathway, PathwayPitstop } = initSchema(schema);

export {
  Pathway,
  PathwayPitstop
};