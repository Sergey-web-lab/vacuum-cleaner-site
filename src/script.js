import { menuAction } from './style/bem/menu/_menu';
import { counterPrice, delivOrSelfFormHideShow, handleFormSubmit } from './style/bem/order/_order';
import { callInfo } from './style/bem/characteristic/_callInfo';
import { stockTimer } from './style/bem/stockTimer/_stockTimer';

new WOW().init();
menuAction();
counterPrice();
delivOrSelfFormHideShow();
handleFormSubmit();
callInfo();
stockTimer();
