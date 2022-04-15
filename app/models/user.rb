class User < ApplicationRecord
    has_many :beats
    has_many :sounds, through: :beats
end
