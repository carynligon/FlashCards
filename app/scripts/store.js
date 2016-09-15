import CardsCollection from './Collections/CardsCollection';
import MorePractice from './Collections/MorePractice';
import Session from './Models/Session';

export default {
  cardsCollection: new CardsCollection(),
  session: new Session(),
  morePractice: new MorePractice()
}
