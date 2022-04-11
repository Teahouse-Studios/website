const members: Member[] = [
  {
    name: 'Dianiang233',
    title: ['联合创始人', '前端开发工程师'],
    avatar: 'Dianliang233.png',
    markdown: 'Dianliang233.md',
    github: 'Dianliang233',
    twitter: 'Dianliang233',
    wiki: 'Dianliang233',
    website: 'https://dianliang233.github.io/',
    email: 'dianliang',
  },
]

interface Member {
  name: string
  title: string[]
  avatar: string
  markdown: string
  github?: string
  twitter?: string
  wiki?: string
  website?: string
  email?: string
}

export default members
