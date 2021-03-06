class UsersController < ApplicationController
  # before_action :set_user, only: [:show, :update, :destroy]
  skip_before_action :authorize, only:[:index, :show, :create]
  
  
  # GET /users
  def index
    @users = User.all
    render json: @users, status: :ok
  end

  # GET /users/1
  def show
    @user = User.find(session[:user_id])
    
    if @user
      render json: @user, status: :ok
    else
      render json: {error: "User not found"}, status: :not_found
    end
  end

  # POST /users
  def create
    # byebug
    
    # This is sign up this creates the user
    @user = User.create!(user_params)
    
    if @user
      render json: @user, status: :created, location: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /users/1
  def update
    @user = User.find(params[:id])
    @user.profile = params[:profile]
    if @user.save
      render json: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # DELETE /users/1
  def destroy
    @user = set_user
    @user.destroy
    head :no_content
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def user_params
      params.permit(:id, :username, :password, :profile, :image)
    end
end