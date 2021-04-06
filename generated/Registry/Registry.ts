// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class Register extends ethereum.Event {
  get params(): Register__Params {
    return new Register__Params(this);
  }
}

export class Register__Params {
  _event: Register;

  constructor(event: Register) {
    this._event = event;
  }

  get refunder(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get version(): i32 {
    return this._event.parameters[1].value.toI32();
  }
}

export class UpdateRefundable extends ethereum.Event {
  get params(): UpdateRefundable__Params {
    return new UpdateRefundable__Params(this);
  }
}

export class UpdateRefundable__Params {
  _event: UpdateRefundable;

  constructor(event: UpdateRefundable) {
    this._event = event;
  }

  get refunder(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get targetAddress(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get interfaceId(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }

  get supported(): boolean {
    return this._event.parameters[3].value.toBoolean();
  }
}

export class Registry extends ethereum.SmartContract {
  static bind(address: Address): Registry {
    return new Registry("Registry", address);
  }

  getRefunder(index: BigInt): Address {
    let result = super.call("getRefunder", "getRefunder(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(index)
    ]);

    return result[0].toAddress();
  }

  try_getRefunder(index: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getRefunder",
      "getRefunder(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(index)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getRefunderCountFor(target: Address, identifier: Bytes): BigInt {
    let result = super.call(
      "getRefunderCountFor",
      "getRefunderCountFor(address,bytes4):(uint256)",
      [
        ethereum.Value.fromAddress(target),
        ethereum.Value.fromFixedBytes(identifier)
      ]
    );

    return result[0].toBigInt();
  }

  try_getRefunderCountFor(
    target: Address,
    identifier: Bytes
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getRefunderCountFor",
      "getRefunderCountFor(address,bytes4):(uint256)",
      [
        ethereum.Value.fromAddress(target),
        ethereum.Value.fromFixedBytes(identifier)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getRefunderForAtIndex(
    target: Address,
    identifier: Bytes,
    index: BigInt
  ): Address {
    let result = super.call(
      "getRefunderForAtIndex",
      "getRefunderForAtIndex(address,bytes4,uint256):(address)",
      [
        ethereum.Value.fromAddress(target),
        ethereum.Value.fromFixedBytes(identifier),
        ethereum.Value.fromUnsignedBigInt(index)
      ]
    );

    return result[0].toAddress();
  }

  try_getRefunderForAtIndex(
    target: Address,
    identifier: Bytes,
    index: BigInt
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getRefunderForAtIndex",
      "getRefunderForAtIndex(address,bytes4,uint256):(address)",
      [
        ethereum.Value.fromAddress(target),
        ethereum.Value.fromFixedBytes(identifier),
        ethereum.Value.fromUnsignedBigInt(index)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getRefundersCount(): BigInt {
    let result = super.call(
      "getRefundersCount",
      "getRefundersCount():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_getRefundersCount(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getRefundersCount",
      "getRefundersCount():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  refunderVersion(param0: Address): i32 {
    let result = super.call(
      "refunderVersion",
      "refunderVersion(address):(uint8)",
      [ethereum.Value.fromAddress(param0)]
    );

    return result[0].toI32();
  }

  try_refunderVersion(param0: Address): ethereum.CallResult<i32> {
    let result = super.tryCall(
      "refunderVersion",
      "refunderVersion(address):(uint8)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  refundersFor(target: Address, identifier: Bytes): Array<Address> {
    let result = super.call(
      "refundersFor",
      "refundersFor(address,bytes4):(address[])",
      [
        ethereum.Value.fromAddress(target),
        ethereum.Value.fromFixedBytes(identifier)
      ]
    );

    return result[0].toAddressArray();
  }

  try_refundersFor(
    target: Address,
    identifier: Bytes
  ): ethereum.CallResult<Array<Address>> {
    let result = super.tryCall(
      "refundersFor",
      "refundersFor(address,bytes4):(address[])",
      [
        ethereum.Value.fromAddress(target),
        ethereum.Value.fromFixedBytes(identifier)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddressArray());
  }
}

export class RegisterCall extends ethereum.Call {
  get inputs(): RegisterCall__Inputs {
    return new RegisterCall__Inputs(this);
  }

  get outputs(): RegisterCall__Outputs {
    return new RegisterCall__Outputs(this);
  }
}

export class RegisterCall__Inputs {
  _call: RegisterCall;

  constructor(call: RegisterCall) {
    this._call = call;
  }

  get refunder(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get version(): i32 {
    return this._call.inputValues[1].value.toI32();
  }
}

export class RegisterCall__Outputs {
  _call: RegisterCall;

  constructor(call: RegisterCall) {
    this._call = call;
  }
}

export class UpdateRefundableCall extends ethereum.Call {
  get inputs(): UpdateRefundableCall__Inputs {
    return new UpdateRefundableCall__Inputs(this);
  }

  get outputs(): UpdateRefundableCall__Outputs {
    return new UpdateRefundableCall__Outputs(this);
  }
}

export class UpdateRefundableCall__Inputs {
  _call: UpdateRefundableCall;

  constructor(call: UpdateRefundableCall) {
    this._call = call;
  }

  get target(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get identifier(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }

  get supported(): boolean {
    return this._call.inputValues[2].value.toBoolean();
  }
}

export class UpdateRefundableCall__Outputs {
  _call: UpdateRefundableCall;

  constructor(call: UpdateRefundableCall) {
    this._call = call;
  }
}
