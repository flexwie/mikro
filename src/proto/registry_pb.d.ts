// package: registry
// file: proto/registry.proto

import * as jspb from "google-protobuf";

export class RegisterCall extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getType(): string;
  setType(value: string): void;

  getLang(): string;
  setLang(value: string): void;

  getHost(): string;
  setHost(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterCall.AsObject;
  static toObject(includeInstance: boolean, msg: RegisterCall): RegisterCall.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RegisterCall, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisterCall;
  static deserializeBinaryFromReader(message: RegisterCall, reader: jspb.BinaryReader): RegisterCall;
}

export namespace RegisterCall {
  export type AsObject = {
    name: string,
    type: string,
    lang: string,
    host: string,
  }
}

export class RegisterResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  getMessage(): string;
  setMessage(value: string): void;

  getReplicas(): number;
  setReplicas(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RegisterResponse): RegisterResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RegisterResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisterResponse;
  static deserializeBinaryFromReader(message: RegisterResponse, reader: jspb.BinaryReader): RegisterResponse;
}

export namespace RegisterResponse {
  export type AsObject = {
    success: boolean,
    message: string,
    replicas: number,
  }
}

export class RouteRegisterCall extends jspb.Message {
  getType(): string;
  setType(value: string): void;

  getFunctionname(): string;
  setFunctionname(value: string): void;

  getRestmethod(): string;
  setRestmethod(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RouteRegisterCall.AsObject;
  static toObject(includeInstance: boolean, msg: RouteRegisterCall): RouteRegisterCall.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RouteRegisterCall, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RouteRegisterCall;
  static deserializeBinaryFromReader(message: RouteRegisterCall, reader: jspb.BinaryReader): RouteRegisterCall;
}

export namespace RouteRegisterCall {
  export type AsObject = {
    type: string,
    functionname: string,
    restmethod: string,
  }
}

export class RouteRegisterResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RouteRegisterResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RouteRegisterResponse): RouteRegisterResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RouteRegisterResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RouteRegisterResponse;
  static deserializeBinaryFromReader(message: RouteRegisterResponse, reader: jspb.BinaryReader): RouteRegisterResponse;
}

export namespace RouteRegisterResponse {
  export type AsObject = {
    success: boolean,
  }
}

export class DiscoveryCall extends jspb.Message {
  getType(): string;
  setType(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DiscoveryCall.AsObject;
  static toObject(includeInstance: boolean, msg: DiscoveryCall): DiscoveryCall.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DiscoveryCall, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DiscoveryCall;
  static deserializeBinaryFromReader(message: DiscoveryCall, reader: jspb.BinaryReader): DiscoveryCall;
}

export namespace DiscoveryCall {
  export type AsObject = {
    type: string,
  }
}

export class DiscoveryResponse extends jspb.Message {
  getHost(): string;
  setHost(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DiscoveryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DiscoveryResponse): DiscoveryResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DiscoveryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DiscoveryResponse;
  static deserializeBinaryFromReader(message: DiscoveryResponse, reader: jspb.BinaryReader): DiscoveryResponse;
}

export namespace DiscoveryResponse {
  export type AsObject = {
    host: string,
  }
}

export class DeregisterCall extends jspb.Message {
  getType(): string;
  setType(value: string): void;

  getName(): string;
  setName(value: string): void;

  getHost(): string;
  setHost(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeregisterCall.AsObject;
  static toObject(includeInstance: boolean, msg: DeregisterCall): DeregisterCall.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeregisterCall, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeregisterCall;
  static deserializeBinaryFromReader(message: DeregisterCall, reader: jspb.BinaryReader): DeregisterCall;
}

export namespace DeregisterCall {
  export type AsObject = {
    type: string,
    name: string,
    host: string,
  }
}

export class DeregisterResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeregisterResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeregisterResponse): DeregisterResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeregisterResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeregisterResponse;
  static deserializeBinaryFromReader(message: DeregisterResponse, reader: jspb.BinaryReader): DeregisterResponse;
}

export namespace DeregisterResponse {
  export type AsObject = {
  }
}

