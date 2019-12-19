Rails.application.routes.draw do
  get 'foods/get'
  get '/api/foods', to: 'foods#get'
  post 'api/users' => 'users#create_user'
  get 'api/users/:user_id' => 'users#get_by_id'
  post 'api/users/:user_id' => 'users#update_by_id'
  delete 'api/users/:user_id' => 'users#delete_by_id'
  post 'api/auth/get_token' => 'users#get_token'

  get '*path', to: "application#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end
end
