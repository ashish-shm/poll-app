class UsersController < ApplicationController
  before_action :current_user

  def new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      render status: :ok, json: { message:  "User is successfully registered!"}
    else
      render status: :unprocessable_entity, json: { error: 'User not created'  }
    end
  end

  private
    def user_params
      params.require(:user).permit(:name, :email, :password,
      :password_confirmation)
    end

     
end
