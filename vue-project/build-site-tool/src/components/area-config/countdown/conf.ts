import {workListRequiredFace} from '@/views/build-site/work-faces';

export interface countdownFace {
  title: string;
  time: string;
}

const countdownConf: countdownFace = {
  title: '默认值',
  time: '00:00:00:00'
};

export interface countdownTotleFace extends workListRequiredFace {
  value: countdownFace;
}

export default countdownConf;
