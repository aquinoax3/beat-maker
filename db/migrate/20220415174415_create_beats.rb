class CreateBeats < ActiveRecord::Migration[6.1]
  def change
    create_table :beats do |t|
      t.references :user
      t.string :name

      t.timestamps
    end
  end
end
