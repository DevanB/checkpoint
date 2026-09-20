# frozen_string_literal: true

class CreateGames < ActiveRecord::Migration[8.1]
  def change
    create_table :games do |t|
      t.string :title
      t.string :cover_image_url
      t.integer :release_year
      t.string :external_api_id

      t.timestamps
    end
    add_index :games, :external_api_id
  end
end
