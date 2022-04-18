class User < ApplicationRecord
    has_secure_password
    has_many :beats
    has_many :sounds, through: :beats
end
