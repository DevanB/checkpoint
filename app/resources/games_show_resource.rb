# frozen_string_literal: true

class GamesShowResource < ApplicationResource
  has_one :game, serializer: GameResource
end
