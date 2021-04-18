import { Refunder } from "../../generated/schema";
import { constants } from "./utils";
import { Refunder as RefunderContract } from "../../generated/Refunder/Refunder"
import { Address, log } from "@graphprotocol/graph-ts";

export function getRefunder(id: Address): Refunder {
    let refunder = Refunder.load(id.toHex())
    if (refunder == null) {
        refunder = new Refunder(id.toHex());
        refunder.maxGasPrice = constants.BIGINT_ZERO;
        refunder.version = constants.BIGINT_ZERO;
        refunder.isPaused = false;
        refunder.balance = constants.BIGINT_ZERO;
        refunder.refundCount = constants.BIGINT_ZERO;
        refunder.depositCount = constants.BIGINT_ZERO;
        refunder.withdrawlCount = constants.BIGINT_ZERO;

        let instance = RefunderContract.bind(id)
        refunder.owner = instance.owner().toHex();
      }
      log.warning("Refunder Created: {}", [refunder.id])
      refunder.save()
      return refunder as Refunder;
}