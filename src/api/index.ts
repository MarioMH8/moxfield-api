import DeckListApi from './deck-list';

class MoxfieldApi {
	readonly deckList: DeckListApi;

	constructor() {
		this.deckList = new DeckListApi();
	}
}

export default MoxfieldApi;
