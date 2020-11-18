class PollsController < ApplicationController
  def index
  end

  def create
    @isLoggedIn = logged_in?
  end

  def new
    @isLoggedIn = logged_in?
  end
end
