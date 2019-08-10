import { Categories } from "./Categories";
import {
  ClansMethods,
  EncyclopediaMethods,
  PlayerMethods,
  SeasonsMethods,
  WarshipsMethods
} from "./Methods";
import { ApiMetadata, CategoryMetadata, QueryMetadata } from "./ApiMetadata";
import {
  AccountSearch,
  PlayerAchievementsSearch,
  PlayerSearch,
  PlayerStatisticsSearch
} from "../search/account";
import {
  BaseParameters,
  PAchievements,
  PBattleType,
  PCollectionItems,
  PCollections,
  PCommander,
  PCommanderRank,
  PCommanderSkill,
  PMaps,
  PModule,
  PRankedPlayerStatistics,
  PRankedShipStatistics,
  PSeasons,
  PServicerecord,
  PShipParameters,
  PWarships
} from "../search";
import { PConsumables } from "../search/encychlopedia/PConsumables";
import {
  PClanDetails,
  PClanGlossary,
  PClanPlayerData,
  PClans
} from "../search/clans";
import { PClanBattleSeasons } from "../search/clans/PClanBattleSeasons";

export const accountsStructure: CategoryMetadata = {
  name: Categories.ACCOUNT,
  path: "account",
  methods: {
    list: {
      method: PlayerMethods.PLAYER_SEARCH,
      parameters: ["search", "type"],
      path: "list",
      paginated: true
    } as QueryMetadata<AccountSearch>,
    info: {
      method: PlayerMethods.PLAYER_PERSONAL_DATA,
      parameters: [],
      path: "info"
    } as QueryMetadata<PlayerSearch>,
    achievements: {
      method: PlayerMethods.PLAYER_ACHIEVEMENTS,
      parameters: ["account_id", "access_token", "extra"],
      path: "achievements"
    } as QueryMetadata<PlayerAchievementsSearch>,
    statsbydate: {
      method: PlayerMethods.PLAYER_STATISTICS,
      parameters: [
        "access_token",
        "account_id",
        "application_id",
        "extra",
        "dates",
        "fields",
        "language"
      ],
      path: "statsbydate"
    } as QueryMetadata<PlayerStatisticsSearch>
  }
};

export const encyclopediaStructure: CategoryMetadata = {
  name: Categories.ENCYCLOPEDIA,
  path: "encyclopedia",
  commonParameters: ["language", "fields"],
  methods: {
    info: {
      method: EncyclopediaMethods.ENCYCLO_INFO,
      parameters: [],
      path: "info"
    } as QueryMetadata<BaseParameters>,
    warships: {
      method: EncyclopediaMethods.ENCYCLO_WARSHIPS,
      parameters: ["nation", "type"],
      path: "warships",
      paginated: true
    } as QueryMetadata<PWarships>,
    achievements: {
      method: EncyclopediaMethods.ENCYCLO_ACHIEVEMENT,
      parameters: [],
      path: "achievements"
    } as QueryMetadata<PAchievements>,
    shipprofile: {
      method: EncyclopediaMethods.ENCYCLO_SHIP_PARAMETERS,
      parameters: [
        "artillery_id",
        "dive_bomber_id",
        "engine_id",
        "fighter_id",
        "fire_control_id",
        "flight_control_id",
        "hull_id",
        "ship_id",
        "torpedo_bomber_id",
        "torpedoes_id"
      ],
      path: "shipprofile"
    } as QueryMetadata<PShipParameters>,
    modules: {
      method: EncyclopediaMethods.ENCYCLO_MODULES,
      parameters: ["type", "module_id"],
      path: "modules",
      paginated: true
    } as QueryMetadata<PModule>,
    accountlevels: {
      method: EncyclopediaMethods.ENCYCLO_SERVICE_RECORD,
      parameters: [],
      path: "accountlevels"
    } as QueryMetadata<PServicerecord>,
    crews: {
      method: EncyclopediaMethods.ENCYCLO_COMMANDERS,
      parameters: ["commander_id"],
      path: "crews"
    } as QueryMetadata<PCommander>,
    crewskills: {
      method: EncyclopediaMethods.ENCYCLO_COMMANDER_SKILLS,
      parameters: ["skill_id"],
      path: "crewskills"
    } as QueryMetadata<PCommanderSkill>,
    crewranks: {
      method: EncyclopediaMethods.ENCYCLO_COMMANDER_RANKS,
      parameters: ["nation"],
      path: "crewranks"
    } as QueryMetadata<PCommanderRank>,
    battletypes: {
      method: EncyclopediaMethods.ENCYCLO_BATTLE_TYPES,
      parameters: [],
      path: "battletypes"
    } as QueryMetadata<PBattleType>,
    consumables: {
      method: EncyclopediaMethods.ENCYCLO_CONSUMABLES,
      parameters: ["type", "consumable_id"],
      path: "consumables",
      paginated: true
    } as QueryMetadata<PConsumables>,
    collections: {
      method: EncyclopediaMethods.ENCYCLO_COLLECTIONS,
      parameters: [],
      path: "collections"
    } as QueryMetadata<PCollections>,
    collectionscards: {
      method: EncyclopediaMethods.ENCYCLO_COLLECTION_ITEMS,
      parameters: [],
      path: "collectionscards"
    } as QueryMetadata<PCollectionItems>,
    battlearenas: {
      method: EncyclopediaMethods.ENCYCLO_MAPS,
      parameters: [],
      path: "battlearenas"
    } as QueryMetadata<PMaps>
  }
};

