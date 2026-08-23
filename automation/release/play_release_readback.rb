#!/usr/bin/env ruby

require 'google/apis/androidpublisher_v3'
require 'googleauth'
require 'json'

manifest = JSON.parse(File.read(File.expand_path('app_store_config.json', __dir__)))
package_name = manifest.fetch('androidPackage')
credentials = File.expand_path(ENV.fetch('GOOGLE_PLAY_JSON_KEY'))
abort 'Credential must remain outside the repository' if credentials.start_with?(File.expand_path('../..', __dir__) + File::SEPARATOR)

service = Google::Apis::AndroidpublisherV3::AndroidPublisherService.new
service.authorization = Google::Auth::ServiceAccountCredentials.make_creds(
  json_key_io: File.open(credentials),
  scope: 'https://www.googleapis.com/auth/androidpublisher'
)

edit = service.insert_edit(package_name)
begin
  track = service.get_edit_track(package_name, edit.id, 'production')
  listing = service.get_edit_listing(package_name, edit.id, 'cs-CZ')
  image_types = %w[icon featureGraphic phoneScreenshots sevenInchScreenshots tenInchScreenshots]
  counts = image_types.to_h do |type|
    [type, Array(service.list_edit_images(package_name, edit.id, 'cs-CZ', type).images).size]
  end
  public_text = [listing.title, listing.short_description, listing.full_description].join("\n").downcase
  forbidden = %w[bujnmi festapp jubile].select { |term| public_text.include?(term) }
  releases = Array(track.releases)
  puts JSON.generate(
    packageName: package_name,
    productionVersionCodes: releases.flat_map { |release| Array(release.version_codes) }.map(&:to_i).uniq.sort,
    productionStatuses: releases.map(&:status).uniq.sort,
    title: listing.title,
    forbiddenOrLegacyMatches: forbidden.size,
    images: counts
  )
ensure
  service.delete_edit(package_name, edit.id) if edit&.id
end
