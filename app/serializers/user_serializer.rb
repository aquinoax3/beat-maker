class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password, :profile, :image
  has_many :beats
end
