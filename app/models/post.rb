class Post < ApplicationRecord
  belongs_to :city
  validates :content, presence: true
  validates :title, presence: true, length: { minimum: 1,  maximum: 200 }
end
