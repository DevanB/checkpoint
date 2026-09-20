# frozen_string_literal: true

class Game < ApplicationRecord
  validates :title, presence: true
end
