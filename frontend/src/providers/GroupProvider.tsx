export interface GroupModel {
  id: number
  title: string
  category: string
  description: string
  imageUrl: string
}

export class GroupProvider {
  static groupList: GroupModel[] = [
    {
      id: 1,
      title: 'Environmental Cause',
      category: 'Environment',
      description: "Donate through us to support the environment's preservation and conservation to preserve our Mother Nature.",
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Hopetoun_falls.jpg',
    },
    {
      id: 2,
      title: 'Natural Disaster Relief',
      category: 'Environment',
      description:
        "Donate through us to take part in helping the disaster relief's efforts such as post Earthquake, Flood or even Landslide relief",
      imageUrl: 'https://www.habitatforhumanity.org.uk/wp-content/uploads/2017/10/natural-disaster-relief-charity-response-emergency.jpg',
    },
    {
      id: 3,
      title: 'World Hunger',
      category: 'Community',
      description: 'Donate through us to contribute towards reducing the amount of starving people in this',
      imageUrl: 'https://www.compassion.com/multimedia/hunger-in-asia.jpg',
    },
    {
      id: 4,
      title: 'Education',
      category: 'Community',
      description: 'Donate through us to give the less fortunate a chance in receiving formal education',
      imageUrl: 'https://www.thenation.com/wp-content/uploads/2016/07/joseph_teachforindia_img.jpg',
    },
    // {
    //   id: 5,
    //   title: 'Mental Health',
    //   category: 'Community',
    //   description: 'Donate through us to fund mental health causes that contribute their efforts towards spreading mental health awareness',
    //   imageUrl: 'https://www.biospectrumasia.com/uploads/articles/3-21968.png',
    // },
    // {
    //   id: 6,
    //   title: 'Climate Change Advocates',
    //   category: 'Environment',
    //   description: 'Support our mission to combat climate change and promote sustainable living.',
    //   imageUrl: 'https://www.example.com/climate-change-advocates.jpg',
    // },
    // {
    //   id: 7,
    //   title: 'Wildlife Conservation Society',
    //   category: 'Environment',
    //   description: 'Contribute to the protection of endangered species and their habitats.',
    //   imageUrl: 'https://www.example.com/wildlife-conservation.jpg',
    // },
    // {
    //   id: 8,
    //   title: 'Clean Water Initiative',
    //   category: 'Environment',
    //   description: 'Help provide clean and safe drinking water to communities in need.',
    //   imageUrl: 'https://www.example.com/clean-water-initiative.jpg',
    // },
    // {
    //   id: 9,
    //   title: 'Eco-Friendly Farming Project',
    //   category: 'Environment',
    //   description: 'Support sustainable farming practices and reduce environmental impact.',
    //   imageUrl: 'https://www.example.com/eco-friendly-farming.jpg',
    // },
    // {
    //   id: 10,
    //   title: 'Local Youth Center',
    //   category: 'Community',
    //   description: 'Empower local youth with educational and recreational opportunities.',
    //   imageUrl: 'https://www.example.com/local-youth-center.jpg',
    // },
    // {
    //   id: 11,
    //   title: 'Community Garden Project',
    //   category: 'Community',
    //   description: 'Help create green spaces for community members to grow fresh produce.',
    //   imageUrl: 'https://www.example.com/community-garden.jpg',
    // },
    // {
    //   id: 12,
    //   title: 'Elderly Care Assistance',
    //   category: 'Community',
    //   description: 'Support programs that provide care and companionship to elderly individuals.',
    //   imageUrl: 'https://www.example.com/elderly-care.jpg',
    // },
    // {
    //   id: 13,
    //   title: 'Youth Education Fund',
    //   category: 'Community',
    //   description: 'Give underprivileged youth access to quality education and brighter futures.',
    //   imageUrl: 'https://www.example.com/youth-education-fund.jpg',
    // },
    // {
    //   id: 14,
    //   title: "Children's Hospital Foundation",
    //   category: 'Medical',
    //   description: 'Fund life-saving treatments and research at our pediatric hospital.',
    //   imageUrl: 'https://www.example.com/childrens-hospital.jpg',
    // },
    // {
    //   id: 15,
    //   title: 'Medical Supplies for Underserved Communities',
    //   category: 'Medical',
    //   description: 'Provide essential medical supplies to communities in need around the world.',
    //   imageUrl: 'https://www.example.com/medical-supplies.jpg',
    // },
    // {
    //   id: 16,
    //   title: 'Cancer Research Institute',
    //   category: 'Medical',
    //   description: 'Support groundbreaking research to find a cure for cancer and improve treatments.',
    //   imageUrl: 'https://www.example.com/cancer-research.jpg',
    // },
    // {
    //   id: 17,
    //   title: 'Animal Rescue Shelter',
    //   category: 'Animals',
    //   description: 'Rescue and care for abandoned and abused animals in our community.',
    //   imageUrl: 'https://www.example.com/animal-rescue.jpg',
    // },
    // {
    //   id: 18,
    //   title: 'Marine Conservation Society',
    //   category: 'Animals',
    //   description: 'Protect our oceans and marine life through conservation efforts.',
    //   imageUrl: 'https://www.example.com/marine-conservation.jpg',
    // },
    // {
    //   id: 19,
    //   title: 'Wildlife Rehabilitation Center',
    //   category: 'Animals',
    //   description: 'Rehabilitate injured and orphaned wildlife and release them back into the wild.',
    //   imageUrl: 'https://www.example.com/wildlife-rehabilitation.jpg',
    // },
    // {
    //   id: 20,
    //   title: 'Veterinary Care for Strays',
    //   category: 'Animals',
    //   description: 'Provide medical care and shelter to stray animals in need of assistance.',
    //   imageUrl: 'https://www.example.com/veterinary-care.jpg',
    // },
    // {
    //   id: 21,
    //   title: 'Global Hunger Relief',
    //   category: 'Non-Profit',
    //   description: 'Join us in the fight against global hunger and food insecurity.',
    //   imageUrl: 'https://www.example.com/global-hunger-relief.jpg',
    // },
    // {
    //   id: 22,
    //   title: 'Disaster Relief Fund',
    //   category: 'Non-Profit',
    //   description: 'Support disaster response efforts and aid communities affected by emergencies.',
    //   imageUrl: 'https://www.example.com/disaster-relief.jpg',
    // },
    // {
    //   id: 23,
    //   title: 'Education Access Initiative',
    //   category: 'Non-Profit',
    //   description: 'Promote educational access and opportunities for marginalized populations.',
    //   imageUrl: 'https://www.example.com/education-access.jpg',
    // },
    // {
    //   id: 24,
    //   title: 'Refugee Assistance Program',
    //   category: 'Non-Profit',
    //   description: 'Provide essential support to refugees seeking safety and stability.',
    //   imageUrl: 'https://www.example.com/refugee-assistance.jpg',
    // },
  ]
}

// {
//       id: 1,
//       title: 'Environmental Cause',
//       description: "Donate through us to support the environment's preservation and conservation to preserve our Mother Nature.",
//       imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Hopetoun_falls.jpg',
//     },
//     {
//       id: 2,
//       title: 'Natural Disaster Relief',
//       description:
//         "Donate through us to take part in helping the disaster relief's efforts such as post Earthquake, Flood or even Landslide relief",
//       imageUrl: 'https://www.habitatforhumanity.org.uk/wp-content/uploads/2017/10/natural-disaster-relief-charity-response-emergency.jpg',
//     },
//     {
//       id: 3,
//       title: 'World Hunger',
//       description: 'Donate through us to contribute towards reducing the amount of starving people in this',
//       imageUrl:'https://www.compassion.com/multimedia/hunger-in-asia.jpg',
//     },
