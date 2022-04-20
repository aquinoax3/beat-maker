class Kit < ApplicationRecord
    has_many :sounds_per_kits
    has_many :sounds, through: :sounds_per_kits
    belongs_to :user, optional: true
    
end
