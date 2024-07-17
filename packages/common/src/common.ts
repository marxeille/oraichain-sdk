import { ChainInfos, ChainInfosImpl } from "./chain-infos";
import { TokenItems, TokenItemsImpl } from "./token-items";

export class OraiCommon {
  constructor(
    private _chainInfos?: ChainInfos,
    private _tokenItems?: TokenItems
  ) {}

  withChainInfos(chainInfos: ChainInfos) {
    this._chainInfos = chainInfos;
    return this;
  }

  withTokenItems(tokenItems: TokenItems) {
    this._tokenItems = tokenItems;
    return this;
  }

  get chainInfos() {
    return this._chainInfos;
  }

  get tokenItems() {
    return this._tokenItems;
  }
}
