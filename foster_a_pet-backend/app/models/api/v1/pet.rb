class Api::V1::Pet < ApplicationRecord
  belongs_to :location
  validates :name, :breed, :age, presence: true
end
