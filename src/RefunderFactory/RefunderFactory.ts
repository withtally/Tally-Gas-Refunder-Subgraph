import { BigInt } from '@graphprotocol/graph-ts'
import { RefunderCreated } from "../../generated/RefunderFactory/RefunderFactory"
import { Refunder } from "../../generated/schema";

import { constants } from "../utils/utils";

import { getRefunder} from "../utils/getRefunder"

export function handleCreateRefunder(event: RefunderCreated): void {
  let refunder = getRefunder(event.params.refunderAddress.toHex(), event.address);
  refunder.owner = event.params.owner.toHex();
  refunder.save();
}

