class SoundSerializer < ActiveModel::Serializer
  attributes :id, :name, :sound, :key
  has_many :kits
end
