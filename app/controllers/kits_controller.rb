class KitsController < ApplicationController
  before_action :set_kit, only: [:show, :update, :destroy]

  # GET /kits
  def index
    @kits = Kit.all

    render json: @kits
  end

  # GET /kits/1
  def show
    render json: @kit
  end

  # POST /kits
  def create
    @kit = Kit.create!(name: params[:name], user_id: params[:user_id])

    if @kit
      render json: @kit, status: :created, location: @kit
    else
      render json: @kit.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /kits/1
  def update
    if @kit.update(kit_params)
      render json: @kit
    else
      render json: @kit.errors, status: :unprocessable_entity
    end
  end

  # DELETE /kits/1
  def destroy
    @kit
    @kit.destroy
    head :no_content
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_kit
      @kit = Kit.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def kit_params
      params.permit(:name, :user_id)
    end
end
