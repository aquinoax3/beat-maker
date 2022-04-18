class SoundSerializer < ActiveModel::Serializer
  attributes :id, :soundname, :sound
  has_many :beats
end
