Rails.application.routes.draw do
  root to: "static_pages#index"
  get '/about', to: 'static_pages#about'
  get '/gallery', to: 'static_pages#gallery'
  get '/projects', to: 'static_pages#projects'
  
  resources :contacts, only: [:new, :create]

  if Rails.env.development?
    mount LetterOpenerWeb::Engine, at: "/letter_opener"
  end
end
