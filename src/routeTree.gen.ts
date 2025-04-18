/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as DinosaurImport } from './routes/$dinosaur'
import { Route as IndexImport } from './routes/index'

// Create/Update Routes

const DinosaurRoute = DinosaurImport.update({
  id: '/$dinosaur',
  path: '/$dinosaur',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/$dinosaur': {
      id: '/$dinosaur'
      path: '/$dinosaur'
      fullPath: '/$dinosaur'
      preLoaderRoute: typeof DinosaurImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/$dinosaur': typeof DinosaurRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/$dinosaur': typeof DinosaurRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/$dinosaur': typeof DinosaurRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/$dinosaur'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/$dinosaur'
  id: '__root__' | '/' | '/$dinosaur'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  DinosaurRoute: typeof DinosaurRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  DinosaurRoute: DinosaurRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/$dinosaur"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/$dinosaur": {
      "filePath": "$dinosaur.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
