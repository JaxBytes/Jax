interface FriendItem {
  name: string;
  link: string;
  avatar: string;
  desc: string;
}

const friendData: FriendItem[] = [
  {
    name: 'Note',
    link: 'https://note.ltd/',
    avatar: 'https://pic1.imgdb.cn/item/692153953203f7be00202f9d.png',
    desc: '一个记录学习与生活的地方',
  },
  {
    name: 'Magren\'s Blog',
    link: 'https://magren.cc',
    avatar: 'https://magren.cc/avatar.png',
    desc: '不为繁华易匠心',
  }
];

export default friendData;
