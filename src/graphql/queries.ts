/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPathway = /* GraphQL */ `
  query GetPathway($id: ID!) {
    getPathway(id: $id) {
      id
      title
      description
      thumbnail
      pathwayPitstops {
        items {
          id
          pathwayID
          positionX
          positionY
          pathwayPitstopParentID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listPathways = /* GraphQL */ `
  query ListPathways(
    $filter: ModelPathwayFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPathways(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        thumbnail
        pathwayPitstops {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPathways = /* GraphQL */ `
  query SyncPathways(
    $filter: ModelPathwayFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPathways(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        title
        description
        thumbnail
        pathwayPitstops {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getPathwayPitstop = /* GraphQL */ `
  query GetPathwayPitstop($id: ID!) {
    getPathwayPitstop(id: $id) {
      id
      pathwayID
      pathway {
        id
        title
        description
        thumbnail
        pathwayPitstops {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      positionX
      positionY
      pathwayPitstopParentID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listPathwayPitstops = /* GraphQL */ `
  query ListPathwayPitstops(
    $filter: ModelPathwayPitstopFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPathwayPitstops(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        pathwayID
        pathway {
          id
          title
          description
          thumbnail
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        positionX
        positionY
        pathwayPitstopParentID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPathwayPitstops = /* GraphQL */ `
  query SyncPathwayPitstops(
    $filter: ModelPathwayPitstopFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPathwayPitstops(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        pathwayID
        pathway {
          id
          title
          description
          thumbnail
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        positionX
        positionY
        pathwayPitstopParentID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const pathwayPitstopsByPathwayID = /* GraphQL */ `
  query PathwayPitstopsByPathwayID(
    $pathwayID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPathwayPitstopFilterInput
    $limit: Int
    $nextToken: String
  ) {
    pathwayPitstopsByPathwayID(
      pathwayID: $pathwayID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        pathwayID
        pathway {
          id
          title
          description
          thumbnail
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        positionX
        positionY
        pathwayPitstopParentID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
