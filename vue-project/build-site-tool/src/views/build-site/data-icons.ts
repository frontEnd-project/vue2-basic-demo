export interface iconsDataFace {
  title: string;
  name: string;
  iconUrl: string;
}

export  interface iconsTotalDataFace {
  title: string;
  config: iconsDataFace[];
}

const baseIconsData: iconsDataFace[] = [
  {
    title: '标题',
    name: 'title',
    iconUrl: ''
  },
  {
    title: '文本块',
    name: 'text',
    iconUrl: ''
  },
  {
    title: '链接',
    name: 'link',
    iconUrl: ''
  },
  {
    title: '图片',
    name: 'pic',
    iconUrl: ''
  },
  {
    title: '组图',
    name: 'groupPic',
    iconUrl: ''
  },
  {
    title: '视频',
    name: 'video',
    iconUrl: ''
  },
  {
    title: '倒计时',
    name: 'countdown',
    iconUrl: ''
  },
];

const conversionData: iconsDataFace[] = [
  {
    title: '跳转按钮',
    name: 'jumpButton',
    iconUrl: ''
  },
  {
    title: '电话',
    name: 'phone',
    iconUrl: ''
  },
  {
    title: '表单',
    name: 'form',
    iconUrl: ''
  },
  {
    title: '在线咨询',
    name: 'onlineAsk',
    iconUrl: ''
  },
  {
    title: '微信',
    name: 'wechat',
    iconUrl: ''
  },
  {
    title: '多线沟通',
    name: 'moreConnect',
    iconUrl: ''
  },
];

export let iconsData: iconsTotalDataFace[] = [
  {
    title: '基础组件',
    config: baseIconsData
  },
  {
    title: '转化组件',
    config: conversionData
  }
];
