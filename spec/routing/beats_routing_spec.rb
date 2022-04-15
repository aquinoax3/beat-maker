require "rails_helper"

RSpec.describe BeatsController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/beats").to route_to("beats#index")
    end

    it "routes to #show" do
      expect(get: "/beats/1").to route_to("beats#show", id: "1")
    end


    it "routes to #create" do
      expect(post: "/beats").to route_to("beats#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/beats/1").to route_to("beats#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/beats/1").to route_to("beats#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/beats/1").to route_to("beats#destroy", id: "1")
    end
  end
end
