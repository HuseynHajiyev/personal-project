class InternetSpeed < ApplicationRecord
  belongs_to :place
  validates :place_id, :download_units, :download_speed, presence: true
  after_save :update_place_speeds

  private

  def update_place_speeds
    place = self.place
    place.avg_download_speed = avg_download_speed(place)
    place.most_frequent_units = most_frequent_units(place)
    place.number_of_measurements = number_of_measurements(place)
    place.save
  end

  def avg_download_speed(place)
    (place.internet_speeds.where(download_units: most_frequent_units(place)).map(&:download_speed).sum / place.internet_speeds.count).round(2)
  end

  def most_frequent_units(place)
    place.internet_speeds.pluck(:download_units).max_by { |speed_unit| yield_self.count(speed_unit) }
  end

  def number_of_measurements(place)
    place.internet_speeds.count
  end
end
