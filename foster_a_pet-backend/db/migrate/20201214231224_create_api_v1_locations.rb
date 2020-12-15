class CreateApiV1Locations < ActiveRecord::Migration[6.0]
  def change
    create_table :api_v1_locations do |t|
      t.string :name
      t.string :phonenumber
    end
  end
end
