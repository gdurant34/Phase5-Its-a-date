class DaytSerializer < ActiveModel::Serializer
  attributes :id, :time, :location, :confirmed, :category, :comment
end
