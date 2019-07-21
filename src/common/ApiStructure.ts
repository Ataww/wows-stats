import { Categories } from "./Categories";
import {
  ClansMethods,
  EncyclopediaMethods,
  PlayerMethods,
  SeasonsMethods,
  WarshipsMethods
} from "./Methods";
import { ApiMetadata, CategoryMetadata } from "./ApiMetadata";

export const accountsStructure: CategoryMetadata = {
  name: Categories.ACCOUNT,
  path: "account",
  methods: {
    list: {
      method: PlayerMethods.PLAYER_SEARCH,
      path: "list"
    },
    info: {
      method: PlayerMethods.PLAYER_PERSONAL_DATA,
      path: "info"
    },
    achievements: {
      method: PlayerMethods.PLAYER_ACHIEVEMENTS,
      path: "achievements"
    },
    statsbydate: {
      method: PlayerMethods.PLAYER_STATISTICS,
      path: "statsbydate"
    }
  }
};

export const encyclopediaStructure: CategoryMetadata = {
  name: Categories.ENCYCLOPEDIA,
  path: "encyclopedia",
  methods: {
    info: {
      method: EncyclopediaMethods.ENCYCLO_INFO,
      path: "info"
    },
    warships: {
      method: EncyclopediaMethods.ENCYCLO_WARSHIPS,
      path: "warships"
    },
    achievements: {
      method: EncyclopediaMethods.ENCYCLO_ACHIEVEMENT,
      path: "achievements"
    },
    shipprofile: {
      method: EncyclopediaMethods.ENCYCLO_SHIP_PARAMETERS,
      path: "shipprofile"
    },
    modules: {
      method: EncyclopediaMethods.ENCYCLO_MODULES,
      path: "modules"
    },
    accountlevels: {
      method: EncyclopediaMethods.ENCYCLO_SERVICE_RECORD,
      path: "accountlevels"
    },
    crews: {
      method: EncyclopediaMethods.ENCYCLO_COMMANDERS,
      path: "crews"
    },
    crewskills: {
      method: EncyclopediaMethods.ENCYCLO_COMMANDER_SKILLS,
      path: "crewskills"
    },
    crewranks: {
      method: EncyclopediaMethods.ENCYCLO_COMMANDER_RANKS,
      path: "crewranks"
    },
    battletypes: {
      method: EncyclopediaMethods.ENCYCLO_BATTLE_TYPES,
      path: "battletypes"
    },
    consumables: {
      method: EncyclopediaMethods.ENCYCLO_CONSUMABLES,
      path: "consumables"
    },
    collections: {
      method: EncyclopediaMethods.ENCYCLO_COLLECTIONS,
      path: "collections"
    },
    collectionscards: {
      method: EncyclopediaMethods.ENCYCLO_COLLECTION_ITEMS,
      path: "collectionscards"
    },
    battlearenas: {
      method: EncyclopediaMethods.ENCYCLO_MAPS,
      path: "battlearenas"
    }
  }
};

export const warshipsStructure: CategoryMetadata = {
  name: Categories.WARSHIPS,
  path: "ships",
  methods: {
    stats: {
      method: WarshipsMethods.SHIP_PLAYER_STATS,
      path: "stats"
    }
  }
};

export const seasonsStructure: CategoryMetadata = {
  name: Categories.SEASON,
  path: "seasons",
  methods: {
    info: {
      method: SeasonsMethods.SEASONS_INFOS,
      path: "info"
    },
    shipstats: {
      method: SeasonsMethods.SEASONS_SHIP_PLAYER_STATS,
      path: "shipstats"
    },
    accountinfo: {
      method: SeasonsMethods.SEASONS_PLAYER_STATS,
      path: "accountinfo"
    }
  }
};

export const clansStructure: CategoryMetadata = {
  name: Categories.CLANS,
  path: "clans",
  methods: {
    list: {
      method: ClansMethods.CLANS_SEARCH,
      path: "list"
    },
    info: {
      method: ClansMethods.CLANS_DETAILS,
      path: "info"
    },
    accountinfo: {
      method: ClansMethods.CLANS_PLAYER_DATA,
      path: "accountinfo"
    },
    glossary: {
      method: ClansMethods.CLANS_GLOSSARY,
      path: "glossary"
    },
    season: {
      method: ClansMethods.CLANS_SEASONS,
      path: "season"
    }
  }
};

export const apiStructure: ApiMetadata = {
  accounts: accountsStructure,
  encyclopedia: encyclopediaStructure,
  warships: warshipsStructure,
  seasons: seasonsStructure,
  clans: clansStructure
};
