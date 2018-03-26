User.destroy_all
Facility.destroy_all

aaron = User.create!(
                email: 'aarontrammell@gmail.com',
                password: 'blahblah',
                password_confirmation: 'blahblah'
)

shady_acres = Facility.create!(
                          name: 'Shady Acres',
                          location: 'Atlanta'
)

shady_acres.slides.create!(
                      name: 'birthday',
                      img_url: 'https://i.imgur.com/6VPVoKh.jpg'
)
shady_acres.slides.create!(
                      name: 'museum',
                      img_url: 'https://i.imgur.com/hYwNowQ.jpg'
)