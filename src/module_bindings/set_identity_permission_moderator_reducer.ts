// THIS FILE IS AUTOMATICALLY GENERATED BY SPACETIMEDB. EDITS TO THIS FILE
// WILL NOT BE SAVED. MODIFY TABLES IN RUST INSTEAD.

// @ts-ignore
import { __SPACETIMEDB__, AlgebraicType, ProductType, BuiltinType, ProductTypeElement, DatabaseTable, AlgebraicValue, ReducerArgsAdapter, SumTypeVariant, Serializer, Identity, Address, ReducerEvent, Reducer, SpacetimeDBClient } from "@clockworklabs/spacetimedb-sdk";

export class SetIdentityPermissionModeratorReducer extends Reducer
{
	public static reducerName: string = "SetIdentityPermissionModerator";
	public static call(_identity: Identity) {
		this.getReducer().call(_identity);
	}

	public call(_identity: Identity) {
		const serializer = this.client.getSerializer();
		let _identityType = AlgebraicType.createProductType([
			new ProductTypeElement("__identity_bytes", AlgebraicType.createArrayType(AlgebraicType.createPrimitiveType(BuiltinType.Type.U8))),
		]);
		serializer.write(_identityType, _identity);
		this.client.call("SetIdentityPermissionModerator", serializer);
	}

	public static deserializeArgs(adapter: ReducerArgsAdapter): any[] {
		let identityType = AlgebraicType.createProductType([
			new ProductTypeElement("__identity_bytes", AlgebraicType.createArrayType(AlgebraicType.createPrimitiveType(BuiltinType.Type.U8))),
		]);
		let identityValue = AlgebraicValue.deserialize(identityType, adapter.next())
		let identity = new Identity(identityValue.asProductValue().elements[0].asBytes());
		return [identity];
	}

	public static on(callback: (reducerEvent: ReducerEvent, _identity: Identity) => void) {
		this.getReducer().on(callback);
	}
	public on(callback: (reducerEvent: ReducerEvent, _identity: Identity) => void)
	{
		this.client.on("reducer:SetIdentityPermissionModerator", callback);
	}
}


export default SetIdentityPermissionModeratorReducer
