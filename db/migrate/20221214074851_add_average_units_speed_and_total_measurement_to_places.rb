# added 2 new columns to places table in order to reduce website load time
class AddAverageUnitsSpeedAndTotalMeasurementToPlaces < ActiveRecord::Migration[7.0]
  def change
    add_column :places, :avg_download_speed, :float
    add_column :places, :most_frequent_units, :string
    add_column :places, :number_of_measurements, :integer
  end
end
