class PostsController < ApplicationController
    def index
        @posts = City.find(params[:city_id]).posts
        render json: @posts

    end

    def show
        @post = Post.find(params[:id])
        render json: @post 
    end 

   
end
