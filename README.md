# README

Run locally command: ```heroku local -f Procfile.dev```

Heroku deployed link: https://pure-brushlands-46298.herokuapp.com/account


This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...


    post 'api/users' => 'users#create_user'
    get 'api/users/:user_id' => 'users#get_by_id'
    post'api/auth/get_token' => 'users#get_token'
