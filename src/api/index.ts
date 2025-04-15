import DeckListApi from './deck-list';

class TopdeckApi {
	readonly deckList: DeckListApi;

	constructor() {
		this.deckList = new DeckListApi();
	}
}

export default TopdeckApi;
