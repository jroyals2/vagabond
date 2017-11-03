City.destroy_all

atlanta = City.create(name:"Atlanta", picture:"https://activerain-store.s3.amazonaws.com/image_store/uploads/agents/lauraandersen/files/AR%20Atlanta.jpg", location:"Georgia" )
london = City.create(name:"London", picture:"https://media.timeout.com/images/103042848/image.jpg", location:"Great Britian" )
sanfran = City.create(name:"San Francisco", picture:"https://www.fourseasons.com/content/dam/fourseasons/images/web/SFR/SFR_88512379-jupiter_1280x486.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg", location:"California" )

Post.create(city_id: atlanta.id, title:"Post One", content:"This is a comment!")
Post.create(city_id: atlanta.id, title:"Post Two", content:"This is a comment, also!")
Post.create(city_id: london.id, title:"Post Great", content:"This is a comment!")
Post.create(city_id: london.id, title:"Post Great Man", content:"This is a comment, also!")
Post.create(city_id: sanfran.id, title:"Post One", content:"This is a comment!")
Post.create(city_id: sanfran.id, title:"Post Two hundred and one", content:"This is a comment, also!")