const members: Member[] = [
  {
    name: 'Dianliang233',
    title: ['联合创始人', '前端开发工程师'],
    avatar: 'Dianliang233.png',
    markdown: 'Dianliang233.md',
    github: 'Dianliang233',
    twitter: 'Dianliang233',
    wiki: 'Dianliang233',
    email: 'dianliang',
  },
  {
    name: 'Lakejason0',
    title: ['联合创始人', 'Reviewer'],
    avatar: 'lakejason0.png',
    markdown: 'lakejason0.md',
    github: 'Lakejason0',
    twitter: 'Lakejason0',
    wiki: 'Lakejason0',
    email: 'lakejason0',
    website: 'https://lakeus.xyz/',
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
