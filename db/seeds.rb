City.destroy_all

atlanta = City.create(name:"Atlanta", picture:"https://activerain-store.s3.amazonaws.com/image_store/uploads/agents/lauraandersen/files/AR%20Atlanta.jpg", location:"Georgia" )

Post.create(city_id: atlanta.id, title:"Post One", content:"This is a comment!")
Post.create(city_id: atlanta.id, title:"Post Two", content:"This is a comment, also!")