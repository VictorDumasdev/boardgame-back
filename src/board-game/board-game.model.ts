import * as mongoose from 'mongoose';

export const BoardGameSchema = new mongoose.Schema({
  name           : { type: String, required: true },
  players        : { type: String, required: true },
  playtime       : { type: String, required: true },
  rulesUrl       : { type: String, required: false },
  description    : { type: String, required: false },
});

export interface BoardGame extends mongoose.Document {
  id              : string;
  name            : string;
  players         : string;
  playtime        : string;
  rulesUrl?       : string;
  description?    : string;
}
