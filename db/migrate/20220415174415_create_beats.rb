class CreateBeats < ActiveRecord::Migration[6.1]
  def change
    create_table :beats do |t|
      t.references :sound
      t.references :user
      t.string :beatname

      t.timestamps
    end
  end
end
