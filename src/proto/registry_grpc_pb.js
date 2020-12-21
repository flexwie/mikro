// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var proto_registry_pb = require('../proto/registry_pb.js');

function serialize_registry_DeregisterCall(arg) {
  if (!(arg instanceof proto_registry_pb.DeregisterCall)) {
    throw new Error('Expected argument of type registry.DeregisterCall');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_registry_DeregisterCall(buffer_arg) {
  return proto_registry_pb.DeregisterCall.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_registry_DeregisterResponse(arg) {
  if (!(arg instanceof proto_registry_pb.DeregisterResponse)) {
    throw new Error('Expected argument of type registry.DeregisterResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_registry_DeregisterResponse(buffer_arg) {
  return proto_registry_pb.DeregisterResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_registry_DiscoveryCall(arg) {
  if (!(arg instanceof proto_registry_pb.DiscoveryCall)) {
    throw new Error('Expected argument of type registry.DiscoveryCall');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_registry_DiscoveryCall(buffer_arg) {
  return proto_registry_pb.DiscoveryCall.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_registry_DiscoveryResponse(arg) {
  if (!(arg instanceof proto_registry_pb.DiscoveryResponse)) {
    throw new Error('Expected argument of type registry.DiscoveryResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_registry_DiscoveryResponse(buffer_arg) {
  return proto_registry_pb.DiscoveryResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_registry_RegisterCall(arg) {
  if (!(arg instanceof proto_registry_pb.RegisterCall)) {
    throw new Error('Expected argument of type registry.RegisterCall');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_registry_RegisterCall(buffer_arg) {
  return proto_registry_pb.RegisterCall.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_registry_RegisterResponse(arg) {
  if (!(arg instanceof proto_registry_pb.RegisterResponse)) {
    throw new Error('Expected argument of type registry.RegisterResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_registry_RegisterResponse(buffer_arg) {
  return proto_registry_pb.RegisterResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_registry_RouteRegisterCall(arg) {
  if (!(arg instanceof proto_registry_pb.RouteRegisterCall)) {
    throw new Error('Expected argument of type registry.RouteRegisterCall');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_registry_RouteRegisterCall(buffer_arg) {
  return proto_registry_pb.RouteRegisterCall.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_registry_RouteRegisterResponse(arg) {
  if (!(arg instanceof proto_registry_pb.RouteRegisterResponse)) {
    throw new Error('Expected argument of type registry.RouteRegisterResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_registry_RouteRegisterResponse(buffer_arg) {
  return proto_registry_pb.RouteRegisterResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var RegistryService = exports.RegistryService = {
  register: {
    path: '/registry.Registry/register',
    requestStream: false,
    responseStream: false,
    requestType: proto_registry_pb.RegisterCall,
    responseType: proto_registry_pb.RegisterResponse,
    requestSerialize: serialize_registry_RegisterCall,
    requestDeserialize: deserialize_registry_RegisterCall,
    responseSerialize: serialize_registry_RegisterResponse,
    responseDeserialize: deserialize_registry_RegisterResponse,
  },
  routeRegister: {
    path: '/registry.Registry/routeRegister',
    requestStream: false,
    responseStream: false,
    requestType: proto_registry_pb.RouteRegisterCall,
    responseType: proto_registry_pb.RouteRegisterResponse,
    requestSerialize: serialize_registry_RouteRegisterCall,
    requestDeserialize: deserialize_registry_RouteRegisterCall,
    responseSerialize: serialize_registry_RouteRegisterResponse,
    responseDeserialize: deserialize_registry_RouteRegisterResponse,
  },
  discovery: {
    path: '/registry.Registry/discovery',
    requestStream: false,
    responseStream: false,
    requestType: proto_registry_pb.DiscoveryCall,
    responseType: proto_registry_pb.DiscoveryResponse,
    requestSerialize: serialize_registry_DiscoveryCall,
    requestDeserialize: deserialize_registry_DiscoveryCall,
    responseSerialize: serialize_registry_DiscoveryResponse,
    responseDeserialize: deserialize_registry_DiscoveryResponse,
  },
  deregister: {
    path: '/registry.Registry/deregister',
    requestStream: false,
    responseStream: false,
    requestType: proto_registry_pb.DeregisterCall,
    responseType: proto_registry_pb.DeregisterResponse,
    requestSerialize: serialize_registry_DeregisterCall,
    requestDeserialize: deserialize_registry_DeregisterCall,
    responseSerialize: serialize_registry_DeregisterResponse,
    responseDeserialize: deserialize_registry_DeregisterResponse,
  },
};

exports.RegistryClient = grpc.makeGenericClientConstructor(RegistryService);
