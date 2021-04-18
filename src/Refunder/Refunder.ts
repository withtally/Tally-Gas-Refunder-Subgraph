import { BigInt } from "@graphprotocol/graph-ts";
import {} from "../../generated/RefunderFactory/RefunderFactory";
import { Refunder, Refundable, Refund, Withdrawl, Deposit as DepositEntity } from "../../generated/schema";
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

import { getRefunder} from "../utils/getRefunder"
import { constants } from "../utils/utils";



export function handleRelayAndRefund(event: RelayAndRefund): void {
    let target = event.params.target.toHex();
    let identifier = event.params.identifier.toHex();
    let refunder = getRefunder(event.address.toHex(), event.address)

    let refundableID = event.address
    .toHex()
    .concat("-")
    .concat(target)
    .concat("-")
    .concat(identifier);

    let refund = new Refund(event.transaction.hash.toHex().concat(event.transactionLogIndex.toHex()))

    refund.refundable = refundableID;
    refund.refunder = event.address.toHex();
    refund.caller = event.params.caller.toHex();
    refund.target = target;
    refund.identifier = identifier;
    refund.refund = event.params.refundAmount;

    refunder.balance = refunder.balance.minus(event.params.refundAmount);
    refunder.refundCount = refunder.refundCount.plus(constants.BIGINT_ONE)

    refunder.save()
    refund.save();
}

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
    let refunder = getRefunder(event.address.toHex(), event.address)
    // we don't care about the previous owner event property
    refunder.owner = event.params.newOwner.toHex();
    refunder.save()
}

export function handleGasPriceChange(event: GasPriceChange): void {
    let refunder = getRefunder(event.address.toHex(), event.address)
    refunder.maxGasPrice = event.params.newGasPrice;
    refunder.save()
}

export function handlePaused(event: Paused): void {
    let refunder = getRefunder(event.address.toHex(), event.address)
    // technically the Paused event has an address of who paused it. This is not important here. 
    refunder.isPaused = true;
    refunder.save()
}

export function handleUnPaused(event: Unpaused): void {
    let refunder = getRefunder(event.address.toHex(), event.address)
    // technically the unPaused event has an address of who paused it. This is not important here. 
    refunder.isPaused = false;
    refunder.save()
}

export function handleWithdraw(event: Withdraw): void {
    let refunder = getRefunder(event.address.toHex(), event.address)
    let withdraw = new Withdrawl(event.transaction.hash.toHex().concat(event.transactionLogIndex.toHexString()));

    withdraw.recipient = event.params.recipient;
    withdraw.refunder = event.address.toHex();
    withdraw.value = event.params.amount;

    refunder.balance = refunder.balance.minus(event.params.amount);
    refunder.withdrawlCount = refunder.withdrawlCount.plus(constants.BIGINT_ONE);

    refunder.save();
    withdraw.save();
}

export function handleDeposit(event: Deposit): void {
    let refunder = getRefunder(event.address.toHex(), event.address)
    let deposit = new DepositEntity(event.transaction.hash.toHex().concat(event.transactionLogIndex.toHexString()));

    deposit.value = event.params.amount;
    deposit.depositor = event.params.depositor;
    deposit.refunder = event.address.toHex();

    refunder.balance = refunder.balance.plus(event.params.amount);
    refunder.depositCount = refunder.depositCount.plus(constants.BIGINT_ONE);

    refunder.save()
    deposit.save();
}
