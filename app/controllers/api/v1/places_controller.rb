# frozen_string_literal: true

module Api
  # comment
  module V1
    # comment
    class PlacesController < ApplicationController
      protect_from_forgery with: :null_session
      def index
        places = get_search_results(search_params).map do |place|
          {
            name: place.name,
            city: place.city,
            avg_download_speed: place.avg_download_speed,
            download_speed_units: place.most_frequent_units,
            number_of_measurements: place.number_of_measurements
          }
        end
        puts places
        render json: { places: }
      end

      private

      def get_search_results(search)
        puts "YOOOOOOOOO"
        puts search
        if search.blank?
          Place.all
        else
          Place.where('name LIKE :search OR city LIKE :search', search:)
        end
      end

      def search_params
        params['search']
      end
    end
  end
end
