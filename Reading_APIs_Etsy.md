Reading APIs: Etsy
===================

__How do I make API requests?__
__What is the base URL for all requests?__
GET https://openapi.etsy.com/v2/listings/active?api_key={YOUR_API_KEY}

__Are there any headers or query parameters required?__ I don’t think there are any query parameters that are required.  The api_key parameter is required for all public entry point calls, but it’s a standard parameter, not a query parameter.

Headers: Every API response bears rate limit headers.  You have a limit of 10,000 requests per 24 hours. 
X-RateLimit-Limit: 10000
X-RateLimit-Remaining:

__What kind of response should I expect?__
__How does the API handle authentication?__
__Do I need to authenticate? with user credentials?__ You don’t need to authenticate.  You’ll receive an application key that Etsy will give you when you register your app with their API.  Add that key number onto the end of the url for your GET request.

__What can I do with an unauthenticated request?__ You’ll have read/write access to data belonging to the Etsy member who created the application, such as their shop’s listings (create, edit, delete.) With an unauthenticated request, you can get back  the most recent active listings on Etsy.

__How can I authenticate my request? (what methods)__ An OAuth access token is required to authenticate your request.  Temporary credentials are exchanged for permanent token credentials  (an “access token”).

__What Resource in the API represents...__
__an individual product?__ Listings are individual products for sale.

__a group or collection of products?__ShopSection is a section (of products?) within a user’s shop
images associated with a product? The ListingImage resource represents the images associated with a product.  

__sizes and colors for a product?__ Variations, listed as key=>value pairs Variations_Property=>Variations_Option. are how you offer options such as size and color for products.

__What actions and endpoints exist for each of these Resources?__
__What parameters does each endpoint require or accept?__
Required for __new Listings:__ quantity, title, description, price, who_made, when_made and is_supply
Required for __getShopSection:__ (retrieving a ShopSection): shop_id and shop_section_id
Required for __ListingImage:__ listing_id (to upload an image) ,
listing_id and listing_image_id (to retrieve an image)
Required for __Variations:__ listing_id (to get the listing variations for a specific listing), listing_id and variations (to update  or add listing variations for a specific listing), listing_id, property_id, and value (to remove a listing variation for a specific listing)

__What fields are returned for each Resource, specifically:__
__an individual product?__
50 fields are returned for an individual product.  They are listed  here https://www.etsy.com/developers/documentation/reference/listing#section_fields

__a group or collection of products?__
A Section (group or collection of products) returns the following fields: shop_section_id, title, rank, user_id, active_listing_count

__What additional fields can be requested for each?__
