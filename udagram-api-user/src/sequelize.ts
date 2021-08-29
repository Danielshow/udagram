import {Sequelize} from 'sequelize-typescript';
import {config} from './config/config';


console.log(config.host, config.username, config.password, config.database);
export const sequelize = new Sequelize({
  'username': config.username,
  'password': config.password,
  'database': config.database,
  'host': config.host,

  'dialect': config.dialect,
  'storage': ':memory:',
});
