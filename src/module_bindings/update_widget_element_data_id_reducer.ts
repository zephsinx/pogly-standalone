// THIS FILE IS AUTOMATICALLY GENERATED BY SPACETIMEDB. EDITS TO THIS FILE
// WILL NOT BE SAVED. MODIFY TABLES IN RUST INSTEAD.

// @ts-ignore
import { __SPACETIMEDB__, AlgebraicType, ProductType, BuiltinType, ProductTypeElement, DatabaseTable, AlgebraicValue, ReducerArgsAdapter, SumTypeVariant, Serializer, Identity, Address, ReducerEvent, Reducer, SpacetimeDBClient } from "@clockworklabs/spacetimedb-sdk";

export class UpdateWidgetElementDataIdReducer extends Reducer
{
	public static reducerName: string = "UpdateWidgetElementDataId";
	public static call(_elementId: number, _elementDataId: number) {
		this.getReducer().call(_elementId, _elementDataId);
	}

	public call(_elementId: number, _elementDataId: number) {
		const serializer = this.client.getSerializer();
		let _elementIdType = AlgebraicType.createPrimitiveType(BuiltinType.Type.U32);
		serializer.write(_elementIdType, _elementId);
		let _elementDataIdType = AlgebraicType.createPrimitiveType(BuiltinType.Type.U32);
		serializer.write(_elementDataIdType, _elementDataId);
		this.client.call("UpdateWidgetElementDataId", serializer);
	}

	public static deserializeArgs(adapter: ReducerArgsAdapter): any[] {
		let elementIdType = AlgebraicType.createPrimitiveType(BuiltinType.Type.U32);
		let elementIdValue = AlgebraicValue.deserialize(elementIdType, adapter.next())
		let elementId = elementIdValue.asNumber();
		let elementDataIdType = AlgebraicType.createPrimitiveType(BuiltinType.Type.U32);
		let elementDataIdValue = AlgebraicValue.deserialize(elementDataIdType, adapter.next())
		let elementDataId = elementDataIdValue.asNumber();
		return [elementId, elementDataId];
	}

	public static on(callback: (reducerEvent: ReducerEvent, _elementId: number, _elementDataId: number) => void) {
		this.getReducer().on(callback);
	}
	public on(callback: (reducerEvent: ReducerEvent, _elementId: number, _elementDataId: number) => void)
	{
		this.client.on("reducer:UpdateWidgetElementDataId", callback);
	}
}


export default UpdateWidgetElementDataIdReducer
