module Api
  module V1
    class PlacesController < ApplicationController
      protect_from_forgery with: :null_session
      def index
        places = Place.all.map do |place|
          {
            name: place.name,
            city: place.city,
            avg_download_speed: avg_download_speed(place),
            download_speed_units: most_frequent_units(place),
            number_of_measurements: number_of_measurements(place)
          }
        end
        render json: { count: InternetSpeed.count, data: places }.to_json
      end

      private

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
  end
end
