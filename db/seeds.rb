# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Destroy DataBase"

Sound.destroy_all
Kit.destroy_all
Beat.destroy_all
SoundsPerKit.destroy_all
User.destroy_all


puts "🏕 Seeding sounds..."
sound1 = Sound.create(name: 'Glass-Bottle-1', sound: "./app/SoundSamples/gas-bottle-perc1.wav", key: "A")
sound2 = Sound.create(name: 'Hi-Hat-1', sound: "./app/SoundSamples/hi-hat-058.wav", key: "S")
sound3 = Sound.create(name: 'Kick08-1', sound: "./app/SoundSamples/kick08.wav", key: "D") 
sound4 = Sound.create(name: 'Old-School-Hip-Hop-Snare-1', sound: "./app/SoundSamples/oldschool-hip-hop-snare-17.wav", key: "Z") 
sound5 = Sound.create(name: 'Bass-1', sound: "./app/SoundSamples/bass.wav", key: "X")
sound6 = Sound.create(name: 'Clap-1', sound: "./app/SoundSamples/clap.wav", key: "C")
sound7 = Sound.create(name: 'Hat-2', sound: "./app/SoundSamples/hat2.wav", key: "A")
sound8 = Sound.create(name: 'Hey', sound: "./app/SoundSamples/hey.wav", key: "S")
sound9 = Sound.create(name: 'Hi-Hat-1', sound: "./app/SoundSamples/hihat.wav", key: "D")
sound10 = Sound.create(name: 'Kick-1', sound: "./app/SoundSamples/kick.wav", key: "Z")
sound11 = Sound.create(name: 'Loop-1', sound: "./app/SoundSamples/loop.wav", key: "X")
sound12 = Sound.create(name: 'Loop-130-1', sound: "./app/SoundSamples/loop130.wav", key: "C")
sound13 = Sound.create(name: 'Nah', sound: "./app/SoundSamples/nah.wav", key: "A")
sound14 = Sound.create(name: 'Open-Hi-Hat-1', sound: "./app/SoundSamples/openhihat.wav", key: "S")
sound15 = Sound.create(name: 'Snare-1', sound: "./app/SoundSamples/snare.wav", key: "D")
sound16 = Sound.create(name: 'Sub-1', sound: "./app/SoundSamples/sub.wav", key: "Z")
sound17 = Sound.create(name: 'Yeah-1', sound: "./app/SoundSamples/yeah.wav", key: "X")
sound18 = Sound.create(name: 'Air-Snare', sound: "./app/SoundSamples/ai-snare-20.wav", key: "C")

puts "🏕 Seeding users..."
user1 = User.create(username: "beatmaker_dylan", password: "abc123" , profile: "beat 197 slaps" , image:"https://tv-fanatic-res.cloudinary.com/iu/s--bPLtAl88--/t_full/cs_srgb,f_auto,fl_strip_profile.lossy,q_auto:420/v1645078539/dylan-severance-s1e2.jpg" )
user2 = User.create(username: "supa_hot", password: "123abc", profile: "Beats... I make em. But I'm not a producer.", image: "https://i.kym-cdn.com/entries/icons/original/000/009/644/rap-battle.jpg" )

puts "🏕 Seeding kits..."
kit1 = Kit.create(name: "Reggeaton Kit",user_id: user1.id )
kit2 = Kit.create(name: "HipHop Kit", user_id: user2.id)
kit3 = Kit.create(name: "Rock kit", user_id: user2.id)
kit4 = Kit.create(name: "RnB kit", user_id: user1.id)


puts "🏕 Seeding SoundsPerKit..."
SoundsPerKit.create(sound: sound1, kit: kit1)
SoundsPerKit.create(sound: sound2, kit: kit1)
SoundsPerKit.create(sound: sound3, kit: kit1)
SoundsPerKit.create(sound: sound4, kit: kit1)
SoundsPerKit.create(sound: sound5, kit: kit1)
SoundsPerKit.create(sound: sound6, kit: kit1)
puts "kit one created"

SoundsPerKit.create(sound: sound7, kit: kit2)
SoundsPerKit.create(sound: sound8, kit: kit2)
SoundsPerKit.create(sound: sound9, kit: kit2)
SoundsPerKit.create(sound: sound10, kit: kit2)
SoundsPerKit.create(sound: sound11, kit: kit2)
SoundsPerKit.create(sound: sound12, kit: kit2)
puts "kit two created"

SoundsPerKit.create(sound: sound13, kit: kit3)
SoundsPerKit.create(sound: sound14, kit: kit3)
SoundsPerKit.create(sound: sound15, kit: kit3)
SoundsPerKit.create(sound: sound16, kit: kit3)
SoundsPerKit.create(sound: sound17, kit: kit3)
SoundsPerKit.create(sound: sound18, kit: kit3)
puts "kit three created"

SoundsPerKit.create(sound: sound1, kit: kit3)
SoundsPerKit.create(sound: sound2, kit: kit3)
SoundsPerKit.create(sound: sound3, kit: kit3)
SoundsPerKit.create(sound: sound16, kit: kit3)
SoundsPerKit.create(sound: sound17, kit: kit3)
SoundsPerKit.create(sound: sound18, kit: kit3)
puts "kit four created"

puts "🏕 Seeding beats..."
beat1 = Beat.create(user: user1, name: "OG Fiya")
beat2 = Beat.create(user: user2, name: "Dre Day")
beat3 = Beat.create(user: user2, name: "The Recipe")
beat4 = Beat.create(user: user1, name: "Slaps 197")

puts "✅ Done seeding!"