import { Injectable } from '@nestjs/common';

import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  constructor(@InjectConnection() private connection: Connection){}

  async onModuleInit(){
    // condicional que devuelve true o false 
    const isConnected = this.connection.readyState === 1;
    console.log(`Estado de conexion: ${isConnected ? "conectado con mongo" : "error al conectar con mongo"}`)
  }
}
