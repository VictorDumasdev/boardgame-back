import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { BoardGameModule } from './board-game/board-game.module';
import { MongooseModule } from '@nestjs/mongoose'

@Module({
  imports: [UsersModule, BoardGameModule, MongooseModule.forRoot('mongodb+srv://baracouda:EgKLBGwS1O2hTmQq@clusterboardgame.tnzfisc.mongodb.net/?retryWrites=true&w=majority')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
