import { BigInt } from '@graphprotocol/graph-ts'
import { RefunderCreated } from "../../generated/RefunderFactory/RefunderFactory"
import { Refunder } from "../../generated/templates";

import { constants } from "../utils/utils";

import { getRefunder} from "../utils/getRefunder"

export function handleCreateRefunder(event: RefunderCreated): void {

  Refunder.create(event.params.refunderAddress);
  let refunder = getRefunder(event.params.refunderAddress);
  refunder.owner = event.params.owner.toHex();
  refunder.save();
}

