class Place < ApplicationRecord
  has_many :internet_speeds, dependent: :destroy
end
