/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreatePathwayInput = {
  id?: string | null,
  title: string,
  description?: string | null,
  thumbnail?: string | null,
  _version?: number | null,
};

export type ModelPathwayConditionInput = {
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  thumbnail?: ModelStringInput | null,
  and?: Array< ModelPathwayConditionInput | null > | null,
  or?: Array< ModelPathwayConditionInput | null > | null,
  not?: ModelPathwayConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Pathway = {
  __typename: "Pathway",
  id: string,
  title: string,
  description?: string | null,
  thumbnail?: string | null,
  pathwayPitstops?: ModelPathwayPitstopConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelPathwayPitstopConnection = {
  __typename: "ModelPathwayPitstopConnection",
  items:  Array<PathwayPitstop | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type PathwayPitstop = {
  __typename: "PathwayPitstop",
  id: string,
  pathwayID: string,
  pathway?: Pathway | null,
  positionX: number,
  positionY: number,
  pathwayPitstopParentID?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdatePathwayInput = {
  id: string,
  title?: string | null,
  description?: string | null,
  thumbnail?: string | null,
  _version?: number | null,
};

export type DeletePathwayInput = {
  id: string,
  _version?: number | null,
};

export type CreatePathwayPitstopInput = {
  id?: string | null,
  pathwayID: string,
  positionX: number,
  positionY: number,
  pathwayPitstopParentID?: string | null,
  _version?: number | null,
};

export type ModelPathwayPitstopConditionInput = {
  pathwayID?: ModelIDInput | null,
  positionX?: ModelIntInput | null,
  positionY?: ModelIntInput | null,
  pathwayPitstopParentID?: ModelIDInput | null,
  and?: Array< ModelPathwayPitstopConditionInput | null > | null,
  or?: Array< ModelPathwayPitstopConditionInput | null > | null,
  not?: ModelPathwayPitstopConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdatePathwayPitstopInput = {
  id: string,
  pathwayID?: string | null,
  positionX?: number | null,
  positionY?: number | null,
  pathwayPitstopParentID?: string | null,
  _version?: number | null,
};

export type DeletePathwayPitstopInput = {
  id: string,
  _version?: number | null,
};

export type ModelPathwayFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  thumbnail?: ModelStringInput | null,
  and?: Array< ModelPathwayFilterInput | null > | null,
  or?: Array< ModelPathwayFilterInput | null > | null,
  not?: ModelPathwayFilterInput | null,
};

export type ModelPathwayConnection = {
  __typename: "ModelPathwayConnection",
  items:  Array<Pathway | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelPathwayPitstopFilterInput = {
  id?: ModelIDInput | null,
  pathwayID?: ModelIDInput | null,
  positionX?: ModelIntInput | null,
  positionY?: ModelIntInput | null,
  pathwayPitstopParentID?: ModelIDInput | null,
  and?: Array< ModelPathwayPitstopFilterInput | null > | null,
  or?: Array< ModelPathwayPitstopFilterInput | null > | null,
  not?: ModelPathwayPitstopFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelSubscriptionPathwayFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  thumbnail?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionPathwayFilterInput | null > | null,
  or?: Array< ModelSubscriptionPathwayFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionPathwayPitstopFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  pathwayID?: ModelSubscriptionIDInput | null,
  positionX?: ModelSubscriptionIntInput | null,
  positionY?: ModelSubscriptionIntInput | null,
  pathwayPitstopParentID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionPathwayPitstopFilterInput | null > | null,
  or?: Array< ModelSubscriptionPathwayPitstopFilterInput | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type CreatePathwayMutationVariables = {
  input: CreatePathwayInput,
  condition?: ModelPathwayConditionInput | null,
};

export type CreatePathwayMutation = {
  createPathway?:  {
    __typename: "Pathway",
    id: string,
    title: string,
    description?: string | null,
    thumbnail?: string | null,
    pathwayPitstops?:  {
      __typename: "ModelPathwayPitstopConnection",
      items:  Array< {
        __typename: "PathwayPitstop",
        id: string,
        pathwayID: string,
        positionX: number,
        positionY: number,
        pathwayPitstopParentID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdatePathwayMutationVariables = {
  input: UpdatePathwayInput,
  condition?: ModelPathwayConditionInput | null,
};

export type UpdatePathwayMutation = {
  updatePathway?:  {
    __typename: "Pathway",
    id: string,
    title: string,
    description?: string | null,
    thumbnail?: string | null,
    pathwayPitstops?:  {
      __typename: "ModelPathwayPitstopConnection",
      items:  Array< {
        __typename: "PathwayPitstop",
        id: string,
        pathwayID: string,
        positionX: number,
        positionY: number,
        pathwayPitstopParentID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeletePathwayMutationVariables = {
  input: DeletePathwayInput,
  condition?: ModelPathwayConditionInput | null,
};

export type DeletePathwayMutation = {
  deletePathway?:  {
    __typename: "Pathway",
    id: string,
    title: string,
    description?: string | null,
    thumbnail?: string | null,
    pathwayPitstops?:  {
      __typename: "ModelPathwayPitstopConnection",
      items:  Array< {
        __typename: "PathwayPitstop",
        id: string,
        pathwayID: string,
        positionX: number,
        positionY: number,
        pathwayPitstopParentID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreatePathwayPitstopMutationVariables = {
  input: CreatePathwayPitstopInput,
  condition?: ModelPathwayPitstopConditionInput | null,
};

export type CreatePathwayPitstopMutation = {
  createPathwayPitstop?:  {
    __typename: "PathwayPitstop",
    id: string,
    pathwayID: string,
    pathway?:  {
      __typename: "Pathway",
      id: string,
      title: string,
      description?: string | null,
      thumbnail?: string | null,
      pathwayPitstops?:  {
        __typename: "ModelPathwayPitstopConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    positionX: number,
    positionY: number,
    pathwayPitstopParentID?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdatePathwayPitstopMutationVariables = {
  input: UpdatePathwayPitstopInput,
  condition?: ModelPathwayPitstopConditionInput | null,
};

export type UpdatePathwayPitstopMutation = {
  updatePathwayPitstop?:  {
    __typename: "PathwayPitstop",
    id: string,
    pathwayID: string,
    pathway?:  {
      __typename: "Pathway",
      id: string,
      title: string,
      description?: string | null,
      thumbnail?: string | null,
      pathwayPitstops?:  {
        __typename: "ModelPathwayPitstopConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    positionX: number,
    positionY: number,
    pathwayPitstopParentID?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeletePathwayPitstopMutationVariables = {
  input: DeletePathwayPitstopInput,
  condition?: ModelPathwayPitstopConditionInput | null,
};

export type DeletePathwayPitstopMutation = {
  deletePathwayPitstop?:  {
    __typename: "PathwayPitstop",
    id: string,
    pathwayID: string,
    pathway?:  {
      __typename: "Pathway",
      id: string,
      title: string,
      description?: string | null,
      thumbnail?: string | null,
      pathwayPitstops?:  {
        __typename: "ModelPathwayPitstopConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    positionX: number,
    positionY: number,
    pathwayPitstopParentID?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type GetPathwayQueryVariables = {
  id: string,
};

export type GetPathwayQuery = {
  getPathway?:  {
    __typename: "Pathway",
    id: string,
    title: string,
    description?: string | null,
    thumbnail?: string | null,
    pathwayPitstops?:  {
      __typename: "ModelPathwayPitstopConnection",
      items:  Array< {
        __typename: "PathwayPitstop",
        id: string,
        pathwayID: string,
        positionX: number,
        positionY: number,
        pathwayPitstopParentID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListPathwaysQueryVariables = {
  filter?: ModelPathwayFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPathwaysQuery = {
  listPathways?:  {
    __typename: "ModelPathwayConnection",
    items:  Array< {
      __typename: "Pathway",
      id: string,
      title: string,
      description?: string | null,
      thumbnail?: string | null,
      pathwayPitstops?:  {
        __typename: "ModelPathwayPitstopConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncPathwaysQueryVariables = {
  filter?: ModelPathwayFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncPathwaysQuery = {
  syncPathways?:  {
    __typename: "ModelPathwayConnection",
    items:  Array< {
      __typename: "Pathway",
      id: string,
      title: string,
      description?: string | null,
      thumbnail?: string | null,
      pathwayPitstops?:  {
        __typename: "ModelPathwayPitstopConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetPathwayPitstopQueryVariables = {
  id: string,
};

export type GetPathwayPitstopQuery = {
  getPathwayPitstop?:  {
    __typename: "PathwayPitstop",
    id: string,
    pathwayID: string,
    pathway?:  {
      __typename: "Pathway",
      id: string,
      title: string,
      description?: string | null,
      thumbnail?: string | null,
      pathwayPitstops?:  {
        __typename: "ModelPathwayPitstopConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    positionX: number,
    positionY: number,
    pathwayPitstopParentID?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListPathwayPitstopsQueryVariables = {
  filter?: ModelPathwayPitstopFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPathwayPitstopsQuery = {
  listPathwayPitstops?:  {
    __typename: "ModelPathwayPitstopConnection",
    items:  Array< {
      __typename: "PathwayPitstop",
      id: string,
      pathwayID: string,
      pathway?:  {
        __typename: "Pathway",
        id: string,
        title: string,
        description?: string | null,
        thumbnail?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      positionX: number,
      positionY: number,
      pathwayPitstopParentID?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncPathwayPitstopsQueryVariables = {
  filter?: ModelPathwayPitstopFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncPathwayPitstopsQuery = {
  syncPathwayPitstops?:  {
    __typename: "ModelPathwayPitstopConnection",
    items:  Array< {
      __typename: "PathwayPitstop",
      id: string,
      pathwayID: string,
      pathway?:  {
        __typename: "Pathway",
        id: string,
        title: string,
        description?: string | null,
        thumbnail?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      positionX: number,
      positionY: number,
      pathwayPitstopParentID?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type PathwayPitstopsByPathwayIDQueryVariables = {
  pathwayID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPathwayPitstopFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PathwayPitstopsByPathwayIDQuery = {
  pathwayPitstopsByPathwayID?:  {
    __typename: "ModelPathwayPitstopConnection",
    items:  Array< {
      __typename: "PathwayPitstop",
      id: string,
      pathwayID: string,
      pathway?:  {
        __typename: "Pathway",
        id: string,
        title: string,
        description?: string | null,
        thumbnail?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      positionX: number,
      positionY: number,
      pathwayPitstopParentID?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreatePathwaySubscriptionVariables = {
  filter?: ModelSubscriptionPathwayFilterInput | null,
};

export type OnCreatePathwaySubscription = {
  onCreatePathway?:  {
    __typename: "Pathway",
    id: string,
    title: string,
    description?: string | null,
    thumbnail?: string | null,
    pathwayPitstops?:  {
      __typename: "ModelPathwayPitstopConnection",
      items:  Array< {
        __typename: "PathwayPitstop",
        id: string,
        pathwayID: string,
        positionX: number,
        positionY: number,
        pathwayPitstopParentID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdatePathwaySubscriptionVariables = {
  filter?: ModelSubscriptionPathwayFilterInput | null,
};

export type OnUpdatePathwaySubscription = {
  onUpdatePathway?:  {
    __typename: "Pathway",
    id: string,
    title: string,
    description?: string | null,
    thumbnail?: string | null,
    pathwayPitstops?:  {
      __typename: "ModelPathwayPitstopConnection",
      items:  Array< {
        __typename: "PathwayPitstop",
        id: string,
        pathwayID: string,
        positionX: number,
        positionY: number,
        pathwayPitstopParentID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeletePathwaySubscriptionVariables = {
  filter?: ModelSubscriptionPathwayFilterInput | null,
};

export type OnDeletePathwaySubscription = {
  onDeletePathway?:  {
    __typename: "Pathway",
    id: string,
    title: string,
    description?: string | null,
    thumbnail?: string | null,
    pathwayPitstops?:  {
      __typename: "ModelPathwayPitstopConnection",
      items:  Array< {
        __typename: "PathwayPitstop",
        id: string,
        pathwayID: string,
        positionX: number,
        positionY: number,
        pathwayPitstopParentID?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreatePathwayPitstopSubscriptionVariables = {
  filter?: ModelSubscriptionPathwayPitstopFilterInput | null,
};

export type OnCreatePathwayPitstopSubscription = {
  onCreatePathwayPitstop?:  {
    __typename: "PathwayPitstop",
    id: string,
    pathwayID: string,
    pathway?:  {
      __typename: "Pathway",
      id: string,
      title: string,
      description?: string | null,
      thumbnail?: string | null,
      pathwayPitstops?:  {
        __typename: "ModelPathwayPitstopConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    positionX: number,
    positionY: number,
    pathwayPitstopParentID?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdatePathwayPitstopSubscriptionVariables = {
  filter?: ModelSubscriptionPathwayPitstopFilterInput | null,
};

export type OnUpdatePathwayPitstopSubscription = {
  onUpdatePathwayPitstop?:  {
    __typename: "PathwayPitstop",
    id: string,
    pathwayID: string,
    pathway?:  {
      __typename: "Pathway",
      id: string,
      title: string,
      description?: string | null,
      thumbnail?: string | null,
      pathwayPitstops?:  {
        __typename: "ModelPathwayPitstopConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    positionX: number,
    positionY: number,
    pathwayPitstopParentID?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeletePathwayPitstopSubscriptionVariables = {
  filter?: ModelSubscriptionPathwayPitstopFilterInput | null,
};

export type OnDeletePathwayPitstopSubscription = {
  onDeletePathwayPitstop?:  {
    __typename: "PathwayPitstop",
    id: string,
    pathwayID: string,
    pathway?:  {
      __typename: "Pathway",
      id: string,
      title: string,
      description?: string | null,
      thumbnail?: string | null,
      pathwayPitstops?:  {
        __typename: "ModelPathwayPitstopConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    positionX: number,
    positionY: number,
    pathwayPitstopParentID?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};
