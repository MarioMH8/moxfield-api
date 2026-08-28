import CardsNamedApi from './cards-named';
import DeckListApi from './deck-list';
import DeckSearchApi from './deck-search';

class MoxfieldApi {
	readonly cardsNamed: CardsNamedApi;
	readonly deckList: DeckListApi;
	readonly deckSearch: DeckSearchApi;

	constructor() {
		this.cardsNamed = new CardsNamedApi();
		this.deckList = new DeckListApi();
		this.deckSearch = new DeckSearchApi();
	}
}

export default MoxfieldApi;
