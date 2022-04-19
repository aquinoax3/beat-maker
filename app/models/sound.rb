class Sound < ApplicationRecord
    
    has_many :sounds_per_kits
    has_many :kits, through: :sounds_per_kits

end
