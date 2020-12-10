class Pet < ApplicationRecord
  belongs_to :location
  validates :name, :breed, :age, presence: true
end
