class AddBackgroundToFoods < ActiveRecord::Migration[6.0]
  def change
    add_column :foods, :Background, :string
  end
end
