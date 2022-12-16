class UserSerializer < ActiveModel::Serializer
  attributes :id, :firstName, :lastName, :userName, :age, :email
end
