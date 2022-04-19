class SoundsPerKitSerializer < ActiveModel::Serializer
  attributes :id, :sound_id, :kit_id
  has_one :sound
  has_one :kit
end
