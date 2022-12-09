Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  root 'places#index'

  namespace :api do
    namespace :v1 do
      resources :places
    end
  end

  get '*path', to: 'places#index', via: :all
end
