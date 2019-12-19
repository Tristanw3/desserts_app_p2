class CreateOrderItems < ActiveRecord::Migration[6.0]
  def change
    create_table :order_items do |t|
      t.integer :food_id
      t.integer :order_id

      t.timestamps
    end
  end
end
