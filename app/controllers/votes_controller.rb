class VotesController < ApplicationController
  before_action :current_user
  
  def create
    puts params[:poll_id]
    puts params[:option]

    if !logged_in?
      render status: :forbidden, json: { message: { error: "User is not logged in" } }

    end

    if !has_voted(params[:poll_id])
      @vote = Vote.new
        @vote.poll_id =  params[:poll_id]
        @vote.user_id = current_user.id
        # @vote.option1 ||= 0
        # @vote.option2 ||= 0
        # @vote.option3 ||= 0
        # @vote.option4 ||= 0
      # @vote.params[:option] += 1 
      
      #Increment the vote
      vote_increment(params[:option])
      # votes_data = Vote.where(poll_id: params[:poll_id])
          
        if @vote.save
          votes = Vote.where(poll_id: params[:poll_id])
          votes_count_data = Hash.new(0)
          votes_count_data["option1"] = votes.sum(:option1)
          votes_count_data["option2"] = votes.sum(:option2)
          votes_count_data["option3"] = votes.sum(:option3)
          votes_count_data["option4"] = votes.sum(:option4)
          render status: :ok, json: { vote_data: { votes: votes_count_data } }
        end
    else
      render status: :forbidden, json: { message: { error: "User has already voted" } }

    end
  end


  def vote_increment(id)
    case id
    when "option1"
      @vote.option1 +=1
    when "option2"
      @vote.option2 +=1
    when "option3"
      @vote.option3 +=1
    when "option4"
      @vote.option4 +=1
    else
      @vote
    end
  end

  private
    def has_voted(id)
      temp = Vote.find_by(poll_id: id, user_id: current_user.id)
      if temp
        return true
      else
        return false
      end

    end

    # def vote_params
    #   params.require(:vote).permit(:poll_id, :option1, :option2, :option3, :option4, :user_id)
    # end
end
