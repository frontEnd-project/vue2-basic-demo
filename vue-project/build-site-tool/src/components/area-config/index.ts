import confTitle from './title/conf';
import confPic from './pic/conf';
import confCountdown from './countdown/conf';

interface totalConfigFace {
  [index: string]: object;
}

const totalConf: totalConfigFace = {
  title: confTitle,
  countdown: confCountdown,
  pic: confPic
};

export default totalConf;
