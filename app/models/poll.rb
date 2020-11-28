class Poll < ApplicationRecord
    has_many :votes
    default_scope -> { order(created_at: :desc) }
end
