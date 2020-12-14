Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :toys
      resources :locations
    end
  end
  
  #get '/test', to: 'application#test'
  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
