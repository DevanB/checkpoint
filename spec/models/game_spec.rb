# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Game, type: :model do
  it "is valid with a title" do
    game = Game.new(title: "Super Mario 64")
    expect(game).to be_valid
  end

  it "is invalid without a title" do
    game = Game.new(title: nil)
    expect(game).to_not be_valid
  end
end
