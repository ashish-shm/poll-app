class VotesController < ApplicationController
  before_action :current_user
  
  def create
    puts params[:poll_id]
    puts params[:option]
    if logged_in? && !has_voted(params[:poll_id])
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
        render status: :ok, json: { data: { vote: @vote } }
      end
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
      temp = Vote.find_by(poll_id: id)
      if temp && temp.user_id == current_user.id
        return true
      else
        return false
      end

    end

    # def vote_params
    #   params.require(:vote).permit(:poll_id, :option1, :option2, :option3, :option4, :user_id)
    # end
end
