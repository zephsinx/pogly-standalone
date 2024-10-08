// THIS FILE IS AUTOMATICALLY GENERATED BY SPACETIMEDB. EDITS TO THIS FILE
// WILL NOT BE SAVED. MODIFY TABLES IN RUST INSTEAD.

// @ts-ignore
import { __SPACETIMEDB__, AlgebraicType, ProductType, BuiltinType, ProductTypeElement, DatabaseTable, AlgebraicValue, ReducerArgsAdapter, SumTypeVariant, Serializer, Identity, Address, ReducerEvent, Reducer, SpacetimeDBClient } from "@clockworklabs/spacetimedb-sdk";

export class UpdateTextElementTextReducer extends Reducer
{
	public static reducerName: string = "UpdateTextElementText";
	public static call(_elementId: number, _text: string) {
		this.getReducer().call(_elementId, _text);
	}

	public call(_elementId: number, _text: string) {
		const serializer = this.client.getSerializer();
		let _elementIdType = AlgebraicType.createPrimitiveType(BuiltinType.Type.U32);
		serializer.write(_elementIdType, _elementId);
		let _textType = AlgebraicType.createPrimitiveType(BuiltinType.Type.String);
		serializer.write(_textType, _text);
		this.client.call("UpdateTextElementText", serializer);
	}

	public static deserializeArgs(adapter: ReducerArgsAdapter): any[] {
		let elementIdType = AlgebraicType.createPrimitiveType(BuiltinType.Type.U32);
		let elementIdValue = AlgebraicValue.deserialize(elementIdType, adapter.next())
		let elementId = elementIdValue.asNumber();
		let textType = AlgebraicType.createPrimitiveType(BuiltinType.Type.String);
		let textValue = AlgebraicValue.deserialize(textType, adapter.next())
		let text = textValue.asString();
		return [elementId, text];
	}

	public static on(callback: (reducerEvent: ReducerEvent, _elementId: number, _text: string) => void) {
		this.getReducer().on(callback);
	}
	public on(callback: (reducerEvent: ReducerEvent, _elementId: number, _text: string) => void)
	{
		this.client.on("reducer:UpdateTextElementText", callback);
	}
}


export default UpdateTextElementTextReducer
