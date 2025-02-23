// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v1.178.0
//   protoc               v5.27.2
// source: package.proto

// istanbul ignore file
/* eslint-disable */
import * as _m0 from 'protobufjs/minimal';

export const protobufPackage = '';

export enum RetirementReason {
  RETIRED_OTHER = 0,
  RETIRED_INVALID = 1,
  RETIRED_SECURITY = 2,
  RETIRED_DEPRECATED = 3,
  RETIRED_RENAMED = 4,
  UNRECOGNIZED = -1,
}

export function retirementReasonFromJSON(object: any): RetirementReason {
  switch (object) {
    case 0:
    case 'RETIRED_OTHER':
      return RetirementReason.RETIRED_OTHER;
    case 1:
    case 'RETIRED_INVALID':
      return RetirementReason.RETIRED_INVALID;
    case 2:
    case 'RETIRED_SECURITY':
      return RetirementReason.RETIRED_SECURITY;
    case 3:
    case 'RETIRED_DEPRECATED':
      return RetirementReason.RETIRED_DEPRECATED;
    case 4:
    case 'RETIRED_RENAMED':
      return RetirementReason.RETIRED_RENAMED;
    case -1:
    case 'UNRECOGNIZED':
    default:
      return RetirementReason.UNRECOGNIZED;
  }
}

export interface Package {
  /** All releases of the package */
  releases: Release[];
  /** Name of package */
  name: string;
  /** Name of repository */
  repository: string;
}

export interface Release {
  /** Release version */
  version: string;
  /**
   * sha256 checksum of "inner" package tarball
   * deprecated in favor of outer_checksum
   */
  innerChecksum: Uint8Array;
  /** All dependencies of the release */
  dependencies: Dependency[];
  /**
   * If set the release is retired, a retired release should only be
   * resolved if it has already been locked in a project
   */
  retired?: RetirementStatus | undefined;
  /**
   * sha256 checksum of outer package tarball
   * required when encoding but optional when decoding
   */
  outerChecksum?: Uint8Array | undefined;
}

export interface RetirementStatus {
  reason: RetirementReason;
  message?: string | undefined;
}

export interface Dependency {
  /** Package name of dependency */
  package: string;
  /** Version requirement of dependency */
  requirement: string;
  /** If set and true the package is optional (see dependency resolution) */
  optional?: boolean | undefined;
  /**
   * If set is the OTP application name of the dependency, if not set the
   * application name is the same as the package name
   */
  app?: string | undefined;
  /** If set, the repository where the dependency is located */
  repository?: string | undefined;
}

function createBasePackage(): Package {
  return { releases: [], name: '', repository: '' };
}

