require "rails_helper"

RSpec.describe SoundsPerKitsController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/sounds_per_kits").to route_to("sounds_per_kits#index")
    end

    it "routes to #show" do
      expect(get: "/sounds_per_kits/1").to route_to("sounds_per_kits#show", id: "1")
    end


    it "routes to #create" do
      expect(post: "/sounds_per_kits").to route_to("sounds_per_kits#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/sounds_per_kits/1").to route_to("sounds_per_kits#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/sounds_per_kits/1").to route_to("sounds_per_kits#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/sounds_per_kits/1").to route_to("sounds_per_kits#destroy", id: "1")
    end
  end
end
