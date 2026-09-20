# frozen_string_literal: true

require 'rails_helper'

RSpec.describe "/games", type: :request do
  # This should return the minimal set of attributes required to create a valid
  # Game. As you add validations to Game, be sure to
  # adjust the attributes here as well.
  let(:valid_attributes) do
    { title: "Halo", release_year: 1998, external_api_id: "123" }
  end

  let(:invalid_attributes) do
    { title: "" }
  end

  describe "GET /index" do
    it "renders a successful response" do
      Game.create! valid_attributes
      get games_url
      expect(response).to be_successful
      expect(inertia.component).to eq('games/index')
      expect(inertia.props[:games].length).to eq(1)
    end
  end

  describe "GET /show" do
    it "renders a successful response" do
      game = Game.create! valid_attributes
      get game_url(game)
      expect(response).to be_successful
      expect(inertia.component).to eq('games/show')
      expect(inertia.props[:game][:title]).to eq("Halo")
    end
  end

  describe "GET /new" do
    it "renders a successful response" do
      get new_game_url
      expect(response).to be_successful
      expect(inertia.component).to eq('games/new')
    end
  end

  describe "GET /edit" do
    it "renders a successful response" do
      game = Game.create! valid_attributes
      get edit_game_url(game)
      expect(response).to be_successful
      expect(inertia.component).to eq('games/edit')
    end
  end

  describe "POST /create" do
    context "with valid parameters" do
      it "creates a new Game" do
        expect {
          post games_url, params: { game: valid_attributes }
        }.to change(Game, :count).by(1)
      end

      it "redirects to the created game" do
        post games_url, params: { game: valid_attributes }
        expect(response).to redirect_to(game_url(Game.last))
      end
    end

    context "with invalid parameters" do
      it "does not create a new Game" do
        expect {
          post games_url, params: { game: invalid_attributes }
        }.to change(Game, :count).by(0)
        expect(inertia.component).to eq('games/new')
        expect(inertia.props[:errors][:title]).to include("can't be blank")
      end

      it "renders a response with 422 status (i.e. to display the 'new' template)" do
        post games_url, params: { game: invalid_attributes }
        expect(response).to have_http_status(:unprocessable_content)
      end
    end
  end

  describe "PATCH /update" do
    context "with valid parameters" do
      let(:new_attributes) { { title: "Halo 2", release_year: 2004 } }

      it "updates the requested game" do
        game = Game.create! valid_attributes
        patch game_url(game), params: { game: new_attributes }
        game.reload
        expect(game.title).to eq("Halo 2")
      end

      it "redirects to the game" do
        game = Game.create! valid_attributes
        patch game_url(game), params: { game: new_attributes }
        game.reload
        expect(response).to redirect_to(game_url(game))
      end
    end

    context "with invalid parameters" do
      it "renders a response with 422 status (i.e. to display the 'edit' template)" do
        game = Game.create! valid_attributes
        patch game_url(game), params: { game: invalid_attributes }
        expect(response).to have_http_status(:unprocessable_content)
        expect(inertia.component).to eq('games/edit')
        expect(inertia.props[:errors][:title]).to include("can't be blank")
      end
    end
  end

  describe "DELETE /destroy" do
    it "destroys the requested game" do
      game = Game.create! valid_attributes
      expect {
        delete game_url(game)
      }.to change(Game, :count).by(-1)
    end

    it "redirects to the games list" do
      game = Game.create! valid_attributes
      delete game_url(game)
      expect(response).to redirect_to(games_url)
    end
  end
end
