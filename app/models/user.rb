class User < ApplicationRecord
    has_secure_password
    has_many :kits
    has_many :beats

    validates :username, :password, presence: true, on: :create
    validates :username, uniqueness: true
end