export const Package = {
  decode(input: _m0.Reader | Uint8Array, length?: number): Package {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePackage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.releases.push(Release.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.repository = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Package {
    return {
      releases: globalThis.Array.isArray(object?.releases)
        ? object.releases.map((e: any) => Release.fromJSON(e))
        : [],
      name: isSet(object.name) ? globalThis.String(object.name) : '',
      repository: isSet(object.repository)
        ? globalThis.String(object.repository)
        : '',
    };
  },

  create<I extends Exact<DeepPartial<Package>, I>>(base?: I): Package {
    return Package.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Package>, I>>(object: I): Package {
    const message = createBasePackage();
    message.releases =
      object.releases?.map((e) => Release.fromPartial(e)) || [];
    message.name = object.name ?? '';
    message.repository = object.repository ?? '';
    return message;
  },
};

function createBaseRelease(): Release {
  return {
    version: '',
    innerChecksum: new Uint8Array(0),
    dependencies: [],
    retired: undefined,
    outerChecksum: new Uint8Array(0),
  };
}

export const Release = {
  decode(input: _m0.Reader | Uint8Array, length?: number): Release {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRelease();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.version = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.innerChecksum = reader.bytes();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.dependencies.push(Dependency.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.retired = RetirementStatus.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.outerChecksum = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Release {
    return {
      version: isSet(object.version) ? globalThis.String(object.version) : '',
      innerChecksum: isSet(object.innerChecksum)
        ? bytesFromBase64(object.innerChecksum)
        : new Uint8Array(0),
      dependencies: globalThis.Array.isArray(object?.dependencies)
        ? object.dependencies.map((e: any) => Dependency.fromJSON(e))
        : [],
      retired: isSet(object.retired)
        ? RetirementStatus.fromJSON(object.retired)
        : undefined,
      outerChecksum: isSet(object.outerChecksum)
        ? bytesFromBase64(object.outerChecksum)
        : new Uint8Array(0),
    };
  },

  create<I extends Exact<DeepPartial<Release>, I>>(base?: I): Release {
    return Release.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Release>, I>>(object: I): Release {
    const message = createBaseRelease();
    message.version = object.version ?? '';
    message.innerChecksum = object.innerChecksum ?? new Uint8Array(0);
    message.dependencies =
      object.dependencies?.map((e) => Dependency.fromPartial(e)) || [];
    message.retired =
      object.retired !== undefined && object.retired !== null
        ? RetirementStatus.fromPartial(object.retired)
        : undefined;
    message.outerChecksum = object.outerChecksum ?? new Uint8Array(0);
    return message;
  },
};

function createBaseRetirementStatus(): RetirementStatus {
  return { reason: 0, message: '' };
}

export const RetirementStatus = {
  decode(input: _m0.Reader | Uint8Array, length?: number): RetirementStatus {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRetirementStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.reason = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.message = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RetirementStatus {
    return {
      reason: isSet(object.reason)
        ? retirementReasonFromJSON(object.reason)
        : 0,
      message: isSet(object.message) ? globalThis.String(object.message) : '',
    };
  },

  create<I extends Exact<DeepPartial<RetirementStatus>, I>>(
    base?: I,
  ): RetirementStatus {
    return RetirementStatus.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RetirementStatus>, I>>(
    object: I,
  ): RetirementStatus {
    const message = createBaseRetirementStatus();
    message.reason = object.reason ?? 0;
    message.message = object.message ?? '';
    return message;
  },
};

function createBaseDependency(): Dependency {
  return {
    package: '',
    requirement: '',
    optional: false,
    app: '',
    repository: '',
  };
}

export const Dependency = {
  decode(input: _m0.Reader | Uint8Array, length?: number): Dependency {
    const reader =
      input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDependency();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.package = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.requirement = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.optional = reader.bool();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.app = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.repository = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Dependency {
    return {
      package: isSet(object.package) ? globalThis.String(object.package) : '',
      requirement: isSet(object.requirement)
        ? globalThis.String(object.requirement)
        : '',
      optional: isSet(object.optional)
        ? globalThis.Boolean(object.optional)
        : false,
      app: isSet(object.app) ? globalThis.String(object.app) : '',
      repository: isSet(object.repository)
        ? globalThis.String(object.repository)
        : '',
    };
  },

  create<I extends Exact<DeepPartial<Dependency>, I>>(base?: I): Dependency {
    return Dependency.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Dependency>, I>>(
    object: I,
  ): Dependency {
    const message = createBaseDependency();
    message.package = object.package ?? '';
    message.requirement = object.requirement ?? '';
    message.optional = object.optional ?? false;
    message.app = object.app ?? '';
    message.repository = object.repository ?? '';
    return message;
  },
};

function bytesFromBase64(b64: string): Uint8Array {
  if ((globalThis as any).Buffer) {
    return Uint8Array.from(globalThis.Buffer.from(b64, 'base64'));
  } else {
    const bin = globalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends globalThis.Array<infer U>
    ? globalThis.Array<DeepPartial<U>>
    : T extends ReadonlyArray<infer U>
      ? ReadonlyArray<DeepPartial<U>>
      : T extends {}
        ? { [K in keyof T]?: DeepPartial<T[K]> }
        : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & {
      [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
    };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
