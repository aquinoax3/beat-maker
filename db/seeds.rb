# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "🏕 Seeding sounds..."
sound1 = Sound.create(soundname: 'Gas-Bottle-1', sound: "./app/SoundSamples/gas-bottle-perc1.wav")
sound2 = Sound.create(soundname: 'Hi-Hat-1', sound: "./app/SoundSamples/hi-hat-058.wav")
# sound3 = Sound.create(soundname: 'Kick-1', sound: `/client/public/SoundSamples/kick08.wav`)
# sound4 = Sound.create(soundname: 'Snare-Old-School-Hip-Hop-1', sound: `/client/public/SoundSamples/oldschool-hip-hop-snare-17.wav`)

puts "🏕 Seeding users..."
user1 = User.create(username: "beatmaker_dylan", password: "abc123" , profile: "beat 197 slaps" , image:"https://tv-fanatic-res.cloudinary.com/iu/s--bPLtAl88--/t_full/cs_srgb,f_auto,fl_strip_profile.lossy,q_auto:420/v1645078539/dylan-severance-s1e2.jpg" )
user2 = User.create(username: "supa_hot", password: "123abc", profile: "Beats... I make em. But I'm not a producer.", image: "https://i.kym-cdn.com/entries/icons/original/000/009/644/rap-battle.jpg" )

puts "🏕 Seeding beats..."
Beat.create(sound: sound1, user: user1, beatname: "firstbeat")
Beat.create(sound: sound2, user: user2, beatname: "secondbeat")

puts "✅ Done seeding!"