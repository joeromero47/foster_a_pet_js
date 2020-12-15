class CreateApiV1Pets < ActiveRecord::Migration[6.0]
  def change
    create_table :api_v1_pets do |t|
      t.string :name
      t.string :breed
      t.string :age
      t.string :location_id
    end
  end
end
