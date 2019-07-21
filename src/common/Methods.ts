export enum EncyclopediaMethods {
  ENCYCLO_INFO = "Encyclopedia information",
  ENCYCLO_WARSHIPS = "Warship",
  ENCYCLO_ACHIEVEMENT = "Achievements",
  ENCYCLO_SHIP_PARAMETERS = "Ship parameters",
  ENCYCLO_MODULES = "Modules",
  ENCYCLO_SERVICE_RECORD = "Service record",
  ENCYCLO_COMMANDERS = "Commanders",
  ENCYCLO_COMMANDER_SKILLS = "Commander skills",
  ENCYCLO_COMMANDER_RANKS = "Commander ranks",
  ENCYCLO_BATTLE_TYPES = "Battle types",
  ENCYCLO_CONSUMABLES = "Consumables",
  ENCYCLO_COLLECTIONS = "Collections",
  ENCYCLO_COLLECTION_ITEMS = "Collection items",
  ENCYCLO_MAPS = "Maps"
}

export enum PlayerMethods {
  PLAYER_SEARCH = "Players",
  PLAYER_PERSONAL_DATA = "Personal Data",
  PLAYER_ACHIEVEMENTS = "Player achievements",
  PLAYER_STATISTICS = "Player statistics"
}

export enum WarshipsMethods {
  SHIP_PLAYER_STATS = "Ship's player statistics"
}

export enum SeasonsMethods {
  SEASONS_INFOS = "Ranked seasons infos",
  SEASONS_SHIP_PLAYER_STATS = "Ranked ship player's stats",
  SEASONS_PLAYER_STATS = "Ranked player stats"
}

export enum ClansMethods {
  CLANS_SEARCH = "Clans",
  CLANS_DETAILS = "Clan details",
  CLANS_PLAYER_DATA = "Player's clan data",
  CLANS_GLOSSARY = "Clan glossary",
  CLANS_SEASONS = "Clan battle seasons"
}

export type Methods =
  | PlayerMethods
  | EncyclopediaMethods
  | WarshipsMethods
  | SeasonsMethods
  | ClansMethods;
