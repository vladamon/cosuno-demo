import mongoose, { Schema } from 'mongoose';
import timestamps from 'mongoose-timestamp';
import { composeWithMongoose } from 'graphql-compose-mongoose';

export const CitySchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true,
    }
  },
  {
      collection: 'cities',
  }
)

CitySchema.plugin(timestamps);

CitySchema.index({ createdAt: 1, updatedAt: 1 });

export const City = mongoose.model('City', CitySchema);
export const CityTC = composeWithMongoose(City);
