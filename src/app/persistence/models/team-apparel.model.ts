export interface TeamApparel {
  id?: number;
  team_type?: string;
  home_team_id?: number;
  away_team_id?: number;
  match_id?: number;
  start_date?: string;
  end_date?: string;
  home_color?: string;
  away_color?: string;
  home_shirt_image?: string;
  home_full_kit_image?: string;
  home_short_image?: string;
  away_shirt_image?: string;
  away_full_kit_image?: string;
  away_short_image?: string;
  home_socks_image?: string;
  away_socks_image?: string;
}
