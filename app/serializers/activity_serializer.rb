class ActivitySerializer < ActiveModel::Serializer
  attributes :id, :title, :category, :location, :description, :image, :estPrice
end
