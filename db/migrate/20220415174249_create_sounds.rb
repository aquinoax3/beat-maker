class CreateSounds < ActiveRecord::Migration[6.1]
  def change
    create_table :sounds do |t|
      t.string :name
      t.string :sound
      t.string :key

      t.timestamps
    end
  end
end
