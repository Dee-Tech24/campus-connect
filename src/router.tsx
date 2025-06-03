import { Router, Route, RootRoute } from '@tanstack/react-router';
import Home from './pages/Home';
import Network from './pages/Network';
import Events from './pages/Events';
import StudyGroups from './pages/StudyGroups';
import SkillSharing from './pages/SkillSharing';
import Career from './pages/Career';
import Messages from './pages/Messages';

const rootRoute = new RootRoute();

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home,
});

const networkRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/network',
  component: Network,
});

const eventsRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/events',
  component: Events,
});

const studyGroupsRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/study-groups',
  component: StudyGroups,
});

const skillSharingRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/skills',
  component: SkillSharing,
});

const careerRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/career',
  component: Career,
});

const messagesRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/messages',
  component: Messages,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  networkRoute,
  eventsRoute,
  studyGroupsRoute,
  skillSharingRoute,
  careerRoute,
  messagesRoute,
]);

export const router = new Router({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}