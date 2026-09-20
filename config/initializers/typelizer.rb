# frozen_string_literal: true

Typelizer.configure do |config|
  config.dirs = [ Rails.root.join("app/resources") ]
  config.routes.enabled = true
end
