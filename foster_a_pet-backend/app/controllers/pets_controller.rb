class PetsController < ApplicationController

  def index
    pets = Pet.all
    render json: pets, include: :location
  end

  def show
    @pet = Pet.find_by_id(params[:id])
    render json: @pet
  end

  def create
    pet = Pet.new(pet_params)
    if pet.save
      render json: pet, include: :location
    else
      render json: pet.errors.full_messages
    end
  end

  def destroy 
    pet = Pet.find(params[:id])
    pet.destroy
    
  end 

  private
  def pet_params
    params.require(:pet).permit(:name, :breed, :age, :location_id)
  end
end
