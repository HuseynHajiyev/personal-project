class Place < ApplicationRecord
  has_many :internet_speeds, dependent: :destroy
  validates :name, :address, :city, presence: true
end
