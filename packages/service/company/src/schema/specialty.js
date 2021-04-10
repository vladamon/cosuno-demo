import { Specialty, SpecialtyTC } from '../models/specialty.js';

export const SpecialtyQuery = {
  specialtyById: SpecialtyTC.getResolver('findById'),
  specialtyByIds: SpecialtyTC.getResolver('findByIds'),
  specialtyOne: SpecialtyTC.getResolver('findOne'),
  specialtyMany: SpecialtyTC.getResolver('findMany'),
  specialtyCount: SpecialtyTC.getResolver('count'),
  specialtyConnection: SpecialtyTC.getResolver('connection'),
  specialtyPagination: SpecialtyTC.getResolver('pagination'),
}

export const SpecialtyMutation = {
  cityCreateOne: SpecialtyTC.getResolver('createOne'),
  cityCreateMany: SpecialtyTC.getResolver('createMany'),
  cityUpdateById: SpecialtyTC.getResolver('updateById'),
  cityUpdateOne: SpecialtyTC.getResolver('updateOne'),
  cityUpdateMany: SpecialtyTC.getResolver('updateMany'),
  cityRemoveById: SpecialtyTC.getResolver('removeById'),
  cityRemoveOne: SpecialtyTC.getResolver('removeOne'),
  cityRemoveMany: SpecialtyTC.getResolver('removeMany'),
};