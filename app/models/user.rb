class User < ApplicationRecord
    has_secure_password
    has_many :beats
    has_many :sounds, through: :beats

    validates :username, :password, presence: true
    validates :username, uniqueness: true
end
