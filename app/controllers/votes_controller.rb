class VotesController < ApplicationController
  before_action :current_user
  
  def create
    if logged_in? && !has_voted(params[:id])
      @vote = current_user.votes.create(poll_id: params[:id])
      @vote.params[:option] += 1 #Increment the vote
      render json: @vote
    end


    
  end

  private
    def has_voted(id)
      temp = Vote.find_by(poll_id: id)
      if temp.user_id == current_user.id
        return true
      else
        return false
      end

    end
end
