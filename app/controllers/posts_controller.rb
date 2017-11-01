class PostsController < ApplicationController
    def index
        @posts = City.find(params[:city_id]).posts
        render json: @posts

    end

end
