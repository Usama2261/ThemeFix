export enum Roles {
  SUPER_ADMIN = 'super-admin',
  TEAM_ADMIN = 'team-admin',
  TEAM_MANAGER = 'team-manager',
  DATA_MANAGER = 'data-manager',
  LEAGUE_DIRECTOR = 'league-director',
  GENERAL_COORDINATOR = 'general-coordinator',
  REFEREE = 'referee',
  MATCH_COMMISSIONER = 'match-commissioner',
  REFEREE_ASSESSOR = 'referee-assessor'
}
export class User {
  name: string = ""
  email: string = ""
  password: string = ""
  role: Roles = Roles.SUPER_ADMIN
}
