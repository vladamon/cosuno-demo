import { City, CityTC } from '../models/city.js';

export const CityQuery = {
  cityById: CityTC.getResolver('findById'),
  cityByIds: CityTC.getResolver('findByIds'),
  cityOne: CityTC.getResolver('findOne'),
  cityMany: CityTC.getResolver('findMany'),
  cityCount: CityTC.getResolver('count'),
  cityConnection: CityTC.getResolver('connection'),
  cityPagination: CityTC.getResolver('pagination'),
}

export const CityMutation = {
  cityCreateOne: CityTC.getResolver('createOne'),
  cityCreateMany: CityTC.getResolver('createMany'),
  cityUpdateById: CityTC.getResolver('updateById'),
  cityUpdateOne: CityTC.getResolver('updateOne'),
  cityUpdateMany: CityTC.getResolver('updateMany'),
  cityRemoveById: CityTC.getResolver('removeById'),
  cityRemoveOne: CityTC.getResolver('removeOne'),
  cityRemoveMany: CityTC.getResolver('removeMany'),
};