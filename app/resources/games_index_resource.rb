# frozen_string_literal: true

class GamesIndexResource < ApplicationResource
  has_many :games, serializer: GameResource
end
