export interface AircraftStatistics {
  /**
   * Warships destroyed
   */
  frags: number;

  /**
   * Maximum number of enemy warships destroyed per battle
   */
  max_frags_battle: number;

  /**
   * ID of a ship with maximum number of enemy warships destroyed per battle
   */
  max_frags_ship_id: number;
}

export interface MainBatteryStatistics {
  /**
   * Warships destroyed
   */
  frags: number;

  /**
   * Hits
   */
  hits: number;

  /**
   * Maximum number of enemy warships destroyed per battle
   */
  max_frags_battle: number;

  /**
   * ID of a ship with maximum number of enemy warships destroyed per battle
   */
  max_frags_ship_id: number;

  /**
   * Shots fired
   */
  shots: number;
}

export interface RammingStatistics {
  /**
   * Warships destroyed
   */
  frags: number;

  /**
   * Maximum number of enemy warships destroyed per battle
   */
  max_frags_battle: number;

  /**
   * ID of a ship with maximum number of enemy warships destroyed per battle
   */
  max_frags_ship_id: number;
}

export interface SecondBatteryStatistics {
  /**
   * Warships destroyed
   */
  frags: number;

  /**
   * Hits
   */
  hits: number;

  /**
   * Maximum number of enemy warships destroyed per battle
   */
  max_frags_battle: number;

  /**
   * ID of a ship with maximum number of enemy warships destroyed per battle
   */
  max_frags_ship_id: number;

  /**
   * Shots fired
   */
  shots: number;
}

export interface TorpedoesStatistics {
  /**
   * Warships destroyed
   */
  frags: number;

  /**
   * Hits
   */
  hits: number;

  /**
   * Maximum number of enemy warships destroyed per battle
   */
  max_frags_battle: number;

  /**
   * ID of a ship with maximum number of enemy warships destroyed per battle
   */
  max_frags_ship_id: number;

  /**
   * Shots fired
   */
  shots: number;
}

export interface Statistics {
  /**
   * Potential damage caused by shells
   */
  art_agro: number;

  /**
   * Battles fought
   */
  battles: number;

  /**
   * Total number of capture points
   */
  capture_points: number;

  /**
   * Base capture points
   */
  control_captured_points: number;

  /**
   * Base defense points
   */
  control_dropped_points: number;

  /**
   * Damage caused
   */
  damage_dealt: number;

  /**
   * Damage caused by allies
   */
  damage_scouting: number;

  /**
   * Draws
   */
  draws: number;

  /**
   * Total number of defense points
   */
  dropped_capture_points: number;

  /**
   * Warships destroyed
   */
  frags: number;

  /**
   * Defeats
   */
  losses: number;

  /**
   * Maximum Damage caused per battle
   */
  max_damage_dealt: number;

  /**
   * Warship used to cause maximum damage
   */
  max_damage_dealt_ship_id: number;

  /**
   * Most damage caused by allies to enemy ships spotted by the player
   */
  max_damage_scouting: number;

  /**
   * Maximum number of enemy warships destroyed per battle
   */
  max_frags_battle: number;

  /**
   * ID of a ship with maximum number of enemy warships destroyed per battle
   */
  max_frags_ship_id: number;

  /**
   * Maximum number of aircraft destroyed per battle
   */
  max_planes_killed: number;

  /**
   * Warship with maximum number of enemy aircraft destroyed
   */
  max_planes_killed_ship_id: number;

  /**
   * Ship that caused the most damage to enemy ships spotted by the player
   */
  max_scouting_damage_ship_id: number;

  /**
   * Most ships detected
   */
  max_ships_spotted: number;

  /**
   * Ship that detected the most enemy ships
   */
  max_ships_spotted_ship_id: number;

  /**
   * Most potential damage caused by ammunition that hit or fell near the ship
   */
  max_total_agro: number;

  /**
   * Ship that caused the most potential damage
   */
  max_total_agro_ship_id: number;

  /**
   * Maximum Experience Points per battle, including XP earned with Premium Account
   */
  max_xp: number;

  /**
   * Warship used to gain maximum Experience Points per battle, including XP earned with Premium Account
   */
  max_xp_ship_id: number;

  /**
   * Enemy aircraft destroyed
   */
  planes_killed: number;

  /**
   * Ships spotted by the player first
   */
  ships_spotted: number;

  /**
   * Battles survived
   */
  survived_battles: number;

  /**
   * Victories in battles survived
   */
  survived_wins: number;

  /**
   * Total number of base capture points earned by the player's team
   */
  team_capture_points: number;

  /**
   * Total number of base defense points earned by the player's team
   */
  team_dropped_capture_points: number;

  /**
   * Potential damage caused by torpedoes
   */
  torpedo_agro: number;

  /**
   * Victories
   */
  wins: number;

  /**
   * Total Experience Points , including XP earned with Premium Account
   */
  xp: number;

  aircraft: AircraftStatistics;
  main_battery: MainBatteryStatistics;
  ramming: RammingStatistics;
  second_battery: SecondBatteryStatistics;
  torpedoes: TorpedoesStatistics;
}
