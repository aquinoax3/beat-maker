Rails.application.routes.draw do
  
  resources :users
  resources :beats
  resources :sounds

  # route for creating user login
  post "/login", to: "sessions#create"

  # route for logining out 
  delete "/logout", to: "sessions#destroy"

  # route to stay logged in 

  get "/me", to: "users#show"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
