class CreateSounds < ActiveRecord::Migration[6.1]
  def change
    create_table :sounds do |t|
      t.string :soundname
      t.string :sound

      t.timestamps
    end
  end
end
