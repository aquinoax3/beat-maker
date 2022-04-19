class BeatSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :name
  has_one :user

end