export const warshipsStructure: CategoryMetadata = {
  name: Categories.WARSHIPS,
  path: "ships",
  methods: {
    stats: {
      method: WarshipsMethods.SHIP_PLAYER_STATS,
      parameters: ["type", "nation", "fields", "language", "ship_id"],
      path: "stats",
      paginated: true
    } as QueryMetadata<PWarships>
  }
};

export const seasonsStructure: CategoryMetadata = {
  name: Categories.SEASON,
  path: "seasons",
  commonParameters: ["fields", "language"],
  methods: {
    info: {
      method: SeasonsMethods.SEASONS_INFOS,
      parameters: ["season_id"],
      path: "info"
    } as QueryMetadata<PSeasons>,
    shipstats: {
      method: SeasonsMethods.SEASONS_SHIP_PLAYER_STATS,
      parameters: ["season_id", "ship_id", "account_id"],
      path: "shipstats"
    } as QueryMetadata<PRankedShipStatistics>,
    accountinfo: {
      method: SeasonsMethods.SEASONS_PLAYER_STATS,
      parameters: ["account_id", "season_id", "access_token"],
      path: "accountinfo"
    } as QueryMetadata<PRankedPlayerStatistics>
  }
};

export const clansStructure: CategoryMetadata = {
  name: Categories.CLANS,
  path: "clans",
  commonParameters: ["language", "fields"],
  methods: {
    list: {
      method: ClansMethods.CLANS_SEARCH,
      parameters: ["search"],
      path: "list",
      paginated: true
    } as QueryMetadata<PClans>,
    info: {
      method: ClansMethods.CLANS_DETAILS,
      parameters: ["search"],
      path: "info",
      paginated: true
    } as QueryMetadata<PClanDetails>,
    accountinfo: {
      method: ClansMethods.CLANS_PLAYER_DATA,
      parameters: ["search", "extra"],
      path: "accountinfo",
      paginated: true
    } as QueryMetadata<PClanPlayerData>,
    glossary: {
      method: ClansMethods.CLANS_GLOSSARY,
      parameters: [],
      path: "glossary"
    } as QueryMetadata<PClanGlossary>,
    season: {
      method: ClansMethods.CLANS_SEASONS,
      parameters: [],
      path: "season"
    } as QueryMetadata<PClanBattleSeasons>
  }
};

export const apiStructure: ApiMetadata = {
  account: accountsStructure,
  encyclopedia: encyclopediaStructure,
  warships: warshipsStructure,
  seasons: seasonsStructure,
  clans: clansStructure
};
