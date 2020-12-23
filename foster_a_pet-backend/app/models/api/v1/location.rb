class Api::V1::Location < ApplicationRecord
  has_many :pets
  validates :name, :phonenumber, presence: true
 
end
