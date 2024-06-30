// THIS FILE IS AUTOMATICALLY GENERATED BY SPACETIMEDB. EDITS TO THIS FILE
// WILL NOT BE SAVED. MODIFY TABLES IN RUST INSTEAD.

// @ts-ignore
import { __SPACETIMEDB__, AlgebraicType, ProductType, BuiltinType, ProductTypeElement, SumType, SumTypeVariant, DatabaseTable, AlgebraicValue, ReducerEvent, Identity, Address, ClientDB, SpacetimeDBClient } from "@clockworklabs/spacetimedb-sdk";

export class Config extends DatabaseTable
{
	public static db: ClientDB = __SPACETIMEDB__.clientDB;
	public static tableName = "Config";
	public version: number;
	public ownerIdentity: Identity;
	public streamingPlatform: string;
	public streamName: string;
	public debugMode: boolean;
	public updateHz: number;
	public editorBorder: number;
	public authentication: boolean;
	public strictMode: boolean;
	public configInit: boolean;

	public static primaryKey: string | undefined = "version";

	constructor(version: number, ownerIdentity: Identity, streamingPlatform: string, streamName: string, debugMode: boolean, updateHz: number, editorBorder: number, authentication: boolean, strictMode: boolean, configInit: boolean) {
	super();
		this.version = version;
		this.ownerIdentity = ownerIdentity;
		this.streamingPlatform = streamingPlatform;
		this.streamName = streamName;
		this.debugMode = debugMode;
		this.updateHz = updateHz;
		this.editorBorder = editorBorder;
		this.authentication = authentication;
		this.strictMode = strictMode;
		this.configInit = configInit;
	}

	public static serialize(value: Config): object {
		return [
		value.version, Array.from(value.ownerIdentity.toUint8Array()), value.streamingPlatform, value.streamName, value.debugMode, value.updateHz, value.editorBorder, value.authentication, value.strictMode, value.configInit
		];
	}

	public static getAlgebraicType(): AlgebraicType
	{
		return AlgebraicType.createProductType([
			new ProductTypeElement("version", AlgebraicType.createPrimitiveType(BuiltinType.Type.U32)),
			new ProductTypeElement("ownerIdentity", AlgebraicType.createProductType([
			new ProductTypeElement("__identity_bytes", AlgebraicType.createArrayType(AlgebraicType.createPrimitiveType(BuiltinType.Type.U8))),
		])),
			new ProductTypeElement("streamingPlatform", AlgebraicType.createPrimitiveType(BuiltinType.Type.String)),
			new ProductTypeElement("streamName", AlgebraicType.createPrimitiveType(BuiltinType.Type.String)),
			new ProductTypeElement("debugMode", AlgebraicType.createPrimitiveType(BuiltinType.Type.Bool)),
			new ProductTypeElement("updateHz", AlgebraicType.createPrimitiveType(BuiltinType.Type.U32)),
			new ProductTypeElement("editorBorder", AlgebraicType.createPrimitiveType(BuiltinType.Type.U32)),
			new ProductTypeElement("authentication", AlgebraicType.createPrimitiveType(BuiltinType.Type.Bool)),
			new ProductTypeElement("strictMode", AlgebraicType.createPrimitiveType(BuiltinType.Type.Bool)),
			new ProductTypeElement("configInit", AlgebraicType.createPrimitiveType(BuiltinType.Type.Bool)),
		]);
	}

	public static fromValue(value: AlgebraicValue): Config
	{
		let productValue = value.asProductValue();
		let __Version = productValue.elements[0].asNumber();
		let __OwnerIdentity = new Identity(productValue.elements[1].asProductValue().elements[0].asBytes());
		let __StreamingPlatform = productValue.elements[2].asString();
		let __StreamName = productValue.elements[3].asString();
		let __DebugMode = productValue.elements[4].asBoolean();
		let __UpdateHz = productValue.elements[5].asNumber();
		let __EditorBorder = productValue.elements[6].asNumber();
		let __Authentication = productValue.elements[7].asBoolean();
		let __StrictMode = productValue.elements[8].asBoolean();
		let __ConfigInit = productValue.elements[9].asBoolean();
		return new this(__Version, __OwnerIdentity, __StreamingPlatform, __StreamName, __DebugMode, __UpdateHz, __EditorBorder, __Authentication, __StrictMode, __ConfigInit);
	}

	public static *filterByVersion(value: number): IterableIterator<Config>
	{
		for (let instance of this.db.getTable("Config").getInstances())
		{
			if (instance.version === value) {
				yield instance;
			}
		}
	}

	public static findByVersion(value: number): Config | undefined
	{
		return this.filterByVersion(value).next().value;
	}

	public static *filterByOwnerIdentity(value: Identity): IterableIterator<Config>
	{
		for (let instance of this.db.getTable("Config").getInstances())
		{
			if (instance.ownerIdentity.isEqual(value)) {
				yield instance;
			}
		}
	}

	public static *filterByStreamingPlatform(value: string): IterableIterator<Config>
	{
		for (let instance of this.db.getTable("Config").getInstances())
		{
			if (instance.streamingPlatform === value) {
				yield instance;
			}
		}
	}

	public static *filterByStreamName(value: string): IterableIterator<Config>
	{
		for (let instance of this.db.getTable("Config").getInstances())
		{
			if (instance.streamName === value) {
				yield instance;
			}
		}
	}

	public static *filterByDebugMode(value: boolean): IterableIterator<Config>
	{
		for (let instance of this.db.getTable("Config").getInstances())
		{
			if (instance.debugMode === value) {
				yield instance;
			}
		}
	}

	public static *filterByUpdateHz(value: number): IterableIterator<Config>
	{
		for (let instance of this.db.getTable("Config").getInstances())
		{
			if (instance.updateHz === value) {
				yield instance;
			}
		}
	}

	public static *filterByEditorBorder(value: number): IterableIterator<Config>
	{
		for (let instance of this.db.getTable("Config").getInstances())
		{
			if (instance.editorBorder === value) {
				yield instance;
			}
		}
	}

	public static *filterByAuthentication(value: boolean): IterableIterator<Config>
	{
		for (let instance of this.db.getTable("Config").getInstances())
		{
			if (instance.authentication === value) {
				yield instance;
			}
		}
	}

	public static *filterByStrictMode(value: boolean): IterableIterator<Config>
	{
		for (let instance of this.db.getTable("Config").getInstances())
		{
			if (instance.strictMode === value) {
				yield instance;
			}
		}
	}

	public static *filterByConfigInit(value: boolean): IterableIterator<Config>
	{
		for (let instance of this.db.getTable("Config").getInstances())
		{
			if (instance.configInit === value) {
				yield instance;
			}
		}
	}


}

export default Config;
