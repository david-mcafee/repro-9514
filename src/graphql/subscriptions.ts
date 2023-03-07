/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePathway = /* GraphQL */ `
  subscription OnCreatePathway($filter: ModelSubscriptionPathwayFilterInput) {
    onCreatePathway(filter: $filter) {
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
export const onUpdatePathway = /* GraphQL */ `
  subscription OnUpdatePathway($filter: ModelSubscriptionPathwayFilterInput) {
    onUpdatePathway(filter: $filter) {
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
export const onDeletePathway = /* GraphQL */ `
  subscription OnDeletePathway($filter: ModelSubscriptionPathwayFilterInput) {
    onDeletePathway(filter: $filter) {
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
export const onCreatePathwayPitstop = /* GraphQL */ `
  subscription OnCreatePathwayPitstop(
    $filter: ModelSubscriptionPathwayPitstopFilterInput
  ) {
    onCreatePathwayPitstop(filter: $filter) {
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
export const onUpdatePathwayPitstop = /* GraphQL */ `
  subscription OnUpdatePathwayPitstop(
    $filter: ModelSubscriptionPathwayPitstopFilterInput
  ) {
    onUpdatePathwayPitstop(filter: $filter) {
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
export const onDeletePathwayPitstop = /* GraphQL */ `
  subscription OnDeletePathwayPitstop(
    $filter: ModelSubscriptionPathwayPitstopFilterInput
  ) {
    onDeletePathwayPitstop(filter: $filter) {
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
