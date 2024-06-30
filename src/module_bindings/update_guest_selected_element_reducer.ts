// THIS FILE IS AUTOMATICALLY GENERATED BY SPACETIMEDB. EDITS TO THIS FILE
// WILL NOT BE SAVED. MODIFY TABLES IN RUST INSTEAD.

// @ts-ignore
import { __SPACETIMEDB__, AlgebraicType, ProductType, BuiltinType, ProductTypeElement, DatabaseTable, AlgebraicValue, ReducerArgsAdapter, SumTypeVariant, Serializer, Identity, Address, ReducerEvent, Reducer, SpacetimeDBClient } from "@clockworklabs/spacetimedb-sdk";

export class UpdateGuestSelectedElementReducer extends Reducer
{
	public static reducerName: string = "UpdateGuestSelectedElement";
	public static call(_selectedElementId: number) {
		this.getReducer().call(_selectedElementId);
	}

	public call(_selectedElementId: number) {
		const serializer = this.client.getSerializer();
		let _selectedElementIdType = AlgebraicType.createPrimitiveType(BuiltinType.Type.U32);
		serializer.write(_selectedElementIdType, _selectedElementId);
		this.client.call("UpdateGuestSelectedElement", serializer);
	}

	public static deserializeArgs(adapter: ReducerArgsAdapter): any[] {
		let selectedElementIdType = AlgebraicType.createPrimitiveType(BuiltinType.Type.U32);
		let selectedElementIdValue = AlgebraicValue.deserialize(selectedElementIdType, adapter.next())
		let selectedElementId = selectedElementIdValue.asNumber();
		return [selectedElementId];
	}

	public static on(callback: (reducerEvent: ReducerEvent, _selectedElementId: number) => void) {
		this.getReducer().on(callback);
	}
	public on(callback: (reducerEvent: ReducerEvent, _selectedElementId: number) => void)
	{
		this.client.on("reducer:UpdateGuestSelectedElement", callback);
	}
}


export default UpdateGuestSelectedElementReducer
