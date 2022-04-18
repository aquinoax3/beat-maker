class Sound < ApplicationRecord
    
    has_many :beats
    has_many :users, through: :beats

end
