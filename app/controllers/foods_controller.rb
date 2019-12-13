class FoodsController < ApiController
  def get
    render json: Food.all.as_json, status: 200
  end
end
