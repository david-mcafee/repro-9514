import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";





type EagerPathway = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Pathway, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly description?: string | null;
  readonly thumbnail?: string | null;
  readonly pathwayPitstops?: (PathwayPitstop | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPathway = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Pathway, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly description?: string | null;
  readonly thumbnail?: string | null;
  readonly pathwayPitstops: AsyncCollection<PathwayPitstop>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Pathway = LazyLoading extends LazyLoadingDisabled ? EagerPathway : LazyPathway

export declare const Pathway: (new (init: ModelInit<Pathway>) => Pathway) & {
  copyOf(source: Pathway, mutator: (draft: MutableModel<Pathway>) => MutableModel<Pathway> | void): Pathway;
}

type EagerPathwayPitstop = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PathwayPitstop, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly pathwayID: string;
  readonly pathway?: Pathway | null;
  readonly positionX: number;
  readonly positionY: number;
  readonly pathwayPitstopParentID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPathwayPitstop = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PathwayPitstop, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly pathwayID: string;
  readonly pathway: AsyncItem<Pathway | undefined>;
  readonly positionX: number;
  readonly positionY: number;
  readonly pathwayPitstopParentID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type PathwayPitstop = LazyLoading extends LazyLoadingDisabled ? EagerPathwayPitstop : LazyPathwayPitstop

export declare const PathwayPitstop: (new (init: ModelInit<PathwayPitstop>) => PathwayPitstop) & {
  copyOf(source: PathwayPitstop, mutator: (draft: MutableModel<PathwayPitstop>) => MutableModel<PathwayPitstop> | void): PathwayPitstop;
}