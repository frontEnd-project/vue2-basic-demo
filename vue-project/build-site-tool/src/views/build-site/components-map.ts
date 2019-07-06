interface oneComponentsMapFace {
  workComponentName: string;
  configComponentName: string;
}

interface componentsMapFace {
  [index: string]: oneComponentsMapFace;
}

const componentsMap: componentsMapFace = {
  pic: {
    workComponentName: 'work-pic',
    configComponentName: 'pic'
  },
  countdown: {
    workComponentName: 'work-countdown',
    configComponentName: 'countdown'
  },
  title: {
    workComponentName: 'work-title',
    configComponentName: 'title'
  }
};

export default componentsMap;
