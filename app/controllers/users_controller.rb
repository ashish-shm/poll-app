class UsersController < ApplicationController
  before_action :current_user

  def new
  end

  def create
    @user = User.new(user_params)
    log_in @user if @user.save
  end

  private
    def user_params
      params.require(:user).permit(:name, :email, :password,
      :password_confirmation)
    end

     
end
