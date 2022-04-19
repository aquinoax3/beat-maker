class SoundsPerKitsController < ApplicationController
  before_action :set_sounds_per_kit, only: [:show, :update, :destroy]

  # GET /sounds_per_kits
  def index
    @sounds_per_kits = SoundsPerKit.all

    render json: @sounds_per_kits
  end

  # GET /sounds_per_kits/1
  def show
    render json: @sounds_per_kit
  end

  # POST /sounds_per_kits
  def create
    @sounds_per_kit = SoundsPerKit.new(sounds_per_kit_params)

    if @sounds_per_kit.save
      render json: @sounds_per_kit, status: :created, location: @sounds_per_kit
    else
      render json: @sounds_per_kit.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /sounds_per_kits/1
  def update
    if @sounds_per_kit.update(sounds_per_kit_params)
      render json: @sounds_per_kit
    else
      render json: @sounds_per_kit.errors, status: :unprocessable_entity
    end
  end

  # DELETE /sounds_per_kits/1
  def destroy
    @sounds_per_kit.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_sounds_per_kit
      @sounds_per_kit = SoundsPerKit.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def sounds_per_kit_params
      params.permit(:id, :sound_id, :kit_id)
    end
end
