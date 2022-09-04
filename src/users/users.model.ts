import * as mongoose from 'mongoose';
import { BoardGame } from 'src/board-game/board-game.model';

export const UserSchema = new mongoose.Schema({
  login           : { type: String, required: true },
  password        : { type: String, required: true },
  nom             : { type: String, required: false },
  prenom          : { type: String, required: false },
});

export interface User extends mongoose.Document {
  id              : string;
  login           : string;
  password        : string;
  nom?            : string;
  prenom?         : string;
  games?          : BoardGame[];
}
