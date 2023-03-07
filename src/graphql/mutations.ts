/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPathway = /* GraphQL */ `
  mutation CreatePathway(
    $input: CreatePathwayInput!
    $condition: ModelPathwayConditionInput
  ) {
    createPathway(input: $input, condition: $condition) {
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
export const updatePathway = /* GraphQL */ `
  mutation UpdatePathway(
    $input: UpdatePathwayInput!
    $condition: ModelPathwayConditionInput
  ) {
    updatePathway(input: $input, condition: $condition) {
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
export const deletePathway = /* GraphQL */ `
  mutation DeletePathway(
    $input: DeletePathwayInput!
    $condition: ModelPathwayConditionInput
  ) {
    deletePathway(input: $input, condition: $condition) {
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
export const createPathwayPitstop = /* GraphQL */ `
  mutation CreatePathwayPitstop(
    $input: CreatePathwayPitstopInput!
    $condition: ModelPathwayPitstopConditionInput
  ) {
    createPathwayPitstop(input: $input, condition: $condition) {
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
export const updatePathwayPitstop = /* GraphQL */ `
  mutation UpdatePathwayPitstop(
    $input: UpdatePathwayPitstopInput!
    $condition: ModelPathwayPitstopConditionInput
  ) {
    updatePathwayPitstop(input: $input, condition: $condition) {
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
export const deletePathwayPitstop = /* GraphQL */ `
  mutation DeletePathwayPitstop(
    $input: DeletePathwayPitstopInput!
    $condition: ModelPathwayPitstopConditionInput
  ) {
    deletePathwayPitstop(input: $input, condition: $condition) {
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
