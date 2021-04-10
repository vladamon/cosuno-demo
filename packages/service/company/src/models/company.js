import mongoose, { Schema } from 'mongoose';
import timestamps from 'mongoose-timestamp';
import { composeWithMongoose } from 'graphql-compose-mongoose';

export const CompanySchema = new Schema({
    companyName: {
        type: String,
        trim: true,
        required: true,
    },
    specialty: {
        type: String,
        lowercase: true,
        trim: true,
        required: true,
    },
    city: {
      type: String,
      lowercase: true,
      trim: true,
      required: true,
    },
  },
  {
      collection: 'companies',
  }
)

CompanySchema.plugin(timestamps);

CompanySchema.index({ createdAt: 1, updatedAt: 1 });

export const Company = mongoose.model('Company', CompanySchema);
export const CompanyTC = composeWithMongoose(Company);
