class SessionController < ApplicationController
  def new
  end

  def create
    user = User.find_by(email: params[:session][:email].downcase)
    log_in user if user&.authenticate(params[:session][:password])
  end

  def destroy
    log_out if logged_in?
  end

end
