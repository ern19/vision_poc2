
class FacilitiesController < ApplicationController
    before_action :authenticate_user!

    def index
        @facilities = Facility.all
        render json: @slides
    end

    def show
        @facility = Facility.find(params[:id])
        render json: @facility 
    end
    
    def create
        @facility = Facility.create!(facility_params)
        render json: @facility
    end
    
    def update
        @facility = Facility.find(params[:id])
        if @facility.update(facility_params)
            render json: @facility
        else
            render json: @facility.errors, status: :unprocessable_entity
        end
    end

    def destroy
        @facility = Facility.find(params[:id].delete)
        render status: :ok
    end

    private
    def facility_params
        params.require(:facility).permit(:name, :location)
    end
end