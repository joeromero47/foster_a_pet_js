class Api::V1::LocationsController < ApplicationController

  def index
    locations = Location.all
    render json: locations, except: [:created_at, :updated_at]
  end

  def show
    location = Location.find(params[:id])
    render json: location
  end

end