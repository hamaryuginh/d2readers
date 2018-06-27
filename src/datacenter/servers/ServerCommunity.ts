export default class ServerCommunity {
  public static readonly MODULE: string = 'ServerCommunities';

  public id: number;
  public nameId: number;
  public shortId: string;
  public defaultCountries: string[];
  public supportedLangIds: number[];
  public namingRulePlayerNameId: number;
  public namingRuleGuildNameId: number;
  public namingRuleAllianceNameId: number;
  public namingRuleAllianceTagId: number;
  public namingRulePartyNameId: number;
  public namingRuleMountNameId: number;
  public namingRuleNameGeneratorId: number;
  public namingRuleAdminId: number;
  public namingRuleModoId: number;
}
