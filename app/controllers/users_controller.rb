class UsersController < ApplicationController

    before_action :authorize_request, only: [
        :get_by_id, :update_user, :delete_user
    ]


    # will be used to register a new user
    def create_user
        userParams = params.require(:user)
          .permit(:name, :email, :password, :password_confirmation)
        user = User.new(userParams);
        if user.save()
            render json: user, status: :created 
        else
            render json: { errors: user.errors.full_messages }, 
                   status: :unprocessable_entity
        end
    end
 
    # will be used to get details for a given user
    def get_by_id
        # the user_id param comes from our route
        user = User.find(params[:user_id])
        
        if user
            render json: user, status: :ok
        else
            render json: { errors: 'User not found' }, status: :not_found
        end
    end
 
    # will be used to update a users information, 
    # such as name, email or password
    def update_user

    end
 
    # will be used to delete a user, 
    # such as if a user wishes to deactivate their account
    def delete_user
    end
 
    # will be used to verify a users credentials, and will return a
    # JWT for the user if their login details match
    # all 'protected' routes will need to provide the JWT
    # as part of the 'Authorise' request header
    def get_token
        # Get the user by email
        user = User.find_by_email(params[:email])
 
        # return unauthorized if the user was not found
        if !user 
            render json: { error: 'unauthorized' }, status: :unauthorized
            return
        end
 
        # if the user is not authenticated via the authenticate method
        # then return unauthorized
        if !user.authenticate( params[:password] )
            render json: { error: 'unauthorized' }, status: :unauthorized
            return
        end
 
        # if our code gets here, we can generate a token and response.
        # JWT's include an expiry, we will expire the token in 24 hours
        token = jwt_encode({user_id: user.id}, 24.hours.from_now)
        render json: {token: token, exp: 24, username: user.email, userId: user.id},
               status: :ok

    end

end
