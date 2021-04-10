import mongoose from 'mongoose'
import CitySchema from './../models/city'
import SpecialtySchema from './../models/specialty'
import CompanySchema from './../models/company'
import cities from './../../data/cities'
import specialties from './../../data/specialties'
import companies from './../../data/companies'
import uuid4 from 'uuid4'

function onInsert (err, docs) {
  if (err) {
    // TODO: handle error
    console.log(err)
  } else {
    console.info('%d items were successfully stored.', docs.length)
  }
}

const populateCities = () => {
  const CityModel = mongoose.model('City', CitySchema)

  return new Promise((resolve, reject) => {
    CityModel.collection
    .countDocuments()
    .then(count => {
      if (count > 0) {
        console.log('Cities collection already populated')
        return resolve()
      }

      const preparedData = cities.map(item => {
        return {
          id: uuid4(),
          cityName: item
        }
      })

      CityModel.collection.insertMany(preparedData, onInsert)
    })
    .catch(ex => {
      console.log(`There was an error accessing database ${ex}`)
      reject()
    })
  })
}

const populateSpecialties = () => {
  const SpecialtyModel = mongoose.model('Specialty', SpecialtySchema)

  return new Promise((resolve, reject) => {
    SpecialtyModel.collection
      .countDocuments()
      .then(count => {
        if (count > 0) {
          console.log('Specialties collection already populated')
          return resolve()
        }

        const preparedData = specialties.map(item => {
          return {
            id: uuid4(),
            specialtyName: item
          }
        })

        SpecialtyModel.collection.insertMany(preparedData, onInsert)
      })
      .catch(ex => {
        console.log(`There was an error accessing database ${ex}`)
        reject()
      })
  })
}

const populateCompanies = () => {
  const CompanyModel = mongoose.model('Company', CompanySchema)

  return new Promise((resolve, reject) => {
    CompanyModel.collection
    .countDocuments()
    .then(count => {
      if (count > 0) {
        console.log('Companies collection already populated')
        return resolve()
      }

      console.log(companies)

      const preparedData = companies.map(item => {
        return {
          company_name: item.company_name,
          specialty: item.specialty,
          city: item.city
        }
      })

      CompanyModel.collection.insertMany(preparedData, onInsert)
    })
    .catch(ex => {
      console.log(`There was an error accessing database ${ex}`)
      reject()
    })
  })
}

export const run = () => {
  Promise.all([
    populateCities(),
    populateSpecialties(),
    populateCompanies()
  ])
}
