Rails.application.routes.draw do
  
  root "home#index"
  get '/login', to: 'session#new'
  post '/login', to: 'session#create'
  get '/register', to:'users#new'
  post '/register', to:'users#create'


  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
