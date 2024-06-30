// THIS FILE IS AUTOMATICALLY GENERATED BY SPACETIMEDB. EDITS TO THIS FILE
// WILL NOT BE SAVED. MODIFY TABLES IN RUST INSTEAD.

// @ts-ignore
import { __SPACETIMEDB__, AlgebraicType, ProductType, BuiltinType, ProductTypeElement, DatabaseTable, AlgebraicValue, ReducerArgsAdapter, SumTypeVariant, Serializer, Identity, Address, ReducerEvent, Reducer, SpacetimeDBClient } from "@clockworklabs/spacetimedb-sdk";

export class UpdateImageElementWidthReducer extends Reducer
{
	public static reducerName: string = "UpdateImageElementWidth";
	public static call(_elementId: number, _width: number) {
		this.getReducer().call(_elementId, _width);
	}

	public call(_elementId: number, _width: number) {
		const serializer = this.client.getSerializer();
		let _elementIdType = AlgebraicType.createPrimitiveType(BuiltinType.Type.U32);
		serializer.write(_elementIdType, _elementId);
		let _widthType = AlgebraicType.createPrimitiveType(BuiltinType.Type.I32);
		serializer.write(_widthType, _width);
		this.client.call("UpdateImageElementWidth", serializer);
	}

	public static deserializeArgs(adapter: ReducerArgsAdapter): any[] {
		let elementIdType = AlgebraicType.createPrimitiveType(BuiltinType.Type.U32);
		let elementIdValue = AlgebraicValue.deserialize(elementIdType, adapter.next())
		let elementId = elementIdValue.asNumber();
		let widthType = AlgebraicType.createPrimitiveType(BuiltinType.Type.I32);
		let widthValue = AlgebraicValue.deserialize(widthType, adapter.next())
		let width = widthValue.asNumber();
		return [elementId, width];
	}

	public static on(callback: (reducerEvent: ReducerEvent, _elementId: number, _width: number) => void) {
		this.getReducer().on(callback);
	}
	public on(callback: (reducerEvent: ReducerEvent, _elementId: number, _width: number) => void)
	{
		this.client.on("reducer:UpdateImageElementWidth", callback);
	}
}


export default UpdateImageElementWidthReducer
