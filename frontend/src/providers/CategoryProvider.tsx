export interface CategoryModel {
  id: number
  name: string
  description: string
}

export class CategoryProvider {
  static categoryList: CategoryModel[] = [
    {
      id: 1,
      name: 'Environment',
      description:
        'Our environment sustains all life on Earth. By contributing to this category, you are supporting initiatives dedicated to preserving and protecting our natural world. From reforestation efforts to marine conservation projects, your donations will help create a healthier planet for future generations.',
    },
    {
      id: 2,
      name: 'Community',
      description:
        "Strong communities are built on shared values and support. When you donate to the Community category, you're investing in programs that empower and uplift local neighborhoods. Your contributions can fund community centers, youth mentorship programs, and initiatives that promote inclusivity, social cohesion, and a sense of belonging.",
    },
    {
      id: 3,
      name: 'Non-Profit',
      description:
        'Non-profit organizations are essential drivers of positive change. Your contributions to this category directly support the work of non-profits dedicated to various causes, from education and healthcare to poverty alleviation and disaster relief. Help make the world a better place by donating to non-profit initiatives that align with your values.',
    },
    {
      id: 4,
      name: 'Animals',
      description:
        "Animals are an integral part of our planet, and they deserve our care and protection. When you give to the Animals category, you're aiding efforts to rescue, rehabilitate, and provide sanctuary for wildlife and domestic animals alike. Your support can make a difference in preserving biodiversity and ensuring the well-being of animals in need.",
    },
    {
      id: 5,
      name: 'Medical',
      description:
        "Access to quality healthcare is a fundamental human right. By contributing to the Medical category, you're backing medical research, healthcare infrastructure, and initiatives that improve the health and well-being of individuals and communities. Your donations can help advance medical breakthroughs and provide essential care to those in need.",
    },
  ]
}
