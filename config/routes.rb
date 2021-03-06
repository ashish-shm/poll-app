Rails.application.routes.draw do
  
  root 'home#index'
  get '/login', to: 'session#new'
  post '/login', to: 'session#create'
  delete '/logout', to: 'session#destroy'
  get '/register', to:'users#new'
  post '/register', to:'users#create'
  
  resources :polls, only: [:new, :create, :index] do
      post '/votes', to: 'votes#create'
  end


  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
