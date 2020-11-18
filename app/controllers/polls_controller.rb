class PollsController < ApplicationController
  before_action :current_user

  def index
    @polls = Poll.order("created_at DESC")
  end

  def create
    if logged_in?
      @poll = Poll.new(poll_params)
      @poll.save
    end
  end

  def new
    @isLoggedIn = logged_in?
  end

  private
  def poll_params
    params.require(:poll).permit(:question, :option1, :option2,
    :option3, :option4)
  end
end
