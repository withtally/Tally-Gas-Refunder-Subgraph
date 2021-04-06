import { BigInt } from "@graphprotocol/graph-ts";
import {} from "../../generated/RefunderFactory/RefunderFactory";
import { Refunder, Target, Refundable, Refund, Withdrawl, Deposit as DepositEntity } from "../../generated/schema";
import {
  Deposit,
  GasPriceChange,
  OwnershipTransferred,
  Paused,
  RefundableUpdate,
  RelayAndRefund,
  RenounceOwnershipCall,
  Unpaused,
  Withdraw,
} from "../../generated/Refunder/Refunder";

import { constants } from "../utils/utils";

export function handleRefundableUpdate(event: RefundableUpdate): void {

    let target = event.params.targetContract.toHex()
    let identifier = event.params.identifier.toHex()

    let refundableID = event.address
    .toHex()
    .concat("-")
    .concat(target)
    .concat("-")
    .concat(identifier);

    let refundable = Refundable.load(refundableID);

    refundable.isRefundable = event.params.isRefundable;
    refundable.validatingContract = event.params.validatingContract;
    refundable.validatingIdentifier = event.params.validatingIdentifier;

    refundable.save()
}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {
    let refunder = Refunder.load(event.address.toHex())
    // we don't care about the previous owner event property
    refunder.owner = event.params.newOwner.toHex();
    refunder.save()
}

export function handleGasPriceChange(event: GasPriceChange): void {
    let refunder = Refunder.load(event.address.toHex())
    refunder.maxGasPrice = event.params.newGasPrice;
    refunder.save()
}

export function handlePaused(event: Paused): void {
    let refunder = Refunder.load(event.address.toHex())
    // technically the Paused event has an address of who paused it. This is not important here. 
    refunder.isPaused = true;
    refunder.save()
}

export function handleUnPaused(event: Unpaused): void {
    let refunder = Refunder.load(event.address.toHex())
    // technically the unPaused event has an address of who paused it. This is not important here. 
    refunder.isPaused = false;
    refunder.save()
}

export function handleWithdraw(event: Withdraw): void {
    let withdraw = new Withdrawl(event.transaction.hash.toHex().concat(event.transactionLogIndex.toHexString()));

    withdraw.recipient = event.params.recipient;
    withdraw.refunder = event.address.toHex();
    withdraw.value = event.params.amount;

    withdraw.save();
}

export function handleDeposit(event: Deposit): void {
    let deposit = new DepositEntity(event.transaction.hash.toHex().concat(event.transactionLogIndex.toHexString());

    deposit.value = event.params.value;
    deposit.depositor = event.params.depositor;
    deposit.refunder = event.address.toHex();

    deposit.save();
}


// export function handleCreateRefunder(event: CreateRefunder): void {
//   let refunder = Refunder.load(event.params.refunderAddress.toHex());
//   if (refunder == null) {
//     refunder = new Refunder(event.params.refunderAddress.toHex());
//     refunder.maxGasPrice = constants.BIGINT_ZERO;
//     refunder.version = constants.BIGINT_ZERO;
//   }

//   refunder.owner = event.params.owner.toHex();
//   refunder.save();
// }
