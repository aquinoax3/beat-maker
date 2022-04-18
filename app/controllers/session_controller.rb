class SessionController < ApplicationController

    def show
        
        # find user by using username params
        user = User.find_by(username: params[:username])
        
        # save the user's ID to the session hash
        session[:user_id] = user.id
        
        # render the user as a json file
        render json: user
    end


    def destroy

        # removes user id from the session hash
        session.delete :user_id

        # returns an empty response 
        head :no_content
    end
end
