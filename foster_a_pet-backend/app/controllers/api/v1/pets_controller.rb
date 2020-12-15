class Api::V1::PetsController < ApplicationController

  def index
    @pets = Api::V1::Pet.all
    render json: @pets, include: :location
  end


  def create
    @pet = Api::V1::Pet.create(pet_params)
    @pet.save

    render json: @pet, include: :location
  end

  def destroy 
    @pet = Api::V1::Pet.find(params[:id])
    @pet.destroy
    
  end 

  private
  def pet_params
    params.require(:pet).permit(:name, :breed, :age, :location_id)
  end
end
