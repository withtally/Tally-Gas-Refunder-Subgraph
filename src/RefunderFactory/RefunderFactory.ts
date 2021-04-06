import { BigInt } from '@graphprotocol/graph-ts'
import { CreateRefunder } from "../../generated/RefunderFactory/RefunderFactory"
import { Refunder } from "../../generated/schema";

import { constants } from "../utils/utils";

export function handleCreateRefunder(event: CreateRefunder): void {
  let refunder = Refunder.load(event.params.refunderAddress.toHex());
  if (refunder == null) {
    refunder = new Refunder(event.params.refunderAddress.toHex());
    refunder.maxGasPrice = constants.BIGINT_ZERO;
    refunder.version = constants.BIGINT_ZERO;
    refunder.isPaused = false;
  }

  refunder.owner = event.params.owner.toHex();
  refunder.save();
}

