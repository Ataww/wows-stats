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
      parameters: [
        { name: "search", required: true },
        { name: "type", values: ["exact", "startswith"] }
      ],
      path: "list",
      paginated: true
    } as QueryMetadata<AccountSearch>,
    info: {
      method: PlayerMethods.PLAYER_PERSONAL_DATA,
      parameters: [
        { name: "account_id", required: true },
        "access_token",
        {
          name: "extra",
          values: [
            "private.grouped_contacts",
            "private.port",
            "statistics.club",
            "statistics.oper_div",
            "statistics.oper_div_hard",
            "statistics.oper_solo",
            "statistics.pve",
            "statistics.pve_div2",
            "statistics.pve_div3",
            "statistics.pve_solo",
            "statistics.pvp_div2",
            "statistics.pvp_div3",
            "statistics.pvp_solo",
            "statistics.rank_div2",
            "statistics.rank_div3",
            "statistics.rank_solo"
          ]
        },
        "fields",
        "language"
      ],
      path: "info"
    } as QueryMetadata<PlayerSearch>,
    achievements: {
      method: PlayerMethods.PLAYER_ACHIEVEMENTS,
      parameters: [
        { name: "account_id", required: true },
        "access_token",
        "fields",
        "language"
      ],
      path: "achievements"
    } as QueryMetadata<PlayerAchievementsSearch>,
    statsbydate: {
      method: PlayerMethods.PLAYER_STATISTICS,
      parameters: [
        "access_token",
        { name: "account_id", required: true },
        { name: "extra", values: ["pve"] },
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
      parameters: [
        "nation",
        "type",
        "page_no",
        "limit",
        "ship_id",
        {
          name: "ship_type",
          values: ["AirCarrier", "Battleship", "Destroyer", "Cruiser"]
        }
      ],
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
        { name: "ship_id", required: true },
        "torpedo_bomber_id",
        "torpedoes_id"
      ],
      path: "shipprofile"
    } as QueryMetadata<PShipParameters>,
    modules: {
      method: EncyclopediaMethods.ENCYCLO_MODULES,
      parameters: [
        {
          name: "type",
          values: [
            "Artillery",
            "Torpedoes",
            "Suo",
            "FlightControl",
            "Hull",
            "Engine",
            "Fighter",
            "TorpedoBomber",
            "DiveBomber"
          ]
        },
        "module_id",
        "page_no",
        "limit"
      ],
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
      parameters: [
        {
          name: "type",
          values: ["Camouflage", "Permoflage", "Flags", "Modernization", "Skin"]
        },
        "consumable_id",
        "page_no",
        "limit"
      ],
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
      parameters: [
        "type",
        "nation",
        "fields",
        "language",
        "ship_id",
        "access_token",
        "in_garage",
        { name: "account_id", required: true },
        {
          name: "extra",
          values: [
            "club",
            "oper_div",
            "oper_div_hard",
            "oper_solo",
            "pve",
            "pve_div2",
            "pve_div3",
            "pve_solo",
            "pvp_div2",
            "pvp_div3",
            "pvp_solo",
            "rank_div2",
            "rank_div3",
            "rank_solo"
          ]
        }
      ],
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
      parameters: [
        "season_id",
        "ship_id",
        { name: "account_id", required: true }
      ],
      path: "shipstats"
    } as QueryMetadata<PRankedShipStatistics>,
    accountinfo: {
      method: SeasonsMethods.SEASONS_PLAYER_STATS,
      parameters: [
        { name: "account_id", required: true },
        "season_id",
        "access_token"
      ],
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
      parameters: [
        {
          name: "clan_id",
          required: true
        },
        {
          name: "extra",
          values: ["members"]
        }
      ],
      path: "info",
      paginated: true
    } as QueryMetadata<PClanDetails>,
    accountinfo: {
      method: ClansMethods.CLANS_PLAYER_DATA,
      parameters: [
        {
          name: "account_id",
          required: true
        },
        "search",
        "extra"
      ],
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
