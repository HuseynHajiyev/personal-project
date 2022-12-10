require 'faker'


Place.destroy_all

@cities = %w(Baku Tbilisi Yerevan Moscow Tehran Ankara Astana Tashkent Bishkek Ashqabat Dushanbe Kabul Bagdad Amman Damascus Tel-Aviv Ramala Beirut Cairo Athens Sofia Bucharest Chishinau Kiyiv Minsk)
@number_of = (1..25).to_a
@speeds = (1..150).to_a
@speed_units = ["mbps", "kbps"]
@cities.each do |city|
  @number_of.sample.times do
    Place.create!(name: Faker::Restaurant.name, address: Faker::Address.street_address, city: city)
  end
end

@places = Place.all

@places.each do |place|
  @number_of.sample.times do
    unit = @speed_units.sample
    InternetSpeed.create!(place_id: place.id, download_units: unit, download_speed: unit == "mbps" ? @speeds.sample : @speeds.sample * 1000)
  end
end
