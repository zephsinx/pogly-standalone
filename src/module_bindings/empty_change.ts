// THIS FILE IS AUTOMATICALLY GENERATED BY SPACETIMEDB. EDITS TO THIS FILE
// WILL NOT BE SAVED. MODIFY TABLES IN RUST INSTEAD.

// @ts-ignore
import { __SPACETIMEDB__, AlgebraicType, ProductType, BuiltinType, ProductTypeElement, SumType, SumTypeVariant, DatabaseTable, AlgebraicValue, ReducerEvent, Identity, Address, ClientDB, SpacetimeDBClient } from "@clockworklabs/spacetimedb-sdk";

export class EmptyChange extends DatabaseTable
{
	public static db: ClientDB = __SPACETIMEDB__.clientDB;
	public static tableName = "EmptyChange";

	public static primaryKey: string | undefined = undefined;

	constructor() {
	super();
	}

	public static serialize(value: EmptyChange): object {
		return [

		];
	}

	public static getAlgebraicType(): AlgebraicType
	{
		return AlgebraicType.createProductType([
		]);
	}

	public static fromValue(value: AlgebraicValue): EmptyChange
	{
		let productValue = value.asProductValue();
		return new this();
	}

}

export default EmptyChange;
