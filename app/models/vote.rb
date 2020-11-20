class Vote < ApplicationRecord
  belongs_to :user
  belongs_to :poll

  # attr_accessor :option1, :option2, :option3, :option4
  

  # def vote_increment(id)
  #   case id
  #   when "option1"
  #     self.increment![:option1]
  #   when "option2"
  #     self.increment![:option2]
  #   when "option3"
  #     self.increment![:option3]
  #   when "option4"
  #     self.increment![:option4]
  #   else
  #     self
  #   end
  # end
end
