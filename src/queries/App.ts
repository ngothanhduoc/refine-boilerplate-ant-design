import { gql } from "urql";

export const APP_FRAGMENT = gql`
  fragment App on App {
    id
    name
    status
    store_url
    platform
    bundle_id
    adam_id
    register_at
    disable_at
    icon
    channels {
      ...Channel
    }
  }
`;

export const NODE_STAT_FRAGMENT = gql`
  fragment NodeStat on NodeStat {
    name
    value
  }
`;

export const APP_STATS_FRAGMENT = gql`
  fragment AppStats on AppStats {
    id
    name
    status
    store_url
    platform
    bundle_id
    adam_id
    register_at
    disable_at
    icon
    isPinned
    stats {
      campaigns {
        ...NodeStat
      }
      creatives {
        ...NodeStat
      }
    }
  }
`;

export const GET_APP = gql`
  query app($id: ID!) {
    app(id: $id) {
      ...App
    }
  }
`;

export const GET_APPS = gql`
  query apps($filter: AppFilter, $paging: OffsetPaging, $sorting: [AppSort!]) {
    apps(filter: $filter, paging: $paging, sorting: $sorting) {
      nodes {
        ...App
      }
      pageInfo {
        ...OffsetPageInfo
      }
      totalCount
    }
  }
`;

export const GET_APP_STATS = gql`
  query appStats($filter: CustomAppFilter, $paging: OffsetPaging, $sorting: [AppSort!]) {
    appStats(filter: $filter, paging: $paging, sorting: $sorting) {
      nodes {
        ...AppStats
      }
      totalCount
    }
  }
`;

export const APP_OPTION_FRAGMENT = gql`
  fragment AppOption on App {
    id
    name
    bundle_id
    platform
    product_code
  }
`;
export const GET_APP_OPTIONS = gql`
  query appOptions($filter: AppFilter, $paging: OffsetPaging, $sorting: [AppSort!]) {
    apps(filter: $filter, paging: $paging, sorting: $sorting) {
      nodes {
        ...AppOption
      }
      pageInfo {
        ...OffsetPageInfo
      }
      totalCount
    }
  }
`;

export const TOGGLE_PIN_APP = gql`
  mutation togglePinApp($input: TogglePinAppInput!) {
    togglePinApp(input: $input)
  }
`;
