// GENERATED CODE -- DO NOT EDIT!

// package: registry
// file: proto/registry.proto

import * as proto_registry_pb from "../proto/registry_pb";
import * as grpc from "@grpc/grpc-js";

interface IRegistryService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  register: grpc.MethodDefinition<proto_registry_pb.RegisterCall, proto_registry_pb.RegisterResponse>;
  routeRegister: grpc.MethodDefinition<proto_registry_pb.RouteRegisterCall, proto_registry_pb.RouteRegisterResponse>;
  discovery: grpc.MethodDefinition<proto_registry_pb.DiscoveryCall, proto_registry_pb.DiscoveryResponse>;
  deregister: grpc.MethodDefinition<proto_registry_pb.DeregisterCall, proto_registry_pb.DeregisterResponse>;
}

export const RegistryService: IRegistryService;

export interface IRegistryServer extends grpc.UntypedServiceImplementation {
  register: grpc.handleUnaryCall<proto_registry_pb.RegisterCall, proto_registry_pb.RegisterResponse>;
  routeRegister: grpc.handleUnaryCall<proto_registry_pb.RouteRegisterCall, proto_registry_pb.RouteRegisterResponse>;
  discovery: grpc.handleUnaryCall<proto_registry_pb.DiscoveryCall, proto_registry_pb.DiscoveryResponse>;
  deregister: grpc.handleUnaryCall<proto_registry_pb.DeregisterCall, proto_registry_pb.DeregisterResponse>;
}

export class RegistryClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  register(argument: proto_registry_pb.RegisterCall, callback: grpc.requestCallback<proto_registry_pb.RegisterResponse>): grpc.ClientUnaryCall;
  register(argument: proto_registry_pb.RegisterCall, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<proto_registry_pb.RegisterResponse>): grpc.ClientUnaryCall;
  register(argument: proto_registry_pb.RegisterCall, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<proto_registry_pb.RegisterResponse>): grpc.ClientUnaryCall;
  routeRegister(argument: proto_registry_pb.RouteRegisterCall, callback: grpc.requestCallback<proto_registry_pb.RouteRegisterResponse>): grpc.ClientUnaryCall;
  routeRegister(argument: proto_registry_pb.RouteRegisterCall, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<proto_registry_pb.RouteRegisterResponse>): grpc.ClientUnaryCall;
  routeRegister(argument: proto_registry_pb.RouteRegisterCall, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<proto_registry_pb.RouteRegisterResponse>): grpc.ClientUnaryCall;
  discovery(argument: proto_registry_pb.DiscoveryCall, callback: grpc.requestCallback<proto_registry_pb.DiscoveryResponse>): grpc.ClientUnaryCall;
  discovery(argument: proto_registry_pb.DiscoveryCall, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<proto_registry_pb.DiscoveryResponse>): grpc.ClientUnaryCall;
  discovery(argument: proto_registry_pb.DiscoveryCall, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<proto_registry_pb.DiscoveryResponse>): grpc.ClientUnaryCall;
  deregister(argument: proto_registry_pb.DeregisterCall, callback: grpc.requestCallback<proto_registry_pb.DeregisterResponse>): grpc.ClientUnaryCall;
  deregister(argument: proto_registry_pb.DeregisterCall, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<proto_registry_pb.DeregisterResponse>): grpc.ClientUnaryCall;
  deregister(argument: proto_registry_pb.DeregisterCall, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<proto_registry_pb.DeregisterResponse>): grpc.ClientUnaryCall;
}
