import { Roles } from "./user.model";

export class RoleRoute {
  public routes = [
    {
      name: Roles.SUPER_ADMIN,
      path: "/dashboard/r/super-admin",
    },
    {
      name: Roles.TEAM_ADMIN,
      path: "/dashboard/r/team-admin",
    },
    {
      name: Roles.TEAM_MANAGER,
      path: "/dashboard/r/team-manager",
    },
    {
      name: Roles.DATA_MANAGER,
      path: "/dashboard/r/data-manager",
    },
    {
      name: Roles.LEAGUE_DIRECTOR,
      path: "/dashboard/r/league-director",
    },
    {
      name: Roles.GENERAL_COORDINATOR,
      path: "/dashboard/r/general-coordinator",
    },
    {
      name: Roles.REFEREE,
      path: "/dashboard/r/referee",
    },
    {
      name: Roles.MATCH_COMMISSIONER,
      path: "/dashboard/r/match-commissioner",
    },
    {
      name: Roles.REFEREE_ASSESSOR,
      path: "/dashboard/r/referee-assessor",
    },
  ];

  public getRoute(role: Roles) {
    return this.routes.find((route) => route.name === role);
  }

  public getRole(path: string) {
    return this.routes.find((route) => route.path === path);
  }
}
