# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

pets = Pet.create([{name: 'Winston', breed: 'Mixed', age: '3', location_id: 1}, {name: 'daisy', breed: "pitbull", age: '5', location_id: 2}])

locations = Location.create([{name: "Animal Foundation", phonenumber: "702-555-1111"}, {name: "Lied", phonenumber: "702-555-1111"}, {name: "Henderson Animal Shelter", phonenumber: "702-555-1111" }])