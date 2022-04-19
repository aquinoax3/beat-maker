class CreateSoundsPerKits < ActiveRecord::Migration[6.1]
  def change
    create_table :sounds_per_kits do |t|
      t.references :sound
      t.references :kit

      t.timestamps
    end
  end
end
