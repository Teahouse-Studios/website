const members: Member[] = [
  {
    name: 'Dianliang233',
    title: ['联合创始人', '综合开发者'],
    avatar: 'Dianliang233.png',
    page: 'Dianliang233',
    github: 'Dianliang233',
    twitter: 'Dianliang233',
    wiki: 'Dianliang233',
    email: 'dianliang',
  },
  {
    name: 'Lakejason0',
    title: ['联合创始人', '项目审校专员', 'MediaWiki指导专员'],
    avatar: 'lakejason0.png',
    page: 'lakejason0',
    github: 'lakejason0',
    twitter: 'lakejason0',
    wiki: 'Lakejason0',
    email: 'lakeus',
    website: 'https://lakeus.xyz/',
  },
  {
    name: 'DoroWolf',
    title: ['联合创始人', '梗中模块作者', '吉祥物'],
    avatar: 'DoroWolf.jpg',
    page: 'DoroWolf',
    github: 'DoroWolf',
    twitter: 'HlDoroWolf',
    wiki: 'HlDoroWolf',
    email: 'dorowolf',
  },
  {
    name: 'OasisAkari',
    title: ['联合创始人', '项目审校专员', '机器人开发主管'],
    avatar: 'OasisAkari.jpg',
    page: 'OasisAkari',
    github: 'OasisAkari',
    wiki: 'OasisAkari',
    email: 'oasisakari',
    website: 'https://stray-soul.com/',
  },
  {
    name: '方法放寒假',
    title: ['基岩版技术指导', 'Minecraft基岩版开发Wiki站长'],
    avatar: 'MiemieMethod.jpg',
    page: 'MiemieMethod',
    github: 'MiemieMethod',
    wiki: 'Miemiemethod',
    email: 'method',
  },
  {
    name: 'ff98sha',
    title: ['荣誉成员', '项目宣发', '中文 Minecraft Wiki 行政员'],
    avatar: 'ff98sha.png',
    page: 'ff98sha',
    github: 'ff98sha',
    wiki: 'ff98sha',
    website: 'https://ff98sha.me/',
    email: 'ff98sha',
  },
  {
    name: '斯乌',
    title: ['联合创始人', '梗体中文项目创始人', '中文 Minecraft Wiki 行政员'],
    avatar: 'Lxazl5770.png',
    page: 'Lxazl5770',
    github: 'Lxazl5770',
    twitter: 'Lxazl5770',
    wiki: 'Lxazl5770',
    email: 'siwuawa',
  },
  {
    name: 'nullcat',
    title: ['Python 工程师', '专业鸽子'],
    avatar: 'wyapx.jpg',
    page: 'nullcat',
    github: 'wyapx',
    email: 'null',
    website: 'https://www.nullcat.cn/',
  },
  {
    name: 'Hatsuki kiri',
    title: ['成员', 'MediaWiki指导专员', '中文 Minecraft Wiki 管理员'],
    avatar: 'Hatsuki_kiri.jpg',
    page: 'Hatsuki-kiri',
    github: 'Hatsuki-kiri',
    wiki: 'Hatsuki_kiri',
    email: 'foxwesty',
  },
]

interface Member {
  name: string
  title: string[]
  avatar: string
  page: string
  github?: string
  twitter?: string
  wiki?: string
  website?: string
  email: string
}

export default members
