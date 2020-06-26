class CreateContentBlocks < ActiveRecord::Migration[6.0]
  def change
    create_table :content_blocks do |t|
      t.string :text
      t.integer :completable_id

      t.timestamps
    end
  end
end