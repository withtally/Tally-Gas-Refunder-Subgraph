// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Refunder extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Refunder entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Refunder entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Refunder", id.toString(), this);
  }

  static load(id: string): Refunder | null {
    return store.get("Refunder", id) as Refunder | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get owner(): string {
    let value = this.get("owner");
    return value.toString();
  }

  set owner(value: string) {
    this.set("owner", Value.fromString(value));
  }

  get maxGasPrice(): BigInt {
    let value = this.get("maxGasPrice");
    return value.toBigInt();
  }

  set maxGasPrice(value: BigInt) {
    this.set("maxGasPrice", Value.fromBigInt(value));
  }

  get version(): BigInt {
    let value = this.get("version");
    return value.toBigInt();
  }

  set version(value: BigInt) {
    this.set("version", Value.fromBigInt(value));
  }

  get isPaused(): boolean {
    let value = this.get("isPaused");
    return value.toBoolean();
  }

  set isPaused(value: boolean) {
    this.set("isPaused", Value.fromBoolean(value));
  }

  get refundables(): Array<string> {
    let value = this.get("refundables");
    return value.toStringArray();
  }

  set refundables(value: Array<string>) {
    this.set("refundables", Value.fromStringArray(value));
  }

  get deposits(): Array<string> {
    let value = this.get("deposits");
    return value.toStringArray();
  }

  set deposits(value: Array<string>) {
    this.set("deposits", Value.fromStringArray(value));
  }

  get withdrawls(): Array<string> {
    let value = this.get("withdrawls");
    return value.toStringArray();
  }

  set withdrawls(value: Array<string>) {
    this.set("withdrawls", Value.fromStringArray(value));
  }

  get refunds(): Array<string> {
    let value = this.get("refunds");
    return value.toStringArray();
  }

  set refunds(value: Array<string>) {
    this.set("refunds", Value.fromStringArray(value));
  }
}

export class Refundable extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Refundable entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Refundable entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Refundable", id.toString(), this);
  }

  static load(id: string): Refundable | null {
    return store.get("Refundable", id) as Refundable | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get refunder(): string {
    let value = this.get("refunder");
    return value.toString();
  }

  set refunder(value: string) {
    this.set("refunder", Value.fromString(value));
  }

  get target(): string {
    let value = this.get("target");
    return value.toString();
  }

  set target(value: string) {
    this.set("target", Value.fromString(value));
  }

  get identifier(): Bytes {
    let value = this.get("identifier");
    return value.toBytes();
  }

  set identifier(value: Bytes) {
    this.set("identifier", Value.fromBytes(value));
  }

  get validatingContract(): Bytes | null {
    let value = this.get("validatingContract");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set validatingContract(value: Bytes | null) {
    if (value === null) {
      this.unset("validatingContract");
    } else {
      this.set("validatingContract", Value.fromBytes(value as Bytes));
    }
  }

  get validatingIdentifier(): Bytes | null {
    let value = this.get("validatingIdentifier");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set validatingIdentifier(value: Bytes | null) {
    if (value === null) {
      this.unset("validatingIdentifier");
    } else {
      this.set("validatingIdentifier", Value.fromBytes(value as Bytes));
    }
  }

  get isRefundable(): boolean {
    let value = this.get("isRefundable");
    return value.toBoolean();
  }

  set isRefundable(value: boolean) {
    this.set("isRefundable", Value.fromBoolean(value));
  }

  get refunds(): Array<string> {
    let value = this.get("refunds");
    return value.toStringArray();
  }

  set refunds(value: Array<string>) {
    this.set("refunds", Value.fromStringArray(value));
  }
}

export class Refund extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Refund entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Refund entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Refund", id.toString(), this);
  }

  static load(id: string): Refund | null {
    return store.get("Refund", id) as Refund | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get refundable(): string {
    let value = this.get("refundable");
    return value.toString();
  }

  set refundable(value: string) {
    this.set("refundable", Value.fromString(value));
  }

  get refunder(): string {
    let value = this.get("refunder");
    return value.toString();
  }

  set refunder(value: string) {
    this.set("refunder", Value.fromString(value));
  }

  get caller(): string {
    let value = this.get("caller");
    return value.toString();
  }

  set caller(value: string) {
    this.set("caller", Value.fromString(value));
  }

  get target(): string {
    let value = this.get("target");
    return value.toString();
  }

  set target(value: string) {
    this.set("target", Value.fromString(value));
  }

  get identifier(): string {
    let value = this.get("identifier");
    return value.toString();
  }

  set identifier(value: string) {
    this.set("identifier", Value.fromString(value));
  }

  get refund(): BigInt {
    let value = this.get("refund");
    return value.toBigInt();
  }

  set refund(value: BigInt) {
    this.set("refund", Value.fromBigInt(value));
  }
}

export class Withdrawl extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Withdrawl entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Withdrawl entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Withdrawl", id.toString(), this);
  }

  static load(id: string): Withdrawl | null {
    return store.get("Withdrawl", id) as Withdrawl | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get value(): BigInt {
    let value = this.get("value");
    return value.toBigInt();
  }

  set value(value: BigInt) {
    this.set("value", Value.fromBigInt(value));
  }

  get recipient(): Bytes {
    let value = this.get("recipient");
    return value.toBytes();
  }

  set recipient(value: Bytes) {
    this.set("recipient", Value.fromBytes(value));
  }

  get refunder(): string {
    let value = this.get("refunder");
    return value.toString();
  }

  set refunder(value: string) {
    this.set("refunder", Value.fromString(value));
  }
}

export class Deposit extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Deposit entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Deposit entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Deposit", id.toString(), this);
  }

  static load(id: string): Deposit | null {
    return store.get("Deposit", id) as Deposit | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get value(): BigInt {
    let value = this.get("value");
    return value.toBigInt();
  }

  set value(value: BigInt) {
    this.set("value", Value.fromBigInt(value));
  }

  get depositor(): Bytes {
    let value = this.get("depositor");
    return value.toBytes();
  }

  set depositor(value: Bytes) {
    this.set("depositor", Value.fromBytes(value));
  }

  get refunder(): string {
    let value = this.get("refunder");
    return value.toString();
  }

  set refunder(value: string) {
    this.set("refunder", Value.fromString(value));
  }
}
