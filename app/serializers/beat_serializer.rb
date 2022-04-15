class BeatSerializer < ActiveModel::Serializer
  attributes :id, :sound_id, :user_id, :beatname
  has_one :sound
  has_one :user
  
end
