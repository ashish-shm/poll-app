class Poll < ApplicationRecord
    has_many :votes
    default_scope -> { order(created_at: :desc) }

    validates :question, presence: true, length: { maximum: 50 }
    validates :option1, presence: true, length: { maximum: 50 }
    validates :option2, presence: true, length: { maximum: 50 }
    validates :option3, presence: true, length: { maximum: 50 }
    validates :option4, presence: true, length: { maximum: 50 }

end
