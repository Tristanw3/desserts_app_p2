Rails.application.routes.draw do
  get 'foods/get'
  get '/api/foods', to: 'foods#get'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
