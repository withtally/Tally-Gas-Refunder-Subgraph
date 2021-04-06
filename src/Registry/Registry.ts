import { BigInt } from "@graphprotocol/graph-ts";
import { Register, UpdateRefundable } from "../../generated/Registry/Registry";
import { Refunder, Refundable } from "../../generated/schema";

import { constants } from "../utils/utils";

export function handleRegister(event: Register): void {
  let refunder = Refunder.load(event.params.refunder.toHex());
  if (refunder == null) {
    refunder = new Refunder(event.params.refunder.toHex());
    refunder.maxGasPrice = constants.BIGINT_ZERO;
    refunder.owner = "";
    refunder.isPaused = false;
  }

  refunder.version = BigInt.fromI32(event.params.version);
  refunder.save();
}

export function handleUpdateRefundable(event: UpdateRefundable): void {
  let refundableID = event.params.refunder
    .toHex()
    .concat("-")
    .concat(event.params.targetAddress.toHex())
    .concat("-")
    .concat(event.params.interfaceId.toHex());

  let refundable = Refundable.load(refundableID);

  if (refundable == null) {
    refundable = new Refundable(refundableID);
  }

  refundable.refunder = event.params.refunder.toHex();
  refundable.target = event.params.targetAddress.toHex();
  refundable.identifier = event.params.interfaceId;
  refundable.isRefundable = event.params.supported;
  refundable.save();
}
