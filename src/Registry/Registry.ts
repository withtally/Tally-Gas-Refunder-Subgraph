import { BigInt } from "@graphprotocol/graph-ts";
import { Register, UpdateRefundable } from "../../generated/Registry/Registry";
import { Refunder, Refundable } from "../../generated/schema";
import { getRefunder } from "../utils/getRefunder"
import { constants } from "../utils/utils";

export function handleRegister(event: Register): void {
  let refunder = getRefunder(event.params.refunder);
  refunder.version = BigInt.fromI32(event.params.version);
  refunder.save();
}

export function handleUpdateRefundable(event: UpdateRefundable): void {
  let refundableID = event.params.refunder
    .toHex()
    .concat("-")
    .concat(event.params.targetAddress.toHex())
    .concat("-")
    .concat(event.params.identifier.toHex());

  let refundable = Refundable.load(refundableID);

  if (refundable == null) {
    refundable = new Refundable(refundableID);
  }

  refundable.refunder = event.params.refunder.toHex();
  refundable.target = event.params.targetAddress.toHex();
  refundable.identifier = event.params.identifier;
  refundable.isRefundable = event.params.supported;
  refundable.save();
}
