class Post < ApplicationRecord
  belongs_to :city
  validates :content, presence: true
  validates :tile, presence: true, length: { minimum: 1 }, length: { maximum: 200 }
end
