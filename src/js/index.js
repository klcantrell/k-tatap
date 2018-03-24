import 'core-js/es6/promise';
import IntroMessages from './introMessages';
import Patatap from './patatap';
import '../css/main.css';


const patatap = Patatap(),
      introMessages = IntroMessages(patatap);

introMessages.init();
patatap.init();
