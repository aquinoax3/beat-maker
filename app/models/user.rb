class User < ApplicationRecord
    has_secure_password
    has_many :kits, dependent: :destroy
    has_many :beats

    validates :username, :password, presence: true
    validates :username, uniqueness: true
end
