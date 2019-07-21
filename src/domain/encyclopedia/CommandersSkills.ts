export interface CommandersSkillsPerk {
  /**
   *     Description
   */
  description: string;

  /**
   *     Skill ID
   */
  perk_id: number;
}

export interface CommandersSkills {
  /**
   *     URL to skill icon
   */
  icon: string;

  /**
   *     Name
   */
  name: string;

  /**
   *     Tier
   */
  tier: number;

  /**
   *     Skill type ID
   */
  type_id: number;

  /**
   *     Skill type name
   */
  type_name: string;

  /**
   *     Skills
   */
  perks: CommandersSkillsPerk[];
}
