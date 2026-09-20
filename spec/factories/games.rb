# frozen_string_literal: true

FactoryBot.define do
  factory :game do
    title { "MyString" }
    cover_image_url { "MyString" }
    release_year { 1 }
    external_api_id { "MyString" }
  end
end
