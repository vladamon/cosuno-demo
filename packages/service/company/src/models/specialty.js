import mongoose, { Schema } from 'mongoose';
import timestamps from 'mongoose-timestamp';
import { composeWithMongoose } from 'graphql-compose-mongoose';

export const SpecialtySchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true,
    }
  },
  {
      collection: 'specialties',
  }
)

SpecialtySchema.plugin(timestamps);

SpecialtySchema.index({ createdAt: 1, updatedAt: 1 });

export const Specialty = mongoose.model('Specialty', SpecialtySchema);
export const SpecialtyTC = composeWithMongoose(Specialty);
