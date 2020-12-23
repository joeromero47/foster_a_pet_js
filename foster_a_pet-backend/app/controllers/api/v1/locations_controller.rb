class Api::V1::LocationsController < ApplicationController

  def index
    @locations = Api::V1::Location.all
    render json: @locations, except: [:created_at, :updated_at]
  end

  def create
    @location = Api::V1::Location.create(location_params)
    @location.save

    render json: @location, except: [:created_at, :updated_at]
  end


  def show
    location = Location.find(params[:id])
    render json: location
  end

  private
  def location_params
    params.require(:location).permit(:name, :phonenumber)
  end

end
