import { matchPath } from 'react-router-dom'

import { IRouteParams } from 'utils/types'

export const matchPortalPath = (pathname: string, exact: boolean = false) => {
  const result = matchPath<IRouteParams>(pathname, {
    path: '/project/:projectId/portal/:portalId',
    exact,
    strict: false
  })
  return result
}

export const matchDisplayPath = (pathname: string, exact: boolean = false) => {
  const result = matchPath<IRouteParams>(pathname, {
    path: '/project/:projectId/display/:displayId/(preview)?',
    exact,
    strict: false
  })
  return result
}

export const matchDisplaySlidePath = (pathname: string, exact: boolean = true) => {
  const result = matchPath<IRouteParams>(pathname, {
    path: '/project/:projectId/display/:displayId/(preview)?/slide/:slideId',
    exact,
    strict: false
  })
  return result
}
