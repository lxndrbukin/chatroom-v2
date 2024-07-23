import { connect } from 'mongoose';
import { keys } from '../keys';

export const mongoDB = () => {
  connect(keys.mongoDB)
    .then(() => console.log('CONNECTED TO MONGODB'))
    .catch((error) => console.log(error));
};
