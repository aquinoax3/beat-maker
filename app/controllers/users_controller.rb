class UsersController < ApplicationController
  # before_action :set_user, only: [:show, :update, :destroy]
  # before_action :authorize
  # skip_before_action :authorize, only:[:index, :show]
  
  
  # GET /users
  def index
    @users = User.all
    render json: @users, status: :ok
  end

  # GET /users/1
  def show
    @user = set_user
    if @user
      render json: @user, status: :ok
    else
      render json: {error: "User not found"}, status: :not_found
  end

  # POST /users
  def create
    
    @user = User.create!(user_params)
    
    if @user
      render json: @user, status: :created, location: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /users/1
  def update
    if @user.update(set_user)
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
      params.permit(:username, :password)
    end
end
