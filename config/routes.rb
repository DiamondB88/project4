Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/animal', to: 'animal#index'
  get '/animal/:id', to: 'animal#show'
  post '/animal', to: 'animal#createOne'
  delete '/animal/:id', to: 'animal#delete'
  put '/animal/:id', to: 'animal#update'
end
