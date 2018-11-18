class AnimalController < ApplicationController
   skip_before_action :verify_authenticity_token


  def index
    render json: Animal.all
  end


  def show
    render json: Animal.find(params["id"])
  end


  def createOne
    render json: Animal.create(params["animal"])
  end


  def delete
    render json: Animal.delete(params["id"])
  end


  def update
    render json: Animal.update(params["id"], params["animal"])
  end

end
